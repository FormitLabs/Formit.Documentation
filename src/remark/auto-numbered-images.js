import {visit} from "unist-util-visit";

// TODO: если бы был TS, не было бы этого кода
const imageProps = new Set(["width", "height", "image", "title", "id"]);
const requiredImageProps = new Set(["image", "title", "id"]);
const jsxElementTypes = new Set(["mdxJsxFlowElement", "mdxJsxTextElement"]);

const newPluginError = (file, lineCol, message, error) => {
    const locationInFile = lineCol == null ? "" : `:${lineCol.line}:${lineCol.column}`;
    let finalMessage = `Путь: "${file.path + locationInFile}" Сообщение: "${message}"`;

    if (error == null) {
        return new Error(finalMessage);
    }

    finalMessage += ` Исходное сообщение: "${error?.message}"`;
    return new Error(finalMessage, {cause: error});
}

const newJsxProp = (name, value) => ({type: "mdxJsxAttribute", name, value})

const plugin = () => {

    const transformer = async (ast, file) => {
        // TODO: если потребуется, можно добавить индексацию видео вложений и т.д.
        const indexByType = {"image": 1};


        if (!file.path.endsWith("indexX.md")) {
            return;
        }

        const imageInfoById = {};

        visit(ast, n => jsxElementTypes.has(n.type) && n.name === "Image", (node) => {

            // Validate image props
            const requiredPropsToCheck = new Set(requiredImageProps);
            for (const attr of node.attributes) {
                if (!imageProps.has(attr.name)) {
                    throw newPluginError(file, node.position?.start, `Неизвестный параметр Image "${attr.name}"`);
                }

                if (requiredPropsToCheck.has(attr.name) && attr.value != null && attr.value !== "") {
                    requiredPropsToCheck.delete(attr.name);
                }
            }

            if (requiredPropsToCheck.size > 0) {
                const formattedProps = [...requiredPropsToCheck.values()].map(v => `"${v}"`).join(", ");
                throw newPluginError(file, node.position?.start, `Отсутствуют или некорректно заданы обязательные параметры Image: ${formattedProps}`);
            }


            // Add index prop and increase index
            const currentIndex = indexByType["image"];
            node.attributes.push(newJsxProp("__imageNumber", currentIndex));
            indexByType["image"]++;

            // Update images info and throw error on duplicates
            const id = node.attributes.find(a => a.name === "id").value;
            if (imageInfoById[id] != null) {
                throw newPluginError(file, node.position?.start, `Повторный id Image: "${id}"`);
            }

            const title = node.attributes.find(a => a.name === "title").value;
            imageInfoById[id] = {number: currentIndex, title};
        });

        visit(ast, n => jsxElementTypes.has(n.type) && n.name === "ImageLink", node => {
            // ImageLink should not have children, they will be overridden
            if (node.children.length > 0) {
                throw newPluginError(file, node.position?.start, `ImageLink не должен иметь children`);
            }

            // ImageLink should have required "imageId" prop
            const imageId = node.attributes.find(a => a.name === "imageId" && a.value != null && a.value !== "")?.value;
            if (imageId == null) {
                throw newPluginError(file, node.position?.start, `Отсутствует или некорректно задан обязательный параметр ImageLink: "imageId"`);
            }

            // ImageLink should have only "imageId" prop, other will be overridden
            if (node.attributes.length > 1) {
                const formattedProps = node.attributes.filter(a => a.name !== "imageId").map(v => `"${v}"`).join(", ")
                throw newPluginError(file, node.position?.start, `Неизвестные параметры ImageLink: ${formattedProps}`);
            }

            // Image with "imageId" should exist on page
            const imageInfo = imageInfoById[imageId];
            if (imageInfo == null) {
                throw newPluginError(file, node.position?.start, `Не найден Image с id: "${imageId}"`);
            }

            // Turn ImageLink into `a` with correct parameters
            node.name = "a";
            node.attributes = [newJsxProp("href", `#${imageId}`)];
            node.children = [{type: "text", value: `рис. ${imageInfo.number}`}];
        });
    };
    return transformer;
};


export default plugin;
import type {Root} from "mdast";
import type {VFile} from "vfile";
import {visit} from "unist-util-visit";
import {getSimplePropsOrError, isJsxNode, JsxNode, newJsxProp, newPluginError} from "./utility";
import {MdxJsxAttribute} from "mdast-util-mdx";

// TODO: проверить, можно ли добавить поддержку TS в MDX
const imageProps = new Set<string>(["width", "height", "image", "title", "id"]);
const requiredImageProps = new Set<string>(["image", "title", "id"]);


const plugin = () => {

    const transformer = async (ast: Root, file: VFile) => {
        // TODO: если потребуется, можно добавить индексацию видео вложений и т.д.
        const indexByType = {"image": 1};

        const imageInfoById: Record<string, { title: MdxJsxAttribute["value"], index: number }> = {};

        visit(ast, n => isJsxNode(n) && n.name === "Image", (n) => {
            const node = n as JsxNode;
            const attributes = getSimplePropsOrError(node, file);

            // Validate image props
            const requiredPropsToCheck = new Set(requiredImageProps);
            for (const attr of attributes) {
                if (!imageProps.has(attr.name)) {
                    console.warn(newPluginError(file, node.position?.start, `Неизвестный параметр Image "${attr.name}"`).message);
                }


                if (attr.name === "title" && typeof attr.value === "string" && attr.value.includes("Рисунок")) {
                    console.warn(newPluginError(file, node.position?.start, `БЛЯЯЯ РИССС "${attr.name}"`).message);
                }

                // Specific validation for "id"
                if (attr.name === "id" && typeof attr.value === "object") {
                    throw newPluginError(file, node.position?.start, `Параметр "id" у Image должен быть задан обычной строкой`);
                }

                if (requiredPropsToCheck.has(attr.name) && attr.value != null && attr.value !== "") {
                    requiredPropsToCheck.delete(attr.name);
                }
            }

            if (requiredPropsToCheck.size > 0) {
                const formattedProps = [...requiredPropsToCheck.values()].map(v => `"${v}"`).join(", ");
                throw newPluginError(file, node.position?.start, `Отсутствуют или некорректно заданы обязательные параметры Image: ${formattedProps}`).message;
            }


            // Add index prop and increase index
            const currentIndex = indexByType["image"];
            node.attributes.push(newJsxProp("__imageIndex", currentIndex.toString()));
            indexByType["image"]++;

            // Update images info and throw error on duplicates
            // Force cast as we have validated id previously
            const id = attributes.find(a => a.name === "id")!.value as string;
            if (imageInfoById[id] != null) {
                throw newPluginError(file, node.position?.start, `Повторный id Image: "${id}"`).message;
            }

            const title = attributes.find(a => a.name === "title")!.value;
            imageInfoById[id] = {index: currentIndex, title};
        });

        visit(ast, n => isJsxNode(n) && n.name === "ImageLink", n => {
            const node = n as JsxNode;
            const attributes = getSimplePropsOrError(node, file);

            // ImageLink should not have children, they will be overridden
            if (node.children.length > 0) {
                throw newPluginError(file, node.position?.start, `ImageLink не должен иметь children`);
            }

            // ImageLink should have required "to" prop
            const imageIdAttribute = attributes.find(a => a.name === "to");
            if (imageIdAttribute?.value == null || typeof imageIdAttribute.value === "object" || imageIdAttribute.value === "") {
                throw newPluginError(file, node.position?.start, `Отсутствует или некорректно задан обязательный параметр ImageLink: "to"`);
            }

            // ImageLink should have only "to" prop, other will be overridden
            if (attributes.length > 1) {
                const formattedProps = attributes.filter(a => a.name !== "to").map(v => `"${v}"`).join(", ")
                throw newPluginError(file, node.position?.start, `Неизвестные параметры ImageLink: ${formattedProps}`);
            }

            // Image with specified "id" should exist on page
            const imageId = imageIdAttribute.value;
            const imageInfo = imageInfoById[imageId];
            if (imageInfo == null) {
                throw newPluginError(file, node.position?.start, `Не найден Image с id: "${imageId}"`);
            }

            // Turn ImageLink into `a` with correct parameters
            node.name = "a";
            node.attributes = [newJsxProp("href", `#${imageId}`)];
            node.children = [{type: "text", value: `рис. ${imageInfo.index}`}];
        });
    };
    return transformer;
};


export default plugin;
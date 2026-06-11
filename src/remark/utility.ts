import type {MdxJsxAttribute, MdxJsxFlowElement, MdxJsxTextElement} from "mdast-util-mdx";
import type {Node} from "mdast";
import type {VFile} from "vfile";

export type JsxNode = MdxJsxFlowElement | MdxJsxTextElement;

const jsxNodeTypes = new Set<string>(["mdxJsxFlowElement", "mdxJsxTextElement"]);

/**
 * Является ли узел дерева JSX-элементом
 * @remarks
 * Узел считается JSX-элементом, когда он имеет тип "mdxJsxFlowElement" или "mdxJsxTextElement"
 */
export const isJsxNode = (node: Node): node is JsxNode => jsxNodeTypes.has(node.type);

/**
 * Создать узел дерева, олицетворяющий простой пропс JSX-элемента
 */
export const newJsxProp = (name: string, value: string): MdxJsxAttribute => ({type: "mdxJsxAttribute", name, value});

/**
 * Обертка над Error, насыщающая её информацией, позволяющей легче найти точное место ее возникновения
 */
export const newPluginError = (file: VFile, lineCol: NonNullable<JsxNode["position"]>["start"] | undefined, message: string, error?: any): Error => {
    const locationInFile = lineCol == null ? "" : `:${lineCol.line}:${lineCol.column}`;
    let finalMessage = `Путь: "${file.path + locationInFile}" Сообщение: "${message}"`;

    if (error == null) {
        return new Error(finalMessage);
    }

    finalMessage += ` Исходное сообщение: "${error?.message}"`;
    return new Error(finalMessage, {cause: error});
}


/**
 * Получить только "простые" пропсы JSX-элемента и сразу выполнить каст
 * @throws Error, если `node` содержит сложные атрибуты (по типу \{...restProps\})
 */
export const getSimplePropsOrError = (node: JsxNode, file: VFile): MdxJsxAttribute[] => {
    if (node.attributes.some(a => a.type !== "mdxJsxAttribute")) {
        throw newPluginError(file, node.position?.start, `${node.name} не поддерживает атрибуты типа "MdxJsxExpressionAttribute"`);
    }

    return node.attributes as MdxJsxAttribute[];
}


import {Heading, Node, Root, Text} from "mdast";
import type {VFile} from "vfile";
import {visit} from "unist-util-visit";
import {newPluginError} from "./utility";

export interface ReleasesValidationOptions {
    /**
     * Заголовками 2-го уровня являются "Продукты"
     * @remarks
     * - Расширять конфиг при добавлении новых продуктов
     * - Заголовок каждого продукта должен встречать только 1 раз
     * @example
     * Валидные заголовки:
     * ## Обновления Formit ПД
     * ## Обновления Formit Conception
     */
    acceptableH2: string[];


    /**
     * Заголовками 3-го уровня являются разделы "Продуктов"
     * @remarks
     * - Расширять конфиг при добавлении новых продуктов
     * - На данный момент нет группировки разделов по продуктам, все передается в одном списке
     * @example
     * Валидные заголовки:
     * ### Обновления Formit ПД
     * ### Обновления Formit Conception
     */
    acceptableH3: string[];

    /**
     * Проверять на последовательность заголовков 2-го уровня
     * @remarks
     * Порядок заголовков задается массивом {@link ReleasesValidationOptions.acceptableH2}
     */
    forceH2Order: boolean;

    /**
     * Предикат для отбора файлов, которые нужно валидировать (т.е. они содержат информации о релизах)
     */
    shouldProcessFile: (file: VFile) => boolean;
}

const isHeading = (n: Node): n is Heading => n.type === "heading";

const validateH2 = (ast: Root, file: VFile, options: ReleasesValidationOptions): void => {
    const acceptableH2Set = new Set(options.acceptableH2);

    const uniqueH2 = new Set<string>();
    let allH2Count = 0;
    let previousH2: string | null = null;

    // TODO: добавить валидацию того, какой релиз является `latest` и форсить изменения `slug`

    visit(ast, n => isHeading(n) && n.depth === 2, (n) => {
        const node = n as Heading;
        const content = node.children;

        // Validate for complex content
        if (content.length !== 1 || content.some(c => c.type !== "text")) {
            throw newPluginError(file, node.position?.start, "Заголовки второго уровня должны быть простой строкой, комплексная верстка не поддерживается");
        }

        // Validate text content
        const h2 = (content[0] as Text).value;
        if (!acceptableH2Set.has(h2)) {
            throw newPluginError(file, node.position?.start, `Недопустимый заголовок второго уровня "${h2}", проверьте список разрешенных заголовков в конфигурации`);
        }

        // Update values for unique h2 checks
        uniqueH2.add(h2);
        allH2Count++;

        // Validate order
        if (options.forceH2Order) {
            const currentH2Index = options.acceptableH2.findIndex(v => v === h2);
            const validPreviousH2 = new Set(options.acceptableH2.slice(0, currentH2Index));

            if (previousH2 !== null && !validPreviousH2.has(previousH2)) {
                throw newPluginError(file, node.position?.start, `Недопустимый порядок заголовков второго уровня: "${h2}" не может идти после "${previousH2}", проверьте порядок заголовков в конфигурации`);
            }

            previousH2 = h2;
        }
    });

    if (allH2Count === 0) {
        throw newPluginError(file, undefined, "Страница должна содержать хотя бы один заголовок второго уровня");
    }

    if (allH2Count > uniqueH2.size) {
        throw newPluginError(file, undefined, "Страница содержит несколько заголовков второго уровня с одинаковым текстом");
    }
};

// TODO: также добавить проверку на отсутствие дублирования h3 в рамках раздела, и расширить, что h3 должны быть разными для каждого продукта + иметь order
const validateH3 = (ast: Root, file: VFile, options: ReleasesValidationOptions): void => {
    const acceptableH3Set = new Set(options.acceptableH3);

    visit(ast, n => isHeading(n) && n.depth === 3, (n) => {
        const node = n as Heading;
        const content = node.children;

        // Validate for complex content
        if (content.length !== 1 || content.some(c => c.type !== "text")) {
            throw newPluginError(file, node.position?.start, "Заголовки третьего уровня должны быть простой строкой, комплексная верстка не поддерживается");
        }

        // Validate text content
        const h3 = (content[0] as Text).value;
        if (!acceptableH3Set.has(h3)) {
            throw newPluginError(file, node.position?.start, `Недопустимый заголовок третьего уровня "${h3}", проверьте список разрешенных заголовков в конфигурации`);
        }
    });
};

const plugin = (options: ReleasesValidationOptions) => {
    const transformer = async (ast: Root, file: VFile) => {
        if (!options.shouldProcessFile(file)) {
            return;
        }

        console.info("releases-validation processing: ", file.path);

        // TODO: добавить проверку на наличие `***` и на то, что он один + в самом начале

        validateH2(ast, file, options);
        validateH3(ast, file, options);
    };

    return transformer;
};


export default plugin;
import { getVisibleHeight } from './get-visible-height.ts';

export type config = {
    percentage: boolean;
    offset: number;
}

export interface MostVisible {
    (elements: NodeListOf<Element> | string, userOptions: Partial<config>): Element | null;

    defaults: config;
}

const mostVisible: MostVisible = function mostVisible(elements: NodeListOf<Element> | string, userOptions: Partial<config>): Element | null {
    if (typeof elements === 'string') {
        // eslint-disable-next-line no-param-reassign
        elements = document.querySelectorAll(elements);
    }

    const options: config = { ...mostVisible.defaults, ...userOptions };

    return Array.from(elements).reduce<[number, Element | null]>(
        ([accValue, accElement], element) => {
            const value = getVisibleHeight(element, options.offset, options.percentage);

            return accValue === null || value > accValue ? [value, element] : [accValue, accElement];
        },
        [0, null]
    )[1];
};

mostVisible.defaults = {
    percentage: false,
    offset: 0,
};

export { mostVisible };

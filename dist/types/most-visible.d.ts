export type config = {
    percentage: boolean;
    offset: number;
};
export interface MostVisible {
    (elements: NodeListOf<Element> | string, userOptions: Partial<config>): Element | null;
    defaults: config;
}
declare const mostVisible: MostVisible;
export { mostVisible };

import type { config, MostVisible } from './most-visible.ts';

export function makejQueryPlugin($: any, mostVisible: MostVisible) {
    // eslint-disable-next-line no-param-reassign, func-names
    $.fn.mostVisible = function (options: Partial<config>) {
        return this.filter(mostVisible(this.get(), options));
    };
}

export default function makejQueryPlugin($, mostVisible) {
    // eslint-disable-next-line no-param-reassign, func-names
    $.fn.mostVisible = function (options) {
        return this.filter(mostVisible(this.get(), options));
    };
}

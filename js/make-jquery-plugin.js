export default function makejQueryPlugin($, mostVisible) {
    $.fn.mostVisible = function(options) {
        return this.filter(mostVisible(this.get(), options));
    };
}

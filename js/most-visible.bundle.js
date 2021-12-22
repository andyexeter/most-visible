import mostVisible from './most-visible';
import makejQueryPlugin from './make-jquery-plugin';

// Try adding the jQuery plugin to window.jQuery
if (window && window.jQuery) {
    makejQueryPlugin(window.jQuery, mostVisible);
}

export default mostVisible;

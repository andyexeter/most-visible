import { mostVisible } from './most-visible.ts';
import { makejQueryPlugin } from './make-jquery-plugin.ts';

// Try adding the jQuery plugin to window.jQuery
if (window && window.jQuery) {
    makejQueryPlugin(window.jQuery, mostVisible);
}

export default mostVisible;

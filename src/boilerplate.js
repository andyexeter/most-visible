((root, factory) => {
    // Universal Module Definition
    /* jshint strict:false */
    /* global define: false, module: false */
    if (typeof define === 'function' && define.amd) {
        define([], () => factory(root));
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(root);
    } else {
        root.mostVisible = factory(root);
    }
})(typeof self !== 'undefined' ? self : this, window => {
    /* jshint unused: vars */

    // include "plugin.js"
});

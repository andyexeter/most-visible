(function (root, factory) {
    // Universal Module Definition
    /* jshint strict:false */
    /* global define: false, module: false */
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        root.mostVisible = factory(root);
    }
}(this, function (window) {
    /* jshint unused: vars */

    // include "plugin.js"
}));

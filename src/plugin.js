'use strict';

/**
 * MostVisible constructor
 *
 * @param {NodeList|string} elements
 * @param {{}} options
 * @constructor
 */
function MostVisible(elements, options) {
    if (!(this instanceof MostVisible)) {
        return (new MostVisible(elements, options)).getMostVisible();
    }

    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    this.elements = elements;
    this.options = extend({}, MostVisible.defaults, options);
}

/**
 * MostVisible default options
 *
 * @namespace
 * @property {{}}      defaults             Default options hash.
 * @property {boolean} defaults.percentage  Whether to calculate visibility as a percentage of height.
 * @property {number}  defaults.offset      An offset to take into account when calculating visibility.
 */
MostVisible.defaults = {
    percentage: false,
    offset: 0
};

MostVisible.prototype = {
    /**
     * Returns the most visible element from the instance's NodeList.
     *
     * @returns {HTMLElement} Most visible element.
     */
    getMostVisible: function () {
        const viewportHeight = document.documentElement.clientHeight;
        return Array.prototype.reduce.call(this.elements, (carry, element) => {
            const value = this.getVisibleHeight(element, viewportHeight);

            return value > carry[0] ? [value, element] : carry;
        }, [0, null])[1];
    },

    /**
     * Returns the visible height of an element.
     *
     * @param {HTMLElement} element Element to check the visibility of.
     * @param {number}      viewportHeight
     * @returns {number}    Visible height of the element in pixels or a percentage of the element's total height.
     */
    getVisibleHeight: function (element, viewportHeight) {
        const rect             = element.getBoundingClientRect(),
              rectTopOffset    = rect.top - this.options.offset,
              rectBottomOffset = rect.bottom - this.options.offset,
              height           = rect.bottom - rect.top,
              visible          = {
                  top: rectTopOffset >= 0 && rectTopOffset < viewportHeight,
                  bottom: rectBottomOffset > 0 && rectBottomOffset < viewportHeight
              };

        let visiblePx = 0;

        if (visible.top && visible.bottom) {
            // Whole element is visible
            visiblePx = height;
        } else if (visible.top) {
            visiblePx = viewportHeight - rect.top;
        } else if (visible.bottom) {
            visiblePx = rectBottomOffset;
        } else if (height > viewportHeight && rectTopOffset < 0) {
            const absTop = Math.abs(rectTopOffset);

            if (absTop < height) {
                // Part of the element is visible
                visiblePx = height - absTop;
            }
        }

        if (this.options.percentage) {
            return (visiblePx / height) * 100;
        }

        return visiblePx;
    }
};

MostVisible.makeJQueryPlugin = $ => {
    if (!$) {
        return;
    }

    $.fn.mostVisible = function (options) {
        const instance = new MostVisible(this.get(), options);
        return this.filter(instance.getMostVisible());
    };
};

// Try adding the jQuery plugin to window.jQuery
MostVisible.makeJQueryPlugin(window.jQuery);

/**
 * Extends obj by adding the properties of all other objects passed to the function.
 *
 * @param {...{}} obj
 * @returns {{}} The extended object.
 */
function extend(obj) {
    for (let i = 1; i < arguments.length; i++) {
        for (const key in arguments[i]) {
            obj[key] = arguments[i][key];
        }
    }

    return obj;
}

return MostVisible;

'use strict';

/**
 * MostVisible constructor
 *
 * @param {NodeList, String} elements
 * @param {object} options
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
 * @type {{percentage: boolean}} Whether to calculate visibility as a percentage of height.
 */
MostVisible.defaults = {
    percentage: false
};

MostVisible.prototype = {
    /**
     * Returns the most visible element from the instance's NodeList
     *
     * @returns {Element} Most visible element.
     */
    getMostVisible: function () {
        var element        = null,
            viewportHeight = document.documentElement.clientHeight,
            maxVisible     = 0;

        for (var i = 0; i < this.elements.length; i++) {
            var currentVisible = this.getVisibleHeight(this.elements[i], viewportHeight);

            if (currentVisible > maxVisible) {
                maxVisible = currentVisible;
                element = this.elements[i];
            }
        }

        return element;
    },

    /**
     * Returns the visible height of an element.
     *
     * @param {Element} element Element to check the visibility of.
     * @param viewportHeight
     * @returns {number} The visible height of the element in pixels or a percentage of the element's total height.
     */
    getVisibleHeight: function (element, viewportHeight) {
        var rect      = element.getBoundingClientRect(),
            height    = rect.bottom - rect.top,
            visible   = {
                top: rect.top >= 0 && rect.top < viewportHeight,
                bottom: rect.bottom > 0 && rect.bottom < viewportHeight
            },
            visiblePx = 0;

        if (visible.top && visible.bottom) {
            // Whole element is visible
            visiblePx = height;
        } else if (visible.top) {
            visiblePx = viewportHeight - rect.top;
        } else if (visible.bottom) {
            visiblePx = rect.bottom;
        } else if (height > viewportHeight && rect.top < 0) {
            var absTop = Math.abs(rect.top);

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

function makeJQueryPlugin($) {
    if (!$) {
        return;
    }

    $.fn.mostVisible = function (options) {
        var instance = new MostVisible(this.get(), options),
            element  = instance.getMostVisible();

        if (!element) {
            return $();
        }

        return $(element);
    };
}

// Try adding the jQuery plugin to window.jQuery
makeJQueryPlugin(window.jQuery);

/**
 * Extends obj by adding the properties of all other objects passed to the function.
 *
 * @param {...object} obj
 * @returns {object} The extended object.
 */
function extend(obj) {
    for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }

    return obj;
}

//noinspection JSAnnotator
return MostVisible;

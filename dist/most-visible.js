var mostVisible = (function () {
    'use strict';

    /**
     * Returns the visible height of an element.
     *
     * @param {HTMLElement} element Element to check the visibility of.
     * @param {number}      offset
     * @param {boolean}     percentage
     *
     * @returns {number}    Visible height of the element in pixels or a percentage of the element's total height.
     */
    function getVisibleHeight(element, offset, percentage) {
      const viewportHeight = document.documentElement.clientHeight,
            rect = element.getBoundingClientRect(),
            rectTopOffset = rect.top - offset,
            rectBottomOffset = rect.bottom - offset,
            height = rect.bottom - rect.top,
            visibleTop = rectTopOffset >= 0 && rectTopOffset < viewportHeight,
            visibleBottom = rectBottomOffset > 0 && rectBottomOffset < viewportHeight;

      const visiblePx = (() => {
        if (visibleTop) {
          // If both the top and bottom are visible, the whole element is visible
          return visibleBottom ? height : viewportHeight - rect.top;
        }

        if (visibleBottom) {
          return rectBottomOffset;
        }

        if (height > viewportHeight && rectTopOffset < 0) {
          const absTop = Math.abs(rectTopOffset);

          if (absTop < height) {
            // Part of the element is visible
            return height - absTop;
          }
        }

        return 0;
      })();

      if (percentage) {
        return visiblePx / height * 100;
      }

      return visiblePx;
    }

    /**
     * Returns the most visible element from the instance's NodeList.
     *
     * @param {NodeList<HTMLElement>|string} elements
     * @param {{}} options
     * @returns {HTMLElement} Most visible element.
     */

    function mostVisible(elements, options) {
      if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
      }

      options = Object.assign({}, mostVisible.defaults, options);
      return Array.from(elements).reduce((_ref, element) => {
        let [accValue, accElement] = _ref;
        const value = getVisibleHeight(element, options.offset, options.percentage);

        if (value > accValue) {
          accValue = value;
          accElement = element;
        }

        return [accValue, accElement];
      }, [0, null])[1];
    }
    /**
     * mostVisible default options
     *
     * @namespace
     * @property {{}}      defaults             Default options hash.
     * @property {boolean} defaults.percentage  Whether to calculate visibility as a percentage of height.
     * @property {number}  defaults.offset      An offset to take into account when calculating visibility.
     */


    mostVisible.defaults = {
      percentage: false,
      offset: 0
    };

    function makejQueryPlugin($, mostVisible) {
      $.fn.mostVisible = function (options) {
        return this.filter(mostVisible(this.get(), options));
      };
    }

    if (window && window.jQuery) {
      makejQueryPlugin(window.jQuery, mostVisible);
    }

    return mostVisible;

})();

var mostVisible = (function () {
    'use strict';

    /**
     * Returns the visible height of an element.
     *
     * @param {Element} element Element to check the visibility of.
     * @param {number}      offset
     * @param {boolean}     percentage
     *
     * @returns {number}    Visible height of the element in pixels or a percentage of the element's total height.
     */
    function getVisibleHeight(element, offset, percentage) {
      const viewportHeight = document.documentElement.clientHeight;
      const rect = element.getBoundingClientRect();
      const rectTopOffset = rect.top - offset;
      const rectBottomOffset = rect.bottom - offset;
      const height = rect.bottom - rect.top;
      const visibleTop = rectTopOffset >= 0 && rectTopOffset < viewportHeight;
      const visibleBottom = rectBottomOffset > 0 && rectBottomOffset < viewportHeight;
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

    const mostVisible = function (elements, userOptions) {
      if (typeof elements === 'string') {
        // eslint-disable-next-line no-param-reassign
        elements = document.querySelectorAll(elements);
      }
      const options = {
        ...mostVisible.defaults,
        ...userOptions
      };
      return Array.from(elements).reduce((_ref, element) => {
        let [accValue, accElement] = _ref;
        const value = getVisibleHeight(element, options.offset, options.percentage);
        return accValue === null || value > accValue ? [value, element] : [accValue, accElement];
      }, [0, null])[1];
    };
    mostVisible.defaults = {
      percentage: false,
      offset: 0
    };

    function makejQueryPlugin($, mostVisible) {
      // eslint-disable-next-line no-param-reassign, func-names
      $.fn.mostVisible = function (options) {
        return this.filter(mostVisible(this.get(), options));
      };
    }

    // Try adding the jQuery plugin to window.jQuery
    if (window && window.jQuery) {
      makejQueryPlugin(window.jQuery, mostVisible);
    }

    return mostVisible;

})();

/**
 * Returns the visible height of an element.
 *
 * @param {HTMLElement} element Element to check the visibility of.
 * @param {number}      offset
 * @param {boolean}     percentage
 *
 * @returns {number}    Visible height of the element in pixels or a percentage of the element's total height.
 */
export default function getVisibleHeight(element, offset, percentage) {
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
        return (visiblePx / height) * 100;
    }

    return visiblePx;
}

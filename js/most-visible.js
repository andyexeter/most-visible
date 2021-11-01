import getVisibleHeight from "./get-visible-height";

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

    return Array.from(elements).reduce(([accValue, accElement], element) => {
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

export default mostVisible;

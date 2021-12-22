import getVisibleHeight from './get-visible-height.js';

/**
 * Returns the most visible element from the instance's NodeList.
 *
 * @param {NodeList<HTMLElement>|string} elements
 * @param {mostVisibleConfig} userOptions
 * @returns {HTMLElement} Most visible element.
 */
function mostVisible(elements, userOptions) {
    if (typeof elements === 'string') {
        // eslint-disable-next-line no-param-reassign
        elements = document.querySelectorAll(elements);
    }

    /** @type {mostVisibleConfig} options * */
    const options = { ...mostVisible.defaults, ...userOptions };

    return Array.from(elements).reduce(
        ([accValue, accElement], element) => {
            const value = getVisibleHeight(element, options.offset, options.percentage);

            return value > accValue ? [value, element] : [accValue, accElement];
        },
        [0, null]
    )[1];
}

/**
 * @typedef {Object} mostVisibleConfig
 * @property {boolean} percentage  Whether to calculate visibility as a percentage of height.
 * @property {number}  offset      An offset to take into account when calculating visibility.
 */

/**
 * @type {mostVisibleConfig}
 */
mostVisible.defaults = {
    percentage: false,
    offset: 0,
};

export default mostVisible;

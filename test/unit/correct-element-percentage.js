/* global QUnit:false, $:false */
QUnit.test('when scrolled 20px past the top element and percentage is true, middle element should be most visible', (assert) => {
    const done = assert.async();

    $(() => {
        const $elements = $('#elements').find('.element');
        const $element = $elements.eq(1);

        window.scrollTo(0, $elements.eq(0).offset().top + 20);

        assert.strictEqual($elements.mostVisible({ percentage: true }).get(0), $element.get(0), 'middle element was most visible');

        window.scrollTo(0, 0);

        done();
    });
});

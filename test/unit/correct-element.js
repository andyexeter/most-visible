/* global QUnit:false, $:false */
QUnit.test('when scrolled to bottom, last element should be most visible', (assert) => {
    const done = assert.async();

    $(() => {
        const $elements = $('#elements').find('.element');
        const $element = $elements.eq(-1);

        window.scrollTo(0, document.documentElement.scrollHeight);

        assert.strictEqual($elements.mostVisible().get(0), $element.get(0), 'last element was most visible');

        window.scrollTo(0, 0);

        done();
    });
});

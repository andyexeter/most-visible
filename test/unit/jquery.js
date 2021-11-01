/* global QUnit:false, $:false */
QUnit.test('jquery plugin', (assert) => {
    assert.expect(2);

    const done = assert.async(2);

    $(() => {
        const $element = $('#elements').find('.element').mostVisible();

        assert.ok($element instanceof $ && $element.length, 'we have a jQuery element.');
        done();

        assert.ok($element.get(0) instanceof HTMLElement, 'we have an element.');
        done();
    });
});

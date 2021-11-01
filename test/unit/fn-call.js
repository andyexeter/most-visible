/* global QUnit:false, mostVisible:false */
QUnit.test('vanilla js function call', (assert) => {
    const element = mostVisible(document.querySelectorAll('#elements .element'));

    assert.ok(element instanceof HTMLElement, 'we have an element.');
});

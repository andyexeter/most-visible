/* global QUnit:false */
QUnit.test('global object attached to root', (assert) => {
    assert.ok(window.mostVisible, 'global object is attached.');
});

/* global QUnit:false */
QUnit.test('global object attached to root', function (assert) {
    'use strict';

    assert.ok(window.mostVisible, 'global object is attached.');
});

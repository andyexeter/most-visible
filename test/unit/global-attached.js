/* global QUnit:false */
QUnit.test('global object attached to root', function (assert) {
    'use strict';

    assert.ok(window.mostVisible && window.mostVisible.prototype.getMostVisible, 'global object is attached.');

});

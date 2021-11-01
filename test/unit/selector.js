/* global QUnit:false, mostVisible:false */
QUnit.test('when passing a selector string, an HTMLElement should still be returned', function (assert) {
    'use strict';

    const element = mostVisible('#elements .element');

    assert.ok(element instanceof HTMLElement, 'we have a HTMLElement.');

});

/* global QUnit:false, mostVisible:false */
QUnit.test('when passing a selector string, instance.elements should still be a NodeList', function (assert) {
    'use strict';

    var instance = new mostVisible('#elements .element');

    assert.ok(instance.elements instanceof NodeList, 'we have a NodeList.');

});

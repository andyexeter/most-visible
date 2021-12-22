import QUnit from 'qunit';
import mostVisible from '../js/most-visible.js';

QUnit.module('mostVisible');

QUnit.test('config', (assert) => {
    assert.true(typeof mostVisible.defaults === 'object');
});

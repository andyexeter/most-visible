import QUnit from 'qunit';
import { mostVisible } from '../dist/most-visible.mjs';

QUnit.module('mostVisible');

QUnit.test('config', (assert) => {
    assert.true(typeof mostVisible.defaults === 'object');
});

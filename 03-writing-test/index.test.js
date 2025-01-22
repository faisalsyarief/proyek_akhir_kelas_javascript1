import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

console.log('2+3=' + sum(2, 3));

test('Menambahkan 5 dan 5 harus menghasilkan 10', () => {
    assert.strictEqual(sum(5, 5), 10);
});

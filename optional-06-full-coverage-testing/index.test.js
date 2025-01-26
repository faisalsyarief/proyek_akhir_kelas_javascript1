import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

console.log('2+3=' + sum(2, 3));

test('Mengharapkan hasil penjumlahan 3 + 5 = 8', () => {
    const result = sum(3, 5);
    assert.strictEqual(result, 8);
});

test('Angka Negatif', () => {
    const result1 = sum(3, -5);
    const result2 = sum(-3, 5);
    const result3 = sum(-3, -5);
    assert.strictEqual(result1, 0);
    assert.strictEqual(result2, 0);
    assert.strictEqual(result3, 0);
});

test('Mengharapkan hasil penjumlahan 10 + 20 = 30', () => {
    const result = sum(10, 20);
    assert.strictEqual(result, 30);
});

test('sum() should return 0 if both arguments are zero', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
});

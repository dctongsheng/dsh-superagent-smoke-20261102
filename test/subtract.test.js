import test from 'node:test';
import assert from 'node:assert/strict';
import { subtract } from '../src/subtract.js';

test('subtracts positive integers', () => assert.equal(subtract(5, 2), 3));
test('subtracts a larger value from a negative one', () => assert.equal(subtract(-2, 3), -5));
test('subtracts decimal values', () => assert.equal(subtract(1.5, 0.5), 1));
test('handles zero', () => assert.equal(subtract(0, 0), 0));

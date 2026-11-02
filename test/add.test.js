import test from 'node:test';
import assert from 'node:assert/strict';
import { add } from '../src/add.js';

test('adds positive integers', () => assert.equal(add(2, 3), 5));
test('adds a negative value', () => assert.equal(add(-2, 3), 1));
test('adds decimal values', () => assert.equal(add(1.5, 2.5), 4));
test('handles zero', () => assert.equal(add(0, 0), 0));

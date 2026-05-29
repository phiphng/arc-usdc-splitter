import test from 'node:test';import assert from 'node:assert/strict';import {splitUsdc} from '../src/index.js';
test('splits by weights',()=>{const r=splitUsdc(100_000000n,[{address:'a',weight:1},{address:'b',weight:3}]);assert.deepEqual(r.map(x=>x.amount),['25000000','75000000']);});

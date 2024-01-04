'use strict';

// b -> a -> b
console.log('evaluating b.mjs');

const b = (() => {
    try {
        return a
    } catch {
        console.error('a is in TDZ');
        process.exit(1);
    }
})() + 1;

// a -> b -> a
console.log('evaluating a.mjs');

const a = (() => {
    try {
        return b
    } catch {
        console.error('b is in TDZ');
        process.exit(1);
    }
})() + 1;

console.log({a, b});

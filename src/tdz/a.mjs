// a -> b -> a
import { b } from './b.mjs'
console.log('evaluating a.mjs');

export const a = (() => {
    try {
        return b
    } catch {
        console.error('b is in TDZ');
        process.exit(1);
    }
})() + 1;

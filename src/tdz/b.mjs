// b -> a -> b
import { a } from './a.mjs';
console.log('evaluating b.mjs');

export const b = (() => {
    try {
        return a
    } catch {
        console.error('a is in TDZ');
        process.exit(1);
    }
})() + 1;

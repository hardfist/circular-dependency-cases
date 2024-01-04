// b -> a -> b
import * as a from './a.mjs';
console.log('b.mjs evaluating')
a.default()
a.willTDZ()

// prevent inlining tdz as a const
let tdz = Date.now() > 0;
export function willTDZ() {
    try {
        console.error(`b typeof tdz`, typeof tdz)
    } catch (e) {
        console.error('b threw on tdz')
    }
}
export default function () {
    console.log('b default()');
}

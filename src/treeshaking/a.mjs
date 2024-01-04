import * as b from './b.mjs';
b.willTDZ()

// prevent inlining tdz as a const
let tdz = Date.now() > 0;
export function willTDZ() {
    try {
        console.error(`a typeof tdz`, typeof tdz)
    } catch (e) {
        console.error('a did tdz')
    }
}
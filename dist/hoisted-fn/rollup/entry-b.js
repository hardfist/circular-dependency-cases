'use strict';

// a -> b -> a
console.log('a.mjs evaluating');
b();
willTDZ();

// prevent inlining tdz as a const
let tdz$1 = Date.now() > 0;
function willTDZ$1() {
    try {
        console.error(`a typeof tdz`, typeof tdz$1);
    } catch (e) {
        console.error('a did tdz');
    }
}
function a () {
    console.log('a default()');
}

// b -> a -> b
console.log('b.mjs evaluating');
a();
willTDZ$1();

// prevent inlining tdz as a const
let tdz = Date.now() > 0;
function willTDZ() {
    try {
        console.error(`b typeof tdz`, typeof tdz);
    } catch (e) {
        console.error('b threw on tdz');
    }
}
function b () {
    console.log('b default()');
}

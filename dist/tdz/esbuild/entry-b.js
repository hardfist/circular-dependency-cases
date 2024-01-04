"use strict";
(() => {
  // src/tdz/a.mjs
  console.log("evaluating a.mjs");
  var a = (() => {
    try {
      return b;
    } catch (e) {
      console.error("b is in TDZ");
      process.exit(1);
    }
  })() + 1;

  // src/tdz/b.mjs
  console.log("evaluating b.mjs");
  var b = (() => {
    try {
      return a;
    } catch (e) {
      console.error("a is in TDZ");
      process.exit(1);
    }
  })() + 1;

  // src/tdz/entry-b.mjs
  console.log({ a, b });
})();

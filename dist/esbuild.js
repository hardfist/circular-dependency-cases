"use strict";
(() => {
  // src/b.mjs
  var b = a + 1;

  // src/a.mjs
  var a = b + 1;

  // src/index.mjs
  console.log({ a, b });
})();

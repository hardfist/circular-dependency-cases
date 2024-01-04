"use strict";
(() => {
  // src/order-of-eval/b.mjs
  console.log("evaluating b.mjs");

  // src/order-of-eval/a.mjs
  console.log("evaluating a.mjs");

  // src/order-of-eval/entry-a.mjs
  console.log("done");
})();

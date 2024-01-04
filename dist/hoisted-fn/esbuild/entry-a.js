"use strict";
(() => {
  // src/hoisted-fn/b.mjs
  console.log("b.mjs evaluating");
  a_default();
  willTDZ();
  var tdz = Date.now() > 0;
  function willTDZ2() {
    try {
      console.error(`b typeof tdz`, typeof tdz);
    } catch (e) {
      console.error("b threw on tdz");
    }
  }
  function b_default() {
    console.log("b default()");
  }

  // src/hoisted-fn/a.mjs
  console.log("a.mjs evaluating");
  b_default();
  willTDZ2();
  var tdz2 = Date.now() > 0;
  function willTDZ() {
    try {
      console.error(`a typeof tdz`, typeof tdz2);
    } catch (e) {
      console.error("a did tdz");
    }
  }
  function a_default() {
    console.log("a default()");
  }
})();

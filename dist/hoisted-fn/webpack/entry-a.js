/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   willTDZ: () => (/* binding */ willTDZ)
/* harmony export */ });
/* harmony import */ var _b_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
// a -> b -> a

console.log('a.mjs evaluating')
_b_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]()
_b_mjs__WEBPACK_IMPORTED_MODULE_0__.willTDZ()

// prevent inlining tdz as a const
let tdz = Date.now() > 0;
function willTDZ() {
    try {
        console.error(`a typeof tdz`, typeof tdz)
    } catch (e) {
        console.error('a did tdz')
    }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    console.log('a default()');
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   willTDZ: () => (/* binding */ willTDZ)
/* harmony export */ });
/* harmony import */ var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// b -> a -> b

console.log('b.mjs evaluating')
_a_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]()
_a_mjs__WEBPACK_IMPORTED_MODULE_0__.willTDZ()

// prevent inlining tdz as a const
let tdz = Date.now() > 0;
function willTDZ() {
    try {
        console.error(`b typeof tdz`, typeof tdz)
    } catch (e) {
        console.error('b threw on tdz')
    }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    console.log('b default()');
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _b_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



})();

/******/ })()
;
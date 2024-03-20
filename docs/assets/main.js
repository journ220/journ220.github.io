/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
const docReady = function (func) {
  // https://stackoverflow.com/a/9899701
  // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(func, 1);
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
};
docReady(() => {
  // // dropdown
  // const dropdown = document.getElementById('toc-dropdown');
  // dropdown.addEventListener('change', e => {
  //   window.location.href = e.target.value;
  // });

  // shade lecture background
  const lectures = document.querySelectorAll('.lecture'),
    now = new Date();
  lectures.forEach(element => {
    const lectureDate = element.getAttribute('data-date'),
      dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hours: 'numeric',
        minutes: 'numeric',
        timeZone: 'pst'
      },
      d = new Date(`${lectureDate}T17:00:00.0000-08:00`);
    if (d <= now) {
      element.classList.add('passed');
    }
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
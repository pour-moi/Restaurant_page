/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  const content = document.getElementById(\"content\");\n\n  const contactbutton = document.createElement(\"button\");\n  contactbutton.textContent = \"Contact\";\n  contactbutton.style.width = \"80px\";\n  contactbutton.style.height = \"30px\";\n\n  content.appendChild(contactbutton);\n\n  contactbutton.addEventListener(\"click\", function () {\n    content.style.display = \"none\";\n\n    const contactPageContent = document.createElement(\"div\");\n    contactPageContent.textContent = \"Contact goes here\";\n\n    document.body.appendChild(contactPageContent);\n  });\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatecontent: () => (/* binding */ generatecontent)\n/* harmony export */ });\nfunction generatecontent() {\n  const content = document.getElementById(\"content\");\n\n  const headline = document.createElement(\"h1\");\n  headline.textContent = \"Welcome to my Resturant\";\n  content.appendChild(headline);\n\n  const image = document.createElement(\"img\");\n  image.src = \"../images/momos-4935232_960_720.jpg\";\n  image.alt = \"Restaurant image\";\n  content.appendChild(image);\n\n  const text = document.createElement(\"p\");\n  text.textContent =\n    \"My Restaurant is known for its exquisite cuisine and stunning ambiance. Come and experience dining like never before!\";\n  content.appendChild(text);\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_content_js__WEBPACK_IMPORTED_MODULE_0__.generatecontent)();\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();\n(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)();\n\nconst Button = document.querySelector(\"button\");\nButton.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu);\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n\n\nfunction menu() {\n  const content = document.getElementById(\"content\");\n\n  const menubutton = document.createElement(\"button\");\n  menubutton.textContent = \"Menu\";\n  menubutton.style.width = \"80px\";\n  menubutton.style.height = \"30px\";\n\n  content.appendChild(menubutton);\n\n  menubutton.addEventListener(\"click\", function () {\n    content.style.display = \"none\";\n\n    const menuPageContent = document.createElement(\"div\");\n    menuPageContent.textContent = \"Menu goes here\";\n\n    document.body.appendChild(menuPageContent);\n  });\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
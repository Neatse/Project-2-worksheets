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

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webapp_lookup_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webapp/lookup-form.js */ \"./webapp/lookup-form.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://group-one/./client.js?");

/***/ }),

/***/ "./services/fdc-api.js":
/*!*****************************!*\
  !*** ./services/fdc-api.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchFood\": () => (/* binding */ fetchFood),\n/* harmony export */   \"fetchFoods\": () => (/* binding */ fetchFoods),\n/* harmony export */   \"queryFoods\": () => (/* binding */ queryFoods)\n/* harmony export */ });\n\r\n// const { FDC_API_KEY } = process.env;\r\nconst FDC_API_KEY = 'aZeLyeWAdkQVTg6GCqKoNxcSD43nVObpvQs0O9LI';\r\n\r\nconst API_SERVER = 'https://api.nal.usda.gov/fdc';\r\nconst SEARCH_ENDPOINT = '/v1/foods/search';\r\nconst FETCH_MANY_ENDPOINT = '/v1/foods/';\r\nconst FETCH_ENDPOINT = '/v1/food/';\r\n\r\nfunction queryFoods(query) {\r\n    return fetch(`${API_SERVER}${SEARCH_ENDPOINT}?api_key=${FDC_API_KEY}&query=${encodeURIComponent(query)}&dataType=Foundation`)\r\n        .then(res => res.json());\r\n}\r\n\r\nfunction fetchFood(fdcId) {\r\n    return fetch(`${API_SERVER}${FETCH_ENDPOINT}${fdcId}?api_key=${FDC_API_KEY}`)\r\n        .then(res => res.json());\r\n}\r\n\r\nfunction fetchFoods(fdcIds) {\r\n    return fetch(`${API_SERVER}${FETCH_MANY_ENDPOINT}?api_key=${FDC_API_KEY}&${fdcIds.map(fdcId => `fdcIds[]=${fdcId}`)}`)\r\n        .then(res => res.json());\r\n}\r\n\n\n//# sourceURL=webpack://group-one/./services/fdc-api.js?");

/***/ }),

/***/ "./webapp/lookup-form.js":
/*!*******************************!*\
  !*** ./webapp/lookup-form.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_fdc_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fdc-api.js */ \"./services/fdc-api.js\");\n\r\n\r\n\r\nconst ingredientSearch = document.querySelector('#ingredient-lookup input[type=text]');\r\nconst submitButton = document.querySelector('#ingredient-lookup input[type=submit]');\r\nconst ingredientList = document.querySelector('#ingredient-list');\r\n\r\nsubmitButton.addEventListener('click', () => {\r\n    (0,_services_fdc_api_js__WEBPACK_IMPORTED_MODULE_0__.queryFoods)(ingredientSearch.value).then(results => {\r\n        ingredientList.innerHTML = JSON.stringify(results);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://group-one/./webapp/lookup-form.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client.js");
/******/ 	
/******/ })()
;
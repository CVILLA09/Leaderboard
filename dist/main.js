/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_leaderBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/leaderBoard.js */ \"./src/modules/leaderBoard.js\");\n/* harmony import */ var _modules_listScores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/listScores.js */ \"./src/modules/listScores.js\");\n\n\n\n\nconst leaderboard = new _modules_leaderBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\ndocument.getElementById('submit').addEventListener('click', () => {\n  const newName = document.getElementById('new-name').value;\n  const newScore = document.getElementById('new-score').value;\n  leaderboard.addItem(newName, newScore);\n  (0,_modules_listScores_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(leaderboard.list);\n});\n\nwindow.onload = async () => {\n  await leaderboard.createGame('Your Game Name');\n  await leaderboard.getScores(); // Fetch the scores when the page is loaded\n  (0,_modules_listScores_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(leaderboard.list);\n};\n\ndocument.querySelector('.refresh-buttton').addEventListener('click', async () => { // Corrected class name\n  await leaderboard.getScores();\n  (0,_modules_listScores_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(leaderboard.list);\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/modules/leaderBoard.js":
/*!************************************!*\
  !*** ./src/modules/leaderBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Leaderboard)\n/* harmony export */ });\nclass Leaderboard {\n  constructor() {\n    this.list = [];\n    this.gameId = ''; // This will hold the ID of your game\n  }\n\n  async createGame(gameName) {\n    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {\n      method: 'POST',\n      body: JSON.stringify({\n        name: gameName,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n\n    const data = await response.json();\n    this.gameId = data.result.slice(14); // Extract the game ID from the response\n  }\n\n  async addItem(newName, newScore) {\n    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`, {\n      method: 'POST',\n      body: JSON.stringify({\n        user: newName,\n        score: newScore,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n\n    await response.json();\n  }\n\n  async getScores() {\n    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameId}/scores/`);\n    const data = await response.json();\n    this.list = data.result; // Save the scores in your list\n  }\n}\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/leaderBoard.js?");

/***/ }),

/***/ "./src/modules/listScores.js":
/*!***********************************!*\
  !*** ./src/modules/listScores.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((list) => {\n  const container = document.querySelector('.scores-container');\n  // Reset score items\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n\n  list.forEach((item) => {\n    const scoreItem = document.createElement('li');\n    scoreItem.textContent = `${item.user}: ${item.score}`;\n    container.appendChild(scoreItem);\n  });\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/listScores.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|   background-color: #f6f6f6;\\n|   font-family: 'Courier New', Courier, monospace;\");\n\n//# sourceURL=webpack://leaderboard/./src/styles.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
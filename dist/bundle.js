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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'axios'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap/dist/css/bootstrap.min.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bootstrap/dist/js/bootstrap.bundle.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// Import della librerie\r\n\r\n\r\n\r\n\r\n\r\n// Dichiarazioni costanti\r\nconst btn = document.getElementById('search-button');\r\nconst categories = document.getElementById('categories');\r\nconst score = document.getElementById('score');\r\nconst summ = document.getElementById('summary');\r\n\r\nbtn.addEventListener('click', function () {\r\n  const cityName = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(document.getElementById('city-input').value));\r\n  if (!cityName) {\r\n    alert('Insert city!')\r\n    return\r\n  }\r\n  // Chiamata API\r\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'axios'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`)\r\n    .then(function (response) {\r\n      categories.innerHTML = \"\";\r\n      summ.innerHTML = response.data.summary;\r\n\r\n      const categoriesList = document.getElementById('categories')\r\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'lodash'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(response.data.categories, (category) => {\r\n        const listItem = document.createElement('li');\r\n        listItem.className = 'list-group-item';\r\n        listItem.innerHTML = `${category.name}: ${category.score_out_of_10.toFixed(2)}`;\r\n        categoriesList.appendChild(listItem);\r\n      });\r\n      summ.innerHTML = response.data.summary;\r\n      score.innerHTML = `Total score: ${response.data.teleport_city_score.toFixed(2)}`;\r\n    })\r\n\r\n    .catch(function (error) {\r\n      categories.style.display = 'none';\r\n      score.style.display = 'none';\r\n      summ.style.display = 'block';\r\n      summ.innerHTML = `The name of the city entered must be in English, \r\n        or you have entered a city not present in our database, sorry!`;\r\n      console.error('Errore durante la richiesta API', error);\r\n    });\r\n  document.getElementById('city-input').value = '';\r\n})\n\n//# sourceURL=webpack://s2i-js-advanced/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
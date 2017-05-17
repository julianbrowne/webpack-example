/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["dependency"] = dependency;

function dependency() { 
	return "production";
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "test.html";

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dependency__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business__ = __webpack_require__(3);




describe("Webpack", function() { 

    it("should have imported dependency", function() { 
        expect(__WEBPACK_IMPORTED_MODULE_0__dependency__).toBeDefined();
    });

    it("should have a func", function() { 
        expect(__WEBPACK_IMPORTED_MODULE_1__business__["a" /* business */]).toBeDefined();
    });

    it("should call dependency", function() { 
    	var spy = spyOn(__WEBPACK_IMPORTED_MODULE_0__dependency__, "dependency");
    	var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__business__["a" /* business */])();
        expect(spy).toHaveBeenCalled();
    });

    it("should work in prod", function() { 
    	var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__business__["a" /* business */])();
        expect(value).toEqual("production");
    });

    it("should work in test", function() { 
    	var spy = spyOn(__WEBPACK_IMPORTED_MODULE_0__dependency__, "dependency").and.returnValue("test");
    	var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__business__["a" /* business */])();
        expect(spy).toHaveBeenCalled();
        expect(value).toEqual("test");
    });
});		


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return business; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dependency__ = __webpack_require__(0);



function business() { 
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dependency__["dependency"])();
};

window.business = business;




/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(1);
__webpack_require__(2);


/***/ })
/******/ ]);
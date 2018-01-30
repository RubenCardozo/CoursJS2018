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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*VARIABLES en JS*/
var monVariable;
monVariable="Hello world";
console.log(monVariable);

var monEpouse = "Andrea!!!";
console.log(monEpouse);

var a;
console.log(a);

var b;
b=12;
console.log(b);


console.log(typeof(b));
console.log(typeof(a));

var c=true;
console.log(typeof(c));
var c=1;
console.log(typeof(c));
console.info(typeof(c));
/********************************************************/
/*OBJET en JS*/
var d= {
    couleur: "blue",
    marque: "Caran d'ache"
};
console.log(typeof (d));
console.log(d.couleur);
console.log(d.marque);

/********************************************************/
/*Fonction en JS sans parametre */
var manger=function(){
    console.log("je mange donc j'essuie");
}
console.log( typeof(manger));
manger();

/*Fonction en JS avec parametre */
var ecrire= function(texte){
    if(typeof (texte) === "undefined")
        console.log("texte vide");
    else
        console.log(texte);
};

ecrire("Sofía!!!");
//ecrire();
console.debug(window.b);

window.e= {
    p:12
};
console.log(window.e);







/***/ })
/******/ ]);
//# sourceMappingURL=debut.js.map
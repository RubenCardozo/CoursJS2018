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
/***/ (function(module, exports) {

var o1= {p:10};
var o2= {p:10};
console.log(o1==o2);
console.log(o1.p==o2.p);

/**********************************************\
|*******************TEST***********************|
\**********************************************/

var i = 15;
ajoute(i);
console.log(i);//15

i= ajouteBien(i);
console.log(i);//16

ajouteO(o1);
console.log(o1.p);//11

var ti=[3,5,9,10];
ajouteATab(ti,2);//[5,7,11.12]
console.log(ti);

ajouteSommeATab(ti);
console.log(ti);//[5,7,11,12,35]

ajouteOSommeAtab(ti);
console.log(ti);//[5,7,11,12,35, {somme:70}]

ajoutePropSommeAtab(ti);
console.log(ti);//[0:5,1:7,2:11,3:12,4:35,5:{somme:70},{somme:70}]

/**********************************************\
|***************FONCTIONS ********************|
\**********************************************/

//var ajoute = function (v){...}
function ajoute(v) {
    v + 1;
}

function ajouteBien(v) {
    return v + 1;
}

function ajouteO(param) {
    param.p++;
}

function ajouteATab(monTableau, valeurAjoute){
    for (var index in monTableau) {
    monTableau[index]+=valeurAjoute;
    }
}

function ajouteSommeATab(monTableau){
    monTableau.push(Somme(monTableau));
}

function ajouteOSommeAtab(monTableau){
    monTableau.push({somme:Somme(monTableau)});
}

function ajoutePropSommeAtab(monTableau){
    monTableau.somme =Somme(monTableau);
}

function Somme(tableau) {
/****Manière Clasic********/
    // var somme = 0;
    // for (var index in tableau) {
    //     if (typeof tableau[index]==="number") {
    //          somme += tableau[index];
    //     }
    //     else{
    //         break;
    //     }
    // }
    // return somme;

/******Avec forEach********/
    // var somme =0;
    // var ajout = function (element) {
    //     if (typeof element === "number") {
    //         somme+= element;
    //     }
    // }
    // tableau.forEach(ajout);
    // return somme;

/****Avec fonction anonyme*****/
    // var somme = 0;
    // tableau.forEach(
    //     function (element) {
    //         if (typeof element === "number") {
    //             somme+= element;
    //         }
    //     });
    // return somme;

/******Avec la fonction every********/
    var somme = 0;
    tableau.every(
        function (element, index, array) {
            if (typeof element === "number") {
                somme+= element;
                return true;
            }else{
                return false;
            }
        });
    return somme;
}




/***/ })
/******/ ]);
//# sourceMappingURL=passage.js.map
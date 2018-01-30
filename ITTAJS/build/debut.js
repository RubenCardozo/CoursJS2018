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
//console.log(monVariable);

var monEpouse = "Andrea!!!";
//console.log(monEpouse);

var a;
//console.log(a);

var b;
b=12;
//console.log(b);


//console.log(typeof(b));
//console.log(typeof(a));

var c=true;
//console.log(typeof(c));
var c=1;
//console.log(typeof(c));
//console.info(typeof(c));
/********************************************************/
/*OBJET en JS*/
var d= {
    couleur: "blue",
    marque: "Caran d'ache"
};
//console.log(typeof (d));
//console.log(d.couleur);
//console.log(d.marque);

/********************************************************/
/*Fonction en JS sans parametre */
var manger=function(){
    console.log("je mange donc j'essuie");
}
//console.log( typeof(manger));
//manger();

/*Fonction en JS avec parametre */
var ecrire= function(texte){
    if(typeof (texte) === "undefined")
        console.log("texte vide");
    else
        console.log(texte);
};

//ecrire("Sofía!!!");
//ecrire();
//console.debug(window.b);

window.e= {
    p:12
};
//console.log(e);
e.k="mama";
e.f=function(){
    console.log(this.k);
}
//e.f();

var i=21;
var fun = function(){
    var i = window.i - 1;
    var j = window.i - 1;
    console.log(i);
};
//fun();
//console.log(i);

var m, n= 45;
//console.log(m, n);
var t=[];
//console.log(typeof(t));
var t1 = [
    12,
    "treize",
    {g:14},
    [15]
];
//Delete les elements du tableau
//console.log(t1);
//console.log(t1[1]);
//console.log(t1[t1.length - 1]);
t1[6]="six";
//console.log(t1.length);
delete t1[3];
//console.log(t1.length);
//console.log(t1[3]);
delete t1[t1.length - 1];
//console.log(t1.length);
//console.log(t1);
t1.splice(4,1);
//console.log(t1.length);
t1.splice(4,2);
//console.log(t1.length);
//console.log(t1[2]);

t1.splice(4,0,"quatre","cinq");
//console.log(t1);
t1.push("sept","huit")
t1.pop();
t1.unshift(10,11);
t1.shift();
var index=t1.indexOf("treize");//2
var index=t1.indexOf("mille",2);//-1
var index=t1.indexOf("treize",3);//-1!!!!!
var index=t1.indexOf("treize",2);//2
//console.log(index);

//cherche par la fin
var index=t1.lastIndexOf("treize");//2
//console.log(index);

//Tableau rangée avec la fonction sort
var t2=["D","A","C","c","b","Z"];
t2.sort();
//console.log(t2.sort());

var triAlpha= function (c1 ,c2) {
    return c1.localeCompare(c2,"fr");
};
t2.sort(triAlpha);
console.log(t2.sort(triAlpha));

var t3= t1.concat(t2);
//console.log(t3);
var n=0;
var m = 10; //10
m= m+1; //11
m++; //12
m+= 1;//13
m--;//12
m-=1;//11
m*=2;//22
m /= 3;//7,3
m/=n;//Infinity
m-= Infinity; //NaN (not a number)
m+=Infinity; //NaN
m=15
console.log(m %2);




/***/ })
/******/ ]);
//# sourceMappingURL=debut.js.map
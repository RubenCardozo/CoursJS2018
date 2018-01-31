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

/**********************************************\
|***************Variables en js****************|
\**********************************************/
function variables() {
    var monVariable;
    monVariable = "Hello world";
    //console.log(monVariable);
    var monEpouse = "Andrea!!!";
    //console.log(monEpouse);
    var a;
    //console.log(a);
    var b;
    b = 12;
    //console.log(b);
    //console.log(typeof(b));
    //console.log(typeof(a));
    var c = true;
    //console.log(typeof(c));
    var c = 1;
    //console.log(typeof(c));
    //console.info(typeof(c));
    /********************************************************/
    /*OBJET en JS*/
    var d = {
        couleur: "blue",
        marque: "Caran d'ache"
    };
    //console.log(typeof (d));
    //console.log(d.couleur);
    //console.log(d.marque);
    /********************************************************/
    /*Fonction en JS sans parametre */
    var manger = function () {
        console.log("je mange donc j'essuie");
    };
    //console.log( typeof(manger));
    //manger();
    /*Fonction en JS avec parametre */
    var ecrire = function (texte) {
        if (typeof (texte) === "undefined")
            console.log("texte vide");
        else
            console.log(texte);
    };
    //ecrire("Sofía!!!");
    //ecrire();
    //console.debug(window.b);
    window.e = {
        p: 12
    };
    //console.log(e);
    e.k = "mama";
    e.f = function () {
        console.log(this.k);
    };
    //e.f();
    var i = 21;
    var fun = function () {
        var i = window.i - 1;
        var j = window.i - 1;
        console.log(i);
    };
    //fun();
    //console.log(i);
    var m, n = 45;
    //console.log(m, n);
    var t = [];
    //console.log(typeof(t));
    var t1 = [
        12,
        "treize",
        { g: 14 },
        [15]
    ];
    //Delete les elements du tableau
    //console.log(t1);
    //console.log(t1[1]);
    //console.log(t1[t1.length - 1]);
    t1[6] = "six";
    //console.log(t1.length);
    delete t1[3];
    //console.log(t1.length);
    //console.log(t1[3]);
    delete t1[t1.length - 1];
    //console.log(t1.length);
    //console.log(t1);
    t1.splice(4, 1);
    //console.log(t1.length);
    t1.splice(4, 2);
    //console.log(t1.length);
    //console.log(t1[2]);
    t1.splice(4, 0, "quatre", "cinq");
    //console.log(t1);
    t1.push("sept", "huit");
    t1.pop();
    t1.unshift(10, 11);
    t1.shift();
    var index = t1.indexOf("treize"); //2
    var index = t1.indexOf("mille", 2); //-1
    var index = t1.indexOf("treize", 3); //-1!!!!!
    var index = t1.indexOf("treize", 2); //2
    //console.log(index);
    //cherche par la fin
    var index = t1.lastIndexOf("treize"); //2
    //console.log(index);
    //Tableau rangée avec la fonction sort
    var t2 = ["D", "A", "C", "c", "b", "Z"];
    t2.sort();
    //console.log(t2.sort());
    var triAlpha = function (c1, c2) {
        return c1.localeCompare(c2, "fr");
    };
    t2.sort(triAlpha);
    //console.log(t2.sort(triAlpha));
    var t3 = t1.concat(t2);
    //console.log(t3);
    var n = 0;
    var m = 10; //10
    m = m + 1; //11
    m++; //12
    m += 1; //13
    m--; //12
    m -= 1; //11
    m *= 2; //22
    m /= 3; //7,333333333
    m /= n; //Infinity
    m -= Infinity; //NaN (not a number)
    m += Infinity; //NaN
    m = 15;


    console.log(m % 2);//(m modulo 2)=1
}
/**********************************************\
|*Concatenation et remplaçament de caractères**|
\**********************************************/

function Chaines() {
    var c = Chaines();
    var concat = ('albert' + ' ' + 'Einstein').toUpperCase();
    //var concat= concat.toUpperCase();
    concat = concat.concat(' est UN genie').toLowerCase();
    concat = concat.replace('einstein', 'Algoud').toLowerCase();
    concat = concat.replace(/a/g, 'U');
    concat = concat.replace(/[iu]/g, 'O');
    // concat="AbraCadabra";
    // console.log(concat.replace(/A/g , 'O'));//ObraCadabra
    // console.log(concat.replace(/a/, 'O'));//AbrOCadabra
    // console.log(concat.replace(/a/gi , 'O'));//ObrOCOdObrO
    // console.log(concat.replace(/a[cb]/gi , 'O'));//OrOadOra
    // console.log(concat.replace(/a(c|b)/gi , 'O'));//OrOadOra
    // console.log(concat.replace(/a[b-e]/gi , 'O'));//OrOOOra
    // console.log(concat.replace(/a[^cb]/gi , 'O'));//AbraCOabra
    // console.log(concat.replace(/ab*/gi , 'O'));//OrOCOdOrO
    // console.log(concat.replace(/ab?/gi , 'O'));//OrOCOdOrO
    // console.log(concat.replace(/a./gi , 'O'));//OrOOOra
    // console.log(concat.replace(/ab+/gi , 'O'));//OraCadOra
    // console.log('a  b   c\td'.replace(/\s/g , '-'));//a--b---c-d
    // console.log('a  b   c\td'.replace(/\s+/g , '-'));//a-b-c-d
    // console.log('a  b   c\td'.replace(/\s{1,3}/g , '-'));//a-b-c-d// 1à 3 espace
    // console.log('a  b   c\td'.replace(/\s{2,}/g , '-'));//a-b-c	d//2 à N espace
    // console.log('123.456'.replace(/\d/g , '0'));//000.000 = [0-9]
    // console.log('123.456'.replace(/\D/g , ','));//[^0-9]->123,456
    // console.log('123.456'.replace(/(\d+)\.(\d+)/g , 'rien'));//rien
    // console.log('123456'.replace(/(\d+).(\d+)/g , '$1 et $2'));//1234 et 6 Pour comprendre le goupe capturant
    // console.log('123.456'.replace(/(\d+)\.(\d+)/g , '$1,$2'));//123,456
    // console.log('a valhalla man is a happy man'.replace(/\ba\b/g , 'A'));
    concat = "AbraCadaBra";
    console.log(concat.search('cada')); //-1
    console.log(concat.search(/cada/)); //-1
    console.log(concat.search(/cada/i)); //4
    console.log(concat.indexOf('cada')); //-1
    console.log(concat.indexOf('Cada')); //4
    console.log(concat.endsWith('Bra')); //True
    console.log(concat.startsWith('Abra')); //True
    console.log(concat.substring(5)); //adaBra
    console.log(concat.substring(5, 8)); //ada a partir de 5 à 8 pas compris
    console.log(concat.substring(5, 2)); //raC
    console.log('  du texte  '.trim().length); //8 caractère
    console.log('  du texte  '.trimLeft().length); //10 caractère
    console.log('  du texte  '.trimRight().length); //10 caractère
    console.log('4567'.match(/\d/)); //0:"4" index:0 input:"4567"length:1
    console.log('4567'.match(/\d/g)); //(4) ["4", "5", "6", "7"]length:4
    console.log('4567'.match(/mama/g)); //null
    console.log('1,5,,6,100'.split(",")); //["1", "5","", "6", "100"]
    console.log('1,5,,6,100'.split(/\D+/)); //["1", "5", "6", "100"]
    for (var c = 0; c < 300; c++) {
        console.log(c, String.fromCodePoint(c));
    }
    return c;
}
/**********************************************\
|***************Bucle test ********************|
\**********************************************/
function bucleFor() {
	var ti = [4, 5, 6, 7];
	var somme = 0;
	var a;
	for (var index = 0; index < ti.length; index++) {
		somme += ti[index];
		a = ti[index];
		console.log(a);
	}
	;
	console.log("Resultat de la somme= " + somme);
	console.log("Index: " + index);
	var z = 10;
	console.log(z++); //10
	console.log(z); //11
	console.log(--z);
}

function conditionAND() {
	for (var i = 5; i > 0; i--) {
		console.log(i);
	}
	return i;
}

function conditionOR() {
	//Bucle infinit
	for (var index = 5; index > 0 || index < 3; index--) {
		console.log(index);
		if (index>10 || index<-10) {
			break;
		}
	}	
}



function doubleBucleDebugger(){

	for (var i = 1 , arret = false; i <= 5 && !arret; i++) {
		
		for (var j = 1; j <= 5; j++) {
			console.log(i + '*' + j + '= s' + (i * j));
			if (i*j>10) {
				arret = !arret;
				break;
			}
		}
	}
}


function doubleBucle() {
	externe: for (var i = 1; i <= 5; i++) {
		interne: for (var j = 1; j <= 5; j++) {
			console.log(i + '*' + j + '= s' + (i * j));
			if (i * j > 10) {
				break externe;
			}
		}
	}
	return { i, j };
}

console.log("***************************");
var ti = [];
ti[2]=5; ti[4]=7;
ti.p='papa';
var index =0;
for (index in ti){
	console.log(ti[index]);
}

console.log("***************************");
for (index =0; index < ti.length; index++) {
	console.log(ti[index]);
	
}


/***/ })
/******/ ]);
//# sourceMappingURL=debut.js.map
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

formulaire.nom.value="saisir un nom";

formulaire.age.oninput= function(){
    if(!this.validity.isvalid){
        this.setCustomValidity("Age est incorrect");
    }
    else{
        this.setCustomValidity("");
    }
};

formulaire.adresse.oninput = function () {
        if (this.validity.typeMismatch) {
           this.setCustomValidity("adresse email incorrecte");
        }
        else {
            this.setCustomValidity("");
        }
};

formulaire.onsubmit = function () {
if (this.nom.value == "saisir un nom") {
    alert(this.nom.value + " est invalide");
    return false;
}
return true;
};

document.getElementById("envoi").onclick=function(){
    var valid=true;
   /* pas sur IE
    formulaire.querySelectorAll("input").forEach(
        function(element ){
            if(!element.checkValidity()){ 
                valid=false;
            }
        }
    );*/
var inputs=formulaire.querySelectorAll("input");
Array.prototype.forEach.call(inputs, function (element) {
        if (!element.checkValidity()) {
            valid = false;
            return;
        }
    });
    /*pas sur IE
    if(valid && formulaire.onsubmit()){
           formulaire.submit(); 
    }  */
    if(valid)
    formulaire.envoi.click();
};  

console.log( formulaire.nom.value);
console.log(document.forms["formulaire"]["nom"].value);
console.log(document.forms[0]["nom"].value);
console.log(document.querySelector(
"form[name='formulaire'] input[name='nom']").value); 


/***/ })
/******/ ]);
//# sourceMappingURL=formJS.js.map
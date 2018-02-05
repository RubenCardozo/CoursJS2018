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

var c1=document.getElementById('c1');
var context=c1.getContext("2d");
context.strokeStyle = "gray";
context.fillStyle = "red";
context.lineWidth =5;

context.strokeRect(100, 100, 150, 125);
context.fillRect(100, 100, 150, 125);
context.strokeStyle='black';

context.lineTo(150,200);
context.moveTo(150,200);
context.lineTo(200,200);
context.stroke();
context.beginPath();
context.moveTo(110,110);
context.lineTo(150,135);
context.lineTo(125,135);
context.lineTo(150,135);
context.closePath();
context.stroke();
context.bezierCurveTo(290,-40, 200, 200, 300, 150);
context.quadraticCurveTo(20, 100, 200, 20);
context.stroke();

var grad= context.createLinearGradient(0,300,300,0);
grad.addColorStop(0,"green");
grad.addColorStop(1,"white");
context.save();
context.fillStyle=grad;
context.fillRect(150,150,150,150);

context.font="30px Verdana";
context.rotate(Math.PI /4);
context.fillText("Hello canvas",50,50);
context.restore();
context.rect(70, 20, 200, 120);
context.clip();
context.fillText("Hello canvas",50,100);

var img =  new Image();
img.src="./images/titi.jpg";
// img.onload=function(){
//     context.drawImage(img,150,20,50,50);
//     var pattern = context.createPattern(img, "repeat");
//     context.fillStyle=pattern;
//     context.rect(0, 0, c1.width, c1.height);
//     context.fill();
// };

context.beginPath();
context.arc(100, 75, 50, 0, 2 * Math.PI);
context.stroke();









/***/ })
/******/ ]);
//# sourceMappingURL=canvas.js.map
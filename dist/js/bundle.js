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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return users; });
const users = {
    1: {
        id: 1,
        userName: 'user',
    },
    2: {
        id: 2,
        userName: 'server',
    },
};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendMessage; });
const appendMessage = (sms) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = sms;
    output.appendChild(newDiv);
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDate__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createObj__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appendMessage__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addUserIfNotExists__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localStorageOperations__ = __webpack_require__(7);








const output = document.getElementById('output');
const textarea = document.getElementById('message');
const submit = document.getElementById('form');

Object(__WEBPACK_IMPORTED_MODULE_6__localStorageOperations__["b" /* getLocalStorage */])();
Object(__WEBPACK_IMPORTED_MODULE_6__localStorageOperations__["a" /* appendFromLocalStorage */])();


submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const object = Object(__WEBPACK_IMPORTED_MODULE_3__createObj__["a" /* createObj */])('1', textarea.value);
  Object(__WEBPACK_IMPORTED_MODULE_5__addUserIfNotExists__["a" /* addUserIfNotExists */])(object.id, 'user2');
  Object(__WEBPACK_IMPORTED_MODULE_6__localStorageOperations__["c" /* setMessageToLocalStorage */])(object);
  Object(__WEBPACK_IMPORTED_MODULE_1__getDate__["a" /* getDate */])(object.date);
  Object(__WEBPACK_IMPORTED_MODULE_4__appendMessage__["a" /* appendMessage */])(object.message);
  textarea.value = '';
  setTimeout(() => {
    const objectServer = Object(__WEBPACK_IMPORTED_MODULE_3__createObj__["a" /* createObj */])('2', 'эмуляция ответа');
    Object(__WEBPACK_IMPORTED_MODULE_6__localStorageOperations__["c" /* setMessageToLocalStorage */])(objectServer);
    Object(__WEBPACK_IMPORTED_MODULE_1__getDate__["a" /* getDate */])(objectServer.date);
    Object(__WEBPACK_IMPORTED_MODULE_4__appendMessage__["a" /* appendMessage */])(objectServer.message);
  }, 1000);
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDate; });
const getDate = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createObj; });
const createObj = (id, message) => ({
    id,
    message,
    date: new Date(),
});



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUserIfNotExists; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users__ = __webpack_require__(0);



const addUserIfNotExists = (id, name) => {
    if (!Object.prototype.hasOwnProperty.call(__WEBPACK_IMPORTED_MODULE_0__users__["a" /* users */], id)) {
        const usersArray = Object.keys(__WEBPACK_IMPORTED_MODULE_0__users__["a" /* users */]);
        const nextUserId = Math.max(...usersArray) + 1;
        __WEBPACK_IMPORTED_MODULE_0__users__["a" /* users */][nextUserId] = {
            id: nextUserId,
            userName: name,
        };
    }
};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export usersMessages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLocalStorage; });
/* unused harmony export addObjectToUserMessages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setMessageToLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendFromLocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__appendMessage__ = __webpack_require__(1);

let usersMessages;


const getLocalStorage = () => {
    if (localStorage.getItem('usersMessages')) {
        usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
    } else {
        usersMessages = [];
    }
};

const addObjectToUserMessages = (object) => {
    usersMessages.push(object);
};


const setMessageToLocalStorage = (object) => {
    addObjectToUserMessages(object);
    const str = JSON.stringify(usersMessages);
    localStorage.setItem('usersMessages', str);
};


const appendFromLocalStorage = () => {
    if (usersMessages != null) {
        Array.prototype.forEach.call(usersMessages, (item) => {
            Object(__WEBPACK_IMPORTED_MODULE_0__appendMessage__["a" /* appendMessage */])(item.message);
        });
    }
}



/***/ })
/******/ ]);
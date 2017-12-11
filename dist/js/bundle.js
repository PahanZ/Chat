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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = void 0;
var users = {
  1: {
    id: 1,
    userName: 'user'
  },
  2: {
    id: 2,
    userName: 'server'
  }
};
exports.users = users;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendMessage = void 0;

var appendMessage = function appendMessage(sms) {
  var newDiv = document.createElement('div');
  newDiv.textContent = sms;
  output.appendChild(newDiv);
};

exports.appendMessage = appendMessage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _getDate = __webpack_require__(4);

var _users = __webpack_require__(0);

var _createObj = __webpack_require__(5);

var _appendMessage = __webpack_require__(1);

var _addUserIfNotExists = __webpack_require__(6);

var _localStorageOperations = __webpack_require__(7);

var output = document.getElementById('output');
var textarea = document.getElementById('message');
var submit = document.getElementById('form');
(0, _localStorageOperations.getLocalStorage)();
(0, _localStorageOperations.appendFromLocalStorage)();
submit.addEventListener('submit', function (event) {
  event.preventDefault();
  var object = (0, _createObj.createObj)('1', textarea.value);
  (0, _addUserIfNotExists.addUserIfNotExists)(object.id, 'user2');
  (0, _localStorageOperations.setMessageToLocalStorage)(object);
  (0, _getDate.getDate)(object.date);
  (0, _appendMessage.appendMessage)(object.message);
  textarea.value = '';
  setTimeout(function () {
    var objectServer = (0, _createObj.createObj)('2', 'эмуляция ответа');
    (0, _localStorageOperations.setMessageToLocalStorage)(objectServer);
    (0, _getDate.getDate)(objectServer.date);
    (0, _appendMessage.appendMessage)(objectServer.message);
  }, 1000);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = void 0;

var getDate = function getDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0".concat(hours);
  }

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  if (seconds < 10) {
    seconds = "0".concat(seconds);
  }

  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
};

exports.getDate = getDate;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObj = void 0;

var createObj = function createObj(id, message) {
  return {
    id: id,
    message: message,
    date: new Date()
  };
};

exports.createObj = createObj;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUserIfNotExists = void 0;

var _users = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addUserIfNotExists = function addUserIfNotExists(id, name) {
  if (!Object.prototype.hasOwnProperty.call(_users.users, id)) {
    var usersArray = Object.keys(_users.users);
    var nextUserId = Math.max.apply(Math, _toConsumableArray(usersArray)) + 1;
    _users.users[nextUserId] = {
      id: nextUserId,
      userName: name
    };
  }
};

exports.addUserIfNotExists = addUserIfNotExists;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendFromLocalStorage = exports.setMessageToLocalStorage = exports.addObjectToUserMessages = exports.getLocalStorage = exports.usersMessages = void 0;

var _appendMessage = __webpack_require__(1);

var usersMessages;
exports.usersMessages = usersMessages;

var getLocalStorage = function getLocalStorage() {
  if (localStorage.getItem('usersMessages')) {
    exports.usersMessages = usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
  } else {
    exports.usersMessages = usersMessages = [];
  }
};

exports.getLocalStorage = getLocalStorage;

var addObjectToUserMessages = function addObjectToUserMessages(object) {
  usersMessages.push(object);
};

exports.addObjectToUserMessages = addObjectToUserMessages;

var setMessageToLocalStorage = function setMessageToLocalStorage(object) {
  addObjectToUserMessages(object);
  var str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};

exports.setMessageToLocalStorage = setMessageToLocalStorage;

var appendFromLocalStorage = function appendFromLocalStorage() {
  if (usersMessages != null) {
    Array.prototype.forEach.call(usersMessages, function (item) {
      (0, _appendMessage.appendMessage)(item.message);
    });
  }
};

exports.appendFromLocalStorage = appendFromLocalStorage;

/***/ })
/******/ ]);
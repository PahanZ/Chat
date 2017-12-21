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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(date) {\n  var hours = date.getHours();\n  var minutes = date.getMinutes();\n  var seconds = date.getSeconds();\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (seconds < 10) {\n    seconds = \"0\".concat(seconds);\n  }\n\n  return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/getDate.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/getDate.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar output = document.getElementById('output');\n\nvar _default = function _default(sms, date) {\n  var wrap = document.createElement('div');\n  wrap.className = 'newMessage';\n  var messageDiv = document.createElement('div');\n  messageDiv.className = 'messageDiv';\n  messageDiv.textContent = sms;\n  var dateDiv = document.createElement('div');\n  dateDiv.textContent = date;\n  wrap.appendChild(messageDiv);\n  wrap.appendChild(dateDiv);\n  output.appendChild(wrap);\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/appendMessage.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/appendMessage.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.appendFromLocalStorage = exports.setMessageToLocalStorage = exports.getLocalStorage = exports.usersMessages = void 0;\n\nvar _appendMessage = _interopRequireDefault(__webpack_require__(1));\n\nvar _addObjectToUserMessages = _interopRequireDefault(__webpack_require__(8));\n\nvar _getDate = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar usersMessages;\nexports.usersMessages = usersMessages;\n\nvar getLocalStorage = function getLocalStorage() {\n  if (localStorage.getItem('usersMessages')) {\n    exports.usersMessages = usersMessages = JSON.parse(localStorage.getItem('usersMessages'), function (key, value) {\n      if (key === 'date') return new Date(value);\n      return value;\n    });\n  } else {\n    exports.usersMessages = usersMessages = [];\n  }\n};\n\nexports.getLocalStorage = getLocalStorage;\n\nvar appendFromLocalStorage = function appendFromLocalStorage() {\n  if (usersMessages != null) {\n    Array.prototype.forEach.call(usersMessages, function (item) {\n      (0, _appendMessage.default)(item.observers[0].message, (0, _getDate.default)(item.observers[0].date));\n    });\n  }\n};\n\nexports.appendFromLocalStorage = appendFromLocalStorage;\n\nvar setMessageToLocalStorage = function setMessageToLocalStorage(object) {\n  (0, _addObjectToUserMessages.default)(object);\n  var str = JSON.stringify(usersMessages);\n  localStorage.setItem('usersMessages', str);\n};\n\nexports.setMessageToLocalStorage = setMessageToLocalStorage;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/API/messages.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/API/messages.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n__webpack_require__(5);\n\nvar _getDate = _interopRequireDefault(__webpack_require__(0));\n\nvar _createObj = _interopRequireDefault(__webpack_require__(4));\n\nvar _appendMessage = _interopRequireDefault(__webpack_require__(1));\n\nvar _addUserIfNotExists = _interopRequireDefault(__webpack_require__(6));\n\nvar _messages = __webpack_require__(2);\n\nvar _messages2 = __webpack_require__(9);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar submit = document.getElementById('form');\nvar textarea = document.getElementById('message');\n(0, _messages.getLocalStorage)();\n(0, _messages.appendFromLocalStorage)();\nsubmit.addEventListener('submit', function (event) {\n  event.preventDefault();\n  (0, _messages2.userMessage)(); // const object = createObj('1', textarea.value);\n  // addUserIfNotExists(object.id, 'user2');\n  // setMessageToLocalStorage(object);\n  // getDate(object.date);\n  // appendMessage(object.message);\n\n  textarea.value = ''; // serverMessage();\n});\nvar _default = textarea;\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/index.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(id, message) {\n  return {\n    id: id,\n    message: message,\n    date: new Date()\n  };\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/createObj.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/createObj.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/style.scss\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _users = __webpack_require__(7);\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar _default = function _default(id, name) {\n  if (!Object.prototype.hasOwnProperty.call(_users.users, id)) {\n    var usersArray = Object.keys(_users.users);\n    var nextUserId = Math.max.apply(Math, _toConsumableArray(usersArray)) + 1;\n    _users.users[nextUserId] = {\n      id: nextUserId,\n      userName: name\n    };\n  }\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/addUserIfNotExists.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/addUserIfNotExists.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.users = void 0;\nvar users = {\n  1: {\n    id: 1,\n    userName: 'user'\n  },\n  2: {\n    id: 2,\n    userName: 'server'\n  }\n};\nexports.users = users;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/users.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/users.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _messages = __webpack_require__(2);\n\nvar _default = function _default(object) {\n  _messages.usersMessages.push(object);\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/addObjectToUserMessages.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/addObjectToUserMessages.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.serverMessage = exports.userMessage = void 0;\n\nvar _getDate = _interopRequireDefault(__webpack_require__(0));\n\nvar _createObj = _interopRequireDefault(__webpack_require__(4));\n\nvar _messages = __webpack_require__(2);\n\nvar _appendMessage = _interopRequireDefault(__webpack_require__(1));\n\nvar _store = _interopRequireDefault(__webpack_require__(10));\n\nvar _index = _interopRequireDefault(__webpack_require__(3));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar userMessage = function userMessage() {\n  var newObserver = new _store.default();\n  newObserver.set((0, _createObj.default)('1', _index.default.value));\n  newObserver.subscribe(_appendMessage.default);\n  (0, _messages.setMessageToLocalStorage)(newObserver);\n};\n\nexports.userMessage = userMessage;\n\nvar serverMessage = function serverMessage() {\n  setTimeout(function () {\n    var objectServer = (0, _createObj.default)('2', 'эмуляция ответа');\n    (0, _messages.setMessageToLocalStorage)(objectServer);\n    (0, _getDate.default)(objectServer.date);\n    (0, _appendMessage.default)(objectServer.message);\n  }, 1000);\n};\n\nexports.serverMessage = serverMessage;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/actions/messages.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/actions/messages.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getDate = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _classCallCheck(this, Observer);\n\n    this.observers = [];\n  }\n\n  _createClass(Observer, [{\n    key: \"set\",\n    value: function set(fn) {\n      this.observers.push(fn);\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      return this.observers;\n    }\n  }, {\n    key: \"subscribe\",\n    value: function subscribe(subscriber) {\n      this.observers.forEach(function (item) {\n        subscriber(item.message, (0, _getDate.default)(item.date));\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\nexports.default = Observer;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/store.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/store.js?");

/***/ })
/******/ ]);
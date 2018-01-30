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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _observer = _interopRequireDefault(__webpack_require__(4));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Store =\n/*#__PURE__*/\nfunction (_Observer) {\n  _inherits(Store, _Observer);\n\n  function Store() {\n    var _this;\n\n    _classCallCheck(this, Store);\n\n    _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));\n    _this.state = [];\n    return _this;\n  }\n\n  _createClass(Store, [{\n    key: \"get\",\n    value: function get() {\n      return this.state;\n    }\n  }, {\n    key: \"set\",\n    value: function set(value) {\n      this.state.push(value);\n      this.emit(this);\n    }\n  }]);\n\n  return Store;\n}(_observer.default);\n\nvar instanceStore = new Store();\nvar _default = instanceStore;\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/store.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/store.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(2);\n\nvar _Chat = _interopRequireDefault(__webpack_require__(3));\n\nvar _store = _interopRequireDefault(__webpack_require__(0));\n\nvar _sentMessage = _interopRequireDefault(__webpack_require__(5));\n\nvar _correctDate = _interopRequireDefault(__webpack_require__(7));\n\nvar _Messages = _interopRequireDefault(__webpack_require__(8));\n\nvar _Message = _interopRequireDefault(__webpack_require__(9));\n\nvar _MessageForm = _interopRequireDefault(__webpack_require__(10));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar body = document.getElementsByTagName('body')[0];\n\nvar store = _store.default.get();\n\n_store.default.subscribe(function () {\n  body.prepend((0, _Chat.default)(_sentMessage.default, store, _correctDate.default, (0, _Messages.default)(_Message.default, store, _correctDate.default), (0, _MessageForm.default)({\n    onSubmit: function onSubmit() {\n      (0, _sentMessage.default)();\n    }\n  })));\n});\n\n_store.default.emit();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/style.scss\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(action, store, correctDate, messages, messageForm) {\n  var wrap = document.getElementsByClassName('wrapp')[0];\n  wrap.innerHTML = null;\n  wrap.append(messages);\n  wrap.append(messageForm);\n  return wrap;\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/Chat.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/Chat.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _classCallCheck(this, Observer);\n\n    this.subscribers = [];\n  }\n\n  _createClass(Observer, [{\n    key: \"subscribe\",\n    value: function subscribe(callback) {\n      this.subscribers.push(callback);\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(callback) {\n      this.subscribers = this.subscribers.filter(function (item) {\n        return item !== callback;\n      });\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(data) {\n      this.subscribers.forEach(function (item) {\n        item(data);\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\nexports.default = Observer;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/observer.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/observer.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _createObj = _interopRequireDefault(__webpack_require__(6));\n\nvar _store = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  _store.default.set((0, _createObj.default)('1', message.value));\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/actions/sentMessage.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/actions/sentMessage.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(id, message) {\n  return {\n    id: id,\n    message: message,\n    date: new Date()\n  };\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/createObj.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/createObj.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(date) {\n  var hours = date.getHours();\n  var minutes = date.getMinutes();\n  var seconds = date.getSeconds();\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (seconds < 10) {\n    seconds = \"0\".concat(seconds);\n  }\n\n  return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/correctDate.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/correctDate.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(message, store, correctDate) {\n  var tmp = document.getElementById('tmpOutput').content.cloneNode(true);\n  var output = tmp.getElementById('output');\n  store.forEach(function (item) {\n    output.append(message(item, correctDate));\n  });\n  tmp.append(output);\n  return tmp;\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/Messages.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/Messages.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(content, correctDate) {\n  var wrap = document.createElement('div');\n  var messageDiv = document.createElement('div');\n  var dateDiv = document.createElement('div');\n  wrap.className = 'newMessage';\n  messageDiv.className = 'messageDiv';\n  messageDiv.textContent = content.message;\n  dateDiv.textContent = correctDate(content.date);\n  wrap.append(messageDiv);\n  wrap.append(dateDiv);\n  return wrap;\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/Message.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/Message.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(_ref) {\n  var onSubmit = _ref.onSubmit;\n  var tmp = document.getElementById('tmpForm').content.cloneNode(true);\n  var form = tmp.getElementById('form');\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    onSubmit();\n  });\n  return tmp;\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/MessageForm.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/MessageForm.js?");

/***/ })
/******/ ]);
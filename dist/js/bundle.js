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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _wrapper = _interopRequireDefault(__webpack_require__(4));\n\nvar _messageList = _interopRequireDefault(__webpack_require__(5));\n\nvar _messageForm = _interopRequireDefault(__webpack_require__(8));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  var wrap = new _wrapper.default({\n    src: document.body\n  });\n  wrap.render();\n  var messageList = new _messageList.default({\n    src: document.getElementsByClassName('wrapp')[0]\n  });\n  messageList.get();\n  messageList.render();\n  var messageForm = new _messageForm.default({\n    src: document.getElementsByClassName('wrapp')[0]\n  });\n  messageForm.render();\n}; // const submit = document.getElementById('form');\n// const textarea = document.getElementById('message');\n// const output = document.getElementById('output');\n// const chat = (messageList, sentMessage, message) => {\n//   messageList();\n//   submit.addEventListener('submit', (event) => {\n//     event.preventDefault();\n//     sentMessage();\n//     message();\n//     textarea.value = '';\n//   });\n// };\n// export { chat, textarea, output };\n\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/chat.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/chat.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.displayMessage = exports.getMessage = exports.store = void 0;\n\nvar _message = _interopRequireDefault(__webpack_require__(6));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store;\nexports.store = store;\n\nvar getMessage = function getMessage() {\n  if (localStorage.getItem('store')) {\n    exports.store = store = JSON.parse(localStorage.getItem('store'), function (key, value) {\n      if (key === 'date') return new Date(value);\n      return value;\n    });\n  } else {\n    exports.store = store = [];\n  }\n};\n\nexports.getMessage = getMessage;\n\nvar displayMessage = function displayMessage() {\n  if (store != null) {\n    Array.prototype.forEach.call(store, function () {\n      (0, _message.default)();\n    });\n  }\n};\n\nexports.displayMessage = displayMessage;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/API/getMessages.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/API/getMessages.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(3);\n\nvar _chat = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _chat.default)(); // import { chat } from './components/chat';\n// import message from './components/message';\n// import messageList from './components/messageList';\n// import { sentMessage } from './actions/action';\n// chat(messageList, sentMessage, message);\n// // import getDate from './storage/getDate';\n// // import createObj from './storage/createObj';\n// // import appendMessage from './storage/appendMessage';\n// // import addUserIfNotExists from './storage/addUserIfNotExists';\n// import { displayMessage } from './API/messages';\n// import { serverMessage, sentMessage } from './actions/action';\n// import appendMessage from './components/message';\n// console.log(displayMessage());\n// const submit = document.getElementById('form');\n// const textarea = document.getElementById('message');\n// displayMessage();\n// submit.addEventListener('submit', (event) => {\n//   event.preventDefault();\n//   sentMessage();\n//   appendMessage();\n//   // const object = createObj('1', textarea.value);\n//   // addUserIfNotExists(object.id, 'user2');\n//   // sentMessage(object);\n//   // getDate(object.date);\n//   // appendMessage(object.message);\n//   textarea.value = '';\n//   // serverMessage();\n// });\n// export default textarea;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/index.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/style.scss\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Wrap =\n/*#__PURE__*/\nfunction () {\n  function Wrap(options) {\n    _classCallCheck(this, Wrap);\n\n    this.src = options.src;\n  }\n\n  _createClass(Wrap, [{\n    key: \"render\",\n    value: function render() {\n      this.wrap = document.createElement('div');\n      this.wrap.classList = 'wrapp';\n      this.src.append(this.wrap);\n    }\n  }]);\n\n  return Wrap;\n}();\n\nexports.default = Wrap;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/wrapper.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/wrapper.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getMessages = __webpack_require__(1);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MessageList =\n/*#__PURE__*/\nfunction () {\n  function MessageList(options) {\n    _classCallCheck(this, MessageList);\n\n    this.src = options.src;\n  }\n\n  _createClass(MessageList, [{\n    key: \"render\",\n    value: function render() {\n      this.output = document.createElement('div');\n      this.output.id = 'output';\n      this.src.append(this.output);\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      console.log((0, _getMessages.getMessage)());\n    }\n  }]);\n\n  return MessageList;\n}(); // export default () => {\n//   getMessage();\n//   displayMessage();\n// };\n\n\nexports.default = MessageList;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/messageList.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/messageList.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getMessages = __webpack_require__(1);\n\nvar _getDate = _interopRequireDefault(__webpack_require__(7));\n\nvar _chat = __webpack_require__(0);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  _chat.output.innerHTML = null;\n  Array.prototype.forEach.call(_getMessages.store, function (item) {\n    var wrap = document.createElement('div');\n    wrap.className = 'newMessage';\n    var messageDiv = document.createElement('div');\n    messageDiv.className = 'messageDiv';\n    messageDiv.textContent = item.observers[0].message;\n    wrap.appendChild(messageDiv);\n    var dateDiv = document.createElement('div');\n    dateDiv.textContent = (0, _getDate.default)(item.observers[0].date);\n    wrap.appendChild(dateDiv);\n\n    _chat.output.appendChild(wrap);\n  });\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/message.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/message.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(date) {\n  var hours = date.getHours();\n  var minutes = date.getMinutes();\n  var seconds = date.getSeconds();\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (seconds < 10) {\n    seconds = \"0\".concat(seconds);\n  }\n\n  return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/getDate.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/getDate.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MessageForm =\n/*#__PURE__*/\nfunction () {\n  function MessageForm(options) {\n    _classCallCheck(this, MessageForm);\n\n    this.src = options.src;\n  }\n\n  _createClass(MessageForm, [{\n    key: \"render\",\n    value: function render() {\n      this.form = document.createElement('form');\n      this.form.id = 'form';\n      this.label = document.createElement('label');\n      this.label.for = this.form.id;\n      this.label.textContent = 'Введите сообщение';\n      this.textarea = document.createElement('textarea');\n      this.textarea.id = 'message';\n      this.submit = document.createElement('button');\n      this.submit.textContent = 'Отправить';\n      this.form.append(this.label);\n      this.form.append(this.textarea);\n      this.form.append(this.submit);\n      this.src.append(this.form);\n    }\n  }]);\n\n  return MessageForm;\n}();\n\nexports.default = MessageForm;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/messageForm.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/messageForm.js?");

/***/ })
/******/ ]);
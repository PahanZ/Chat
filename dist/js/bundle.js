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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _observer = _interopRequireDefault(__webpack_require__(7));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Store =\n/*#__PURE__*/\nfunction (_Observer) {\n  _inherits(Store, _Observer);\n\n  function Store() {\n    var _this;\n\n    _classCallCheck(this, Store);\n\n    _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));\n    _this.state = null;\n    return _this;\n  }\n\n  _createClass(Store, [{\n    key: \"get\",\n    value: function get() {\n      return this.state;\n    }\n  }, {\n    key: \"set\",\n    value: function set(value) {\n      this.state = value;\n      this.emit(this);\n    }\n  }]);\n\n  return Store;\n}(_observer.default);\n\nvar instanceStore = new Store();\nvar _default = instanceStore;\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/store.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/store.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(2);\n\nvar _chat = _interopRequireDefault(__webpack_require__(3));\n\nvar _store = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import sentMessage from './actions/action';\nvar wrap = document.getElementsByClassName('wrapp')[0];\n\n_store.default.subscribe(function () {\n  (0, _chat.default)();\n});\n\nwrap.innerHTML = null;\nwrap.append((0, _chat.default)()); // console.log(chat(sentMessage()));\n// import { chat } from './components/chat';\n// import message from './components/message';\n// import messageList from './components/messageList';\n// import { sentMessage } from './actions/action';\n// chat(messageList, sentMessage, message);\n// // import getDate from './storage/getDate';\n// // import createObj from './storage/createObj';\n// // import appendMessage from './storage/appendMessage';\n// // import addUserIfNotExists from './storage/addUserIfNotExists';\n// import { displayMessage } from './API/messages';\n// import { serverMessage, sentMessage } from './actions/action';\n// import appendMessage from './components/message';\n// console.log(displayMessage());\n// const submit = document.getElementById('form');\n// const textarea = document.getElementById('message');\n// displayMessage();\n// submit.addEventListener('submit', (event) => {\n//   event.preventDefault();\n//   sentMessage();\n//   appendMessage();\n//   // const object = createObj('1', textarea.value);\n//   // addUserIfNotExists(object.id, 'user2');\n//   // sentMessage(object);\n//   // getDate(object.date);\n//   // appendMessage(object.message);\n//   textarea.value = '';\n//   // serverMessage();\n// });\n// export default textarea;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/style.scss\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _messageForm = _interopRequireDefault(__webpack_require__(4));\n\nvar _messages = _interopRequireDefault(__webpack_require__(5));\n\nvar _action = _interopRequireDefault(__webpack_require__(8));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import messageList from './messageList';\n// import instanceStore from '../storage/store';\n// import createObj from '../storage/createObj';\nvar _default = function _default() {\n  var template = document.getElementById('tmp1').content.cloneNode(true);\n  var output = template.getElementById('output'); // if (instanceStore.get() !== null) {\n  //   output.append(instanceStore.get().message);\n  // }\n\n  var formElement = template.getElementById('form');\n  (0, _messageForm.default)({\n    element: formElement,\n    onSubmit: function onSubmit() {\n      (0, _action.default)(); // instanceStore.set(createObj('1', formElement.getElementsByTagName('textarea')[0].value));\n      // formElement.getElementsByTagName('textarea')[0].value = '';\n\n      (0, _messages.default)(output);\n    }\n  });\n  template.append(output);\n  template.append(formElement);\n  return template; // messageList.render(document.getElementById('tmp1'));\n  // messageForm.render(document.getElementById('tmp1'));\n  // messages.render(document.getElementById('output'));\n  // sent(() => {\n  //   messages.render(document.getElementById('output'));\n  // });\n  // document.getElementById('form').addEventListener('submit', sent);\n  // form.addEventListener('submit', sent); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! не робит !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n  // messageForm.form.addEventListener('submit', (event) => {\n  //   event.preventDefault();\n  //   sent();\n  //   messages.render();\n  //   messageForm.get().value = '';\n  // });\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/chat.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/chat.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar messageForm = function messageForm(_ref) {\n  var element = _ref.element,\n      onSubmit = _ref.onSubmit;\n  element.addEventListener('submit', function (event) {\n    event.preventDefault();\n    onSubmit();\n  });\n};\n\nvar _default = messageForm; // class MessageForm {\n//   constructor(event) {\n//     // this.src = src;\n//     this.onSubmit = event;\n//   }\n//   render(elem) {\n//     const form = elem.content;\n//     this.src.innerHTML = null;\n//     this.src.append(form.cloneNode(true));\n//     // this.form = document.createElement('form');\n//     // this.form.id = 'form';\n//     // this.label = document.createElement('label');\n//     // this.label.for = this.form.id;\n//     // this.label.textContent = 'Введите сообщение';\n//     // this.textarea = document.createElement('textarea');\n//     // this.textarea.id = 'message';\n//     // this.submit = document.createElement('button');\n//     // this.submit.textContent = 'Отправить';\n//     // this.form.append(this.label);\n//     // this.form.append(this.textarea);\n//     // this.form.append(this.submit);\n//     // this.src.append(this.form);\n//   }\n// }\n// export default MessageForm;\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/messageForm.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/messageForm.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _getDate = _interopRequireDefault(__webpack_require__(6));\n\nvar _store = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import { getFromStorage, getStore } from '../API/getMessages';\nvar _default = function _default(output) {\n  var wrap = document.createElement('div');\n  wrap.className = 'newMessage';\n  var messageDiv = document.createElement('div');\n  messageDiv.className = 'messageDiv';\n  messageDiv.textContent = _store.default.get().message;\n  wrap.append(messageDiv);\n  var dateDiv = document.createElement('div');\n  dateDiv.textContent = (0, _getDate.default)(_store.default.get().date);\n  wrap.append(dateDiv);\n  output.append(wrap);\n}; // class Messages {\n//   render(elem) {\n//     this.output = elem;\n//     if (instanceStore.get() != null) {\n//       // this.output.innerHTML = null;\n//       const wrap = document.createElement('div');\n//       wrap.className = 'newMessage';\n//       const messageDiv = document.createElement('div');\n//       messageDiv.className = 'messageDiv';\n//       messageDiv.textContent = instanceStore.get().message;\n//       wrap.append(messageDiv);\n//       const dateDiv = document.createElement('div');\n//       dateDiv.textContent = getDate(instanceStore.get().date);\n//       wrap.append(dateDiv);\n//       this.output.append(wrap.cloneNode(true));\n//       // Array.prototype.forEach.call(instanceStore.get(), (item) => {\n//       // console.log(item);\n//       // const wrap = document.createElement('div');\n//       // wrap.className = 'newMessage';\n//       // const messageDiv = document.createElement('div');\n//       // messageDiv.className = 'messageDiv';\n//       // messageDiv.textContent = item.message;\n//       // wrap.append(messageDiv);\n//       // const dateDiv = document.createElement('div');\n//       // dateDiv.textContent = getDate(item.date);\n//       // wrap.append(dateDiv);\n//       // this.output.append(wrap.cloneNode(true));\n//       // });\n//     }\n//     // this.output = messageList.output;\n//     // this.output.innerHTML = null;\n//     // getFromStorage();\n//     // if (getStore() != null) {\n//     //   Array.prototype.forEach.call(getStore(), (item) => {\n//     //     const wrap = document.createElement('div');\n//     //     wrap.className = 'newMessage';\n//     //     const messageDiv = document.createElement('div');\n//     //     messageDiv.className = 'messageDiv';\n//     //     messageDiv.textContent = item.observers[0].message;\n//     //     wrap.append(messageDiv);\n//     //     const dateDiv = document.createElement('div');\n//     //     dateDiv.textContent = getDate(item.observers[0].date);\n//     //     wrap.append(dateDiv);\n//     //     this.output.append(wrap);\n//     //   });\n//     // }\n//   }\n// }\n// const messages = new Messages();\n// export default messages;\n\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/messages.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/components/messages.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(date) {\n  var hours = date.getHours();\n  var minutes = date.getMinutes();\n  var seconds = date.getSeconds();\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (seconds < 10) {\n    seconds = \"0\".concat(seconds);\n  }\n\n  return \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/getDate.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/getDate.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Observer =\n/*#__PURE__*/\nfunction () {\n  function Observer() {\n    _classCallCheck(this, Observer);\n\n    this.subscribers = [];\n  }\n\n  _createClass(Observer, [{\n    key: \"subscribe\",\n    value: function subscribe(callback) {\n      this.subscribers.push(callback);\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe(callback) {\n      this.subscribers = this.subscribers.filter(function (item) {\n        return item !== callback;\n      });\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(data) {\n      this.subscribers.forEach(function (item) {\n        item(data);\n      });\n    }\n  }]);\n\n  return Observer;\n}();\n\nexports.default = Observer;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/observer.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/observer.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _createObj = _interopRequireDefault(__webpack_require__(9));\n\nvar _store = _interopRequireDefault(__webpack_require__(0));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  _store.default.set((0, _createObj.default)('1', message.value));\n\n  message.value = '';\n}; // export default (method, value) => {\n//   document.getElementById('form').addEventListener('submit', (event) => {\n//     event.preventDefault();\n// const message = document.getElementById('message');\n// const obj = createObj('1', message.value);\n// newObserver.set(obj);\n// const str = JSON.stringify(newObserver.get());\n// localStorage.setItem('store', str);\n// method(value);\n//   message.value = '';\n// });\n// event.preventDefault();\n// addObjectToMessageList(newObserver());\n// const str = JSON.stringify(getStore());\n// localStorage.setItem('store', str);\n// messages.render(document.getElementById('output'));\n// document.getElementById('message').value = '';\n// };\n// import getDate from '../storage/getDate';\n// import appendMessage from '../components/message';\n// import addObjectToMessageList from '../storage/addObjectToMessageList';\n// import { store } from '../API/getMessages';\n// import newObserver from '../storage/observer';\n// import createObj from '../storage/createObj';\n// const sentMessage = () => {\n//   addObjectToMessageList(newObserver());\n//   const str = JSON.stringify(store);\n//   localStorage.setItem('store', str);\n// };\n// const serverMessage = () => {\n//   setTimeout(() => {\n//     const objectServer = createObj('2', 'эмуляция ответа');\n//     sentMessage(objectServer);\n//     getDate(objectServer.date);\n//     appendMessage(objectServer.message);\n//   }, 1000);\n// };\n// export { serverMessage, sentMessage };\n\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/actions/action.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/actions/action.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = function _default(id, message) {\n  return {\n    id: id,\n    message: message,\n    date: new Date()\n  };\n};\n\nexports.default = _default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/storage/createObj.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/storage/createObj.js?");

/***/ })
/******/ ]);
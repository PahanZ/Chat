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
/***/ (function(module, exports) {

const output = document.getElementById('output');
const textarea = document.getElementById('message');
const submit = document.getElementById('form');
let usersMessages;


const getLocalStorage = () => {
  if (localStorage.getItem('usersMessages')) {
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
  } else {
    usersMessages = [];
  }
};
getLocalStorage();


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


const createObj = (id, message) => ({
  id,
  message,
  date: new Date(),
});


const addUserIfNotExists = (id, name) => {
  if (!Object.prototype.hasOwnProperty.call(users, id)) {
    const usersArray = Object.keys(users);
    const nextUserId = Math.max(...usersArray) + 1;
    users[nextUserId] = {
      id: nextUserId,
      userName: name,
    };
  }
};


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


const appendMessage = (sms) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = sms;
  output.appendChild(newDiv);
};


const addObjectToUserMessages = (object) => {
  usersMessages.push(object);
};


const setMessageToLocalStorage = (object) => {
  addObjectToUserMessages(object);
  const str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};


if (usersMessages != null) {
  Array.prototype.forEach.call(usersMessages, (item) => {
    appendMessage(item.message);
  });
}


// const display = () => {
//   Object.keys(users).forEach((element) => {
//     // let length;
//     // if (usersMessages.length === 0) {
//     //   [length] = usersMessages;
//     // } else {
//     //   length = usersMessages.length - 1;
//     // }
//     for (let index = usersMessages.length; index > 0; index -= 1) {
//       // console.log(usersMessages[index]);
//       // if (users[element].id === Number(usersMessages[index])) {
//       //   // getDate(usersMessages[index].date);
//       //   // appendMessage(usersMessages[index].message);
//       //   console.log(`users${users[element].id}`);
//       //   console.log(`usersMessages${usersMessages[index].id}`);
//       //   break;
//       // }
//     }
//   });
// };
// display();
// console.log(usersMessages.length);

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const object = createObj('1', textarea.value);
  addUserIfNotExists(object.id, 'user2');
  // display();
  setMessageToLocalStorage(object);
  getDate(object.date);
  appendMessage(object.message);
  textarea.value = '';
  setTimeout(() => {
    const objectServer = createObj('2', 'эмуляция ответа');
    setMessageToLocalStorage(objectServer);
    getDate(objectServer.date);
    appendMessage(objectServer.message);
    // display();
  }, 1000);
});



/***/ })
/******/ ]);
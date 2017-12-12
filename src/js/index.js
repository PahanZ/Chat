import '../style.scss';
import getDate from "./getDate";
import users from "./users";
import createObj from "./createObj";
import { appendMessage } from "./appendMessage";
import addUserIfNotExists from "./addUserIfNotExists";
import { usersMessages, getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage } from "./API/messages";

const output = document.getElementById('output');
const textarea = document.getElementById('message');
const submit = document.getElementById('form');

getLocalStorage();
appendFromLocalStorage();

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const object = createObj('1', textarea.value);
  addUserIfNotExists(object.id, 'user2');
  setMessageToLocalStorage(object);
  getDate(object.date);  
  appendMessage(object.message);
  textarea.value = '';
  setTimeout(() => {
    const objectServer = createObj('2', 'эмуляция ответа');
    setMessageToLocalStorage(objectServer);
    getDate(objectServer.date);
    appendMessage(objectServer.message);
  }, 1000);
});

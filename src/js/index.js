import '../style.scss';
import getDate from './storage/getDate';
import createObj from './storage/createObj';
import appendMessage from './storage/appendMessage';
import addUserIfNotExists from './storage/addUserIfNotExists';
import { getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage } from './API/messages';

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

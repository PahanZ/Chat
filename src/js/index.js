import '../style.scss';
import getDate from './storage/getDate';
import createObj from './storage/createObj';
import appendMessage from './storage/appendMessage';
import addUserIfNotExists from './storage/addUserIfNotExists';
import { getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage } from './API/messages';
import sentMessage from './actions/messages';
import Observer from "./store";

const textarea = document.getElementById('message');
const submit = document.getElementById('form');

getLocalStorage();
appendFromLocalStorage();

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const newObserver = new Observer();
  newObserver.set(createObj('1', textarea.value));
  newObserver.subscribe();
  // const object = createObj('1', textarea.value);
  // addUserIfNotExists(object.id, 'user2');
  // setMessageToLocalStorage(object);
  // getDate(object.date);
  // appendMessage(object.message);
  textarea.value = '';
  sentMessage();
});

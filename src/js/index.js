import '../style.scss';
import getDate from './storage/getDate';
import createObj from './storage/createObj';
import appendMessage from './storage/appendMessage';
import addUserIfNotExists from './storage/addUserIfNotExists';
import { getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage } from './API/messages';
import { userMessage, serverMessage } from './actions/messages';


const submit = document.getElementById('form');
const textarea = document.getElementById('message');

getLocalStorage();
appendFromLocalStorage();

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  userMessage();

  // const object = createObj('1', textarea.value);
  // addUserIfNotExists(object.id, 'user2');
  // setMessageToLocalStorage(object);
  // getDate(object.date);
  // appendMessage(object.message);
  textarea.value = '';
  // serverMessage();
});

export default textarea;

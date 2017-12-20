import '../style.scss';
import getDate from './storage/getDate';
// import createObj from './storage/createObj';
// import appendMessage from './storage/appendMessage';
// import addUserIfNotExists from './storage/addUserIfNotExists';
import { getMessage, displayMessage } from './API/messages';
import { serverMessage, sentMessage } from './actions/action';
import appendMessage from './components/message';
import newObserver from './components/observer';


const submit = document.getElementById('form');
const textarea = document.getElementById('message');

getMessage();
displayMessage();

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  sentMessage();
  appendMessage(newObserver().observers[0].message, getDate(newObserver().observers[0].date));

  // const object = createObj('1', textarea.value);
  // addUserIfNotExists(object.id, 'user2');
  // sentMessage(object);
  // getDate(object.date);
  // appendMessage(object.message);
  textarea.value = '';
  // serverMessage();
});

export default textarea;

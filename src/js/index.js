import '../style.scss';
// import sentMessage from './actions/action';
import chat from './components/chat';
import instanceStore from './storage/store';

const wrap = document.getElementsByClassName('wrapp')[0];
instanceStore.subscribe(() => {
  chat();
});
wrap.innerHTML = null;
wrap.append(chat());
// console.log(chat(sentMessage()));


// import { chat } from './components/chat';
// import message from './components/message';
// import messageList from './components/messageList';
// import { sentMessage } from './actions/action';

// chat(messageList, sentMessage, message);


// // import getDate from './storage/getDate';
// // import createObj from './storage/createObj';
// // import appendMessage from './storage/appendMessage';
// // import addUserIfNotExists from './storage/addUserIfNotExists';
// import { displayMessage } from './API/messages';
// import { serverMessage, sentMessage } from './actions/action';
// import appendMessage from './components/message';
// console.log(displayMessage());


// const submit = document.getElementById('form');
// const textarea = document.getElementById('message');


// displayMessage();

// submit.addEventListener('submit', (event) => {
//   event.preventDefault();
//   sentMessage();
//   appendMessage();

//   // const object = createObj('1', textarea.value);
//   // addUserIfNotExists(object.id, 'user2');
//   // sentMessage(object);
//   // getDate(object.date);
//   // appendMessage(object.message);
//   textarea.value = '';
//   // serverMessage();
// });

// export default textarea;

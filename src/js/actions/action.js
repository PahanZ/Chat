import createObj from '../storage/createObj';
import instanceStore from '../storage/store';

export default () => {
  instanceStore.set(createObj('1', message.value));
  message.value = '';
};


// export default (method, value) => {
//   document.getElementById('form').addEventListener('submit', (event) => {
//     event.preventDefault();
// const message = document.getElementById('message');
// const obj = createObj('1', message.value);
// newObserver.set(obj);
// const str = JSON.stringify(newObserver.get());
// localStorage.setItem('store', str);
// method(value);
//   message.value = '';
// });
// event.preventDefault();
// addObjectToMessageList(newObserver());
// const str = JSON.stringify(getStore());
// localStorage.setItem('store', str);
// messages.render(document.getElementById('output'));
// document.getElementById('message').value = '';
// };

// import getDate from '../storage/getDate';
// import appendMessage from '../components/message';
// import addObjectToMessageList from '../storage/addObjectToMessageList';
// import { store } from '../API/getMessages';
// import newObserver from '../storage/observer';
// import createObj from '../storage/createObj';

// const sentMessage = () => {
//   addObjectToMessageList(newObserver());
//   const str = JSON.stringify(store);
//   localStorage.setItem('store', str);
// };


// const serverMessage = () => {
//   setTimeout(() => {
//     const objectServer = createObj('2', 'эмуляция ответа');
//     sentMessage(objectServer);
//     getDate(objectServer.date);
//     appendMessage(objectServer.message);
//   }, 1000);
// };

// export { serverMessage, sentMessage };

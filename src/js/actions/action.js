import addObjectToMessageList from '../storage/addObjectToMessageList';
import { store } from '../API/getMessages';
import newObserver from '../storage/observer';

export default () => {
  addObjectToMessageList(newObserver());
  const str = JSON.stringify(store);
  localStorage.setItem('store', str);
};


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

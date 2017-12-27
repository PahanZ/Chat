// import sentMessage from '../actions/action';

// class Message {
//   set() {
//     this.sent = sentMessage;
//     this.sent();
//   }
// }

// export default new Message();

// import { store } from '../API/getMessages';
// import getDate from '../storage/getDate';
// import { output } from './chat';

// export default () => {
//   output.innerHTML = null;
//   Array.prototype.forEach.call(store, (item) => {
//     const wrap = document.createElement('div');
//     wrap.className = 'newMessage';
//     const messageDiv = document.createElement('div');
//     messageDiv.className = 'messageDiv';
//     messageDiv.textContent = item.observers[0].message;
//     wrap.appendChild(messageDiv);
//     const dateDiv = document.createElement('div');
//     dateDiv.textContent = getDate(item.observers[0].date);
//     wrap.appendChild(dateDiv);
//     output.appendChild(wrap);
//   });
// };

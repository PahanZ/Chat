import sentMessage from '../actions/action';

export default class Message {
  set() {    
    sentMessage();
  }
}

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

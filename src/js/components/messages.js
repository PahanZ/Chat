// import { getFromStorage, getStore } from '../API/getMessages';
import getDate from '../storage/getDate';
import instanceStore from '../storage/store';

export default (output) => {
  const wrap = document.createElement('div');
  wrap.className = 'newMessage';
  const messageDiv = document.createElement('div');
  messageDiv.className = 'messageDiv';
  messageDiv.textContent = instanceStore.get().message;
  wrap.append(messageDiv);
  const dateDiv = document.createElement('div');
  dateDiv.textContent = getDate(instanceStore.get().date);
  wrap.append(dateDiv);
  output.append(wrap);
};


// class Messages {
//   render(elem) {
//     this.output = elem;
//     if (instanceStore.get() != null) {
//       // this.output.innerHTML = null;


//       const wrap = document.createElement('div');
//       wrap.className = 'newMessage';
//       const messageDiv = document.createElement('div');
//       messageDiv.className = 'messageDiv';
//       messageDiv.textContent = instanceStore.get().message;
//       wrap.append(messageDiv);
//       const dateDiv = document.createElement('div');
//       dateDiv.textContent = getDate(instanceStore.get().date);
//       wrap.append(dateDiv);
//       this.output.append(wrap.cloneNode(true));


//       // Array.prototype.forEach.call(instanceStore.get(), (item) => {
//       // console.log(item);
//       // const wrap = document.createElement('div');
//       // wrap.className = 'newMessage';
//       // const messageDiv = document.createElement('div');
//       // messageDiv.className = 'messageDiv';
//       // messageDiv.textContent = item.message;
//       // wrap.append(messageDiv);
//       // const dateDiv = document.createElement('div');
//       // dateDiv.textContent = getDate(item.date);
//       // wrap.append(dateDiv);
//       // this.output.append(wrap.cloneNode(true));
//       // });
//     }
//     // this.output = messageList.output;
//     // this.output.innerHTML = null;
//     // getFromStorage();
//     // if (getStore() != null) {
//     //   Array.prototype.forEach.call(getStore(), (item) => {
//     //     const wrap = document.createElement('div');
//     //     wrap.className = 'newMessage';
//     //     const messageDiv = document.createElement('div');
//     //     messageDiv.className = 'messageDiv';
//     //     messageDiv.textContent = item.observers[0].message;
//     //     wrap.append(messageDiv);
//     //     const dateDiv = document.createElement('div');
//     //     dateDiv.textContent = getDate(item.observers[0].date);
//     //     wrap.append(dateDiv);
//     //     this.output.append(wrap);
//     //   });
//     // }
//   }
// }

// const messages = new Messages();
// export default messages;

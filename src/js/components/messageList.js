// import { store, getMessage } from '../API/getMessages';
// import getDate from '../storage/getDate';

export default class MessageList {
  constructor(options) {
    this.src = options.src;
  }
  render() {
    // this.src.innerHTML = null;
    this.output = document.createElement('div');
    this.output.id = 'output';
    // getMessage();
    // if (store != null) {
    //   Array.prototype.forEach.call(store, (item) => {
    //     this.src.innerHTML = null;
    //     const wrap = document.createElement('div');
    //     wrap.className = 'newMessage';
    //     const messageDiv = document.createElement('div');
    //     messageDiv.className = 'messageDiv';
    //     messageDiv.textContent = item.observers[0].message;
    //     wrap.append(messageDiv);
    //     const dateDiv = document.createElement('div');
    //     dateDiv.textContent = getDate(item.observers[0].date);
    //     wrap.append(dateDiv);
    //     this.output.append(wrap);
    //   });
    // }
    this.src.prepend(this.output);
  }
}

// export default () => {
//   getMessage();
//   displayMessage();
// };

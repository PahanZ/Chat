import { getFromStorage, getStore } from '../API/getMessages';
import getDate from '../storage/getDate';
// import messageList from './messageList';

class Messages {
  render(elem) {
    this.output = elem;
    getFromStorage();
    if (getStore() != null) {
      this.output.innerHTML = null;
      Array.prototype.forEach.call(getStore(), (item) => {
        const wrap = document.createElement('div');
        wrap.className = 'newMessage';
        const messageDiv = document.createElement('div');
        messageDiv.className = 'messageDiv';
        messageDiv.textContent = item.observers[0].message;
        wrap.append(messageDiv);
        const dateDiv = document.createElement('div');
        dateDiv.textContent = getDate(item.observers[0].date);
        wrap.append(dateDiv);
        this.output.append(wrap.cloneNode(true));
      });
    }
    // this.output = messageList.output;
    // this.output.innerHTML = null;
    // getFromStorage();
    // if (getStore() != null) {
    //   Array.prototype.forEach.call(getStore(), (item) => {
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
  }
}

export default new Messages();

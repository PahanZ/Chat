import { store, getMessage } from '../API/getMessages';
import getDate from '../storage/getDate';

export default class Messages {
  constructor(options) {
    this.src = options.src;
  }
  render() {
    this.src.innerHTML = null;
    getMessage();
    if (store != null) {
      this.src.innerHTML = null;
      Array.prototype.forEach.call(store, (item) => {
        const wrap = document.createElement('div');
        wrap.className = 'newMessage';
        const messageDiv = document.createElement('div');
        messageDiv.className = 'messageDiv';
        messageDiv.textContent = item.observers[0].message;
        wrap.append(messageDiv);
        const dateDiv = document.createElement('div');
        dateDiv.textContent = getDate(item.observers[0].date);
        wrap.append(dateDiv);
        this.src.append(wrap);
      });
    }
  }
}

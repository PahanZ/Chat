import appendMessage from './storage/appendMessage';
import getDate from './storage/getDate';


export default class Observer {
  constructor() {
    this.observers = [];
  }
  set(obj) {
    this.observers.push(obj);
  }
  get() {
    return this.observers;
  }
  notification() {
    this.observers.forEach((item) => {
      appendMessage(item.message);
      appendMessage(getDate(item.date));
    });
  }
}


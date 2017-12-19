import getDate from './storage/getDate';


export default class Observer {
  constructor() {
    this.observers = [];
  }
  set(fn) {
    this.observers.push(fn);
  }
  get() {
    return this.observers;
  }
  subscribe(subscriber) {
    this.observers.forEach((item) => {
      subscriber(item.message, getDate(item.date));
    });
  }
}


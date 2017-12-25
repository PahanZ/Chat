import getDate from './getDate';

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
      console.log(item);
      // subscriber(item.message, getDate(item.date));
    });
  }
}


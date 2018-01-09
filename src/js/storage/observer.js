export default class Observer {
  constructor() {
    this.subscribers = [];
  }
  subscribe(callback) {
    this.subscribers.push(callback);
  }
  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(item => item !== callback);
  }
  emit(data) {
    this.subscribers.forEach((item) => {
      item(data);
    });
  }
}

import Observer from './observer';

class Store extends Observer {
  constructor() {
    super();
    this.state = [];
  }
  get() {
    return this.state;
  }
  set(value) {
    this.state.push(value);
    this.emit(this);
  }
}

const instanceStore = new Store();
export default instanceStore;

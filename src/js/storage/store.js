import Observer from './observer';

class Store extends Observer {
  constructor() {
    super();
    this.state = null;
  }
  get() {
    return this.state;
  }
  set(value) {
    this.state = value;
    this.emit(this);
  }
}

const instanceStore = new Store();
export default instanceStore;

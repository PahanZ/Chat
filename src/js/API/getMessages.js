import appendMessage from '../components/message';

let store;

const getMessage = () => {
  if (localStorage.getItem('store')) {
    store = JSON.parse(localStorage.getItem('store'), (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    });
  } else {
    store = [];
  }
};

const displayMessage = () => {
  if (store != null) {
    Array.prototype.forEach.call(store, () => {
      appendMessage();
    });
  }
};

export { store, getMessage, displayMessage };

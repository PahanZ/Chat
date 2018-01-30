let store;

const getStore = () => store;

const getFromStorage = () => {
  if (localStorage.getItem('store')) {
    store = JSON.parse(localStorage.getItem('store'), (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    });
  } else {
    store = [];
  }
};

export { getFromStorage, getStore };


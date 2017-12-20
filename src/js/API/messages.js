import appendMessage from '../storage/appendMessage';
import addObjectToUserMessages from '../storage/addObjectToUserMessages';
import getDate from '../storage/getDate';

let usersMessages;

const getLocalStorage = () => {
  if (localStorage.getItem('usersMessages')) {
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'), (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    });
  } else {
    usersMessages = [];
  }
};

const appendFromLocalStorage = () => {
  if (usersMessages != null) {
    Array.prototype.forEach.call(usersMessages, (item) => {
      appendMessage(item.observers[0].message, getDate(item.observers[0].date));
    });
  }
};

const setMessageToLocalStorage = (object) => {
  addObjectToUserMessages(object);
  const str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};

export { usersMessages, getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage };

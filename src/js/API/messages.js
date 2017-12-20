import appendMessage from '../components/message';
import getDate from '../storage/getDate';

let usersMessages;

const getMessage = () => {
  if (localStorage.getItem('usersMessages')) {
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'), (key, value) => {
      if (key === 'date') return new Date(value);
      return value;
    });
  } else {
    usersMessages = [];
  }
};

const displayMessage = () => {
  if (usersMessages != null) {
    Array.prototype.forEach.call(usersMessages, (item) => {
      appendMessage(item.observers[0].message, getDate(item.observers[0].date));
    });
  }
};

export { usersMessages, getMessage, displayMessage };

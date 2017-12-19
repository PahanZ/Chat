import appendMessage from '../storage/appendMessage';
import addObjectToUserMessages from '../storage/addObjectToUserMessages';
import getDate from '../storage/getDate';

let usersMessages;

const getLocalStorage = () => {
  if (localStorage.getItem('usersMessages')) {
    let x = localStorage.getItem('usersMessages');
    x = JSON.parse(x, (key, value) => {
      if (key === 'date') {
        return new Date(value);
      }
    });
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
  } else {
    usersMessages = [];
  }
};

const appendFromLocalStorage = () => {
  if (usersMessages != null) {
    Array.prototype.forEach.call(usersMessages, (item) => {
      // appendMessage(item.observers[0].message, getDate(item.observers[0].date));
      // console.log(item.observers[0].date);
    });
  }
};

const setMessageToLocalStorage = (object) => {
  addObjectToUserMessages(object);
  const str = JSON.stringify(usersMessages);
  console.log(str);
  localStorage.setItem('usersMessages', str);
};

export { usersMessages, getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage };

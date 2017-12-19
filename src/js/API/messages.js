import appendMessage from '../storage/appendMessage';
import addObjectToUserMessages from '../storage/addObjectToUserMessages';
import getDate from '../storage/getDate';

let usersMessages;

const getLocalStorage = () => {
  if (localStorage.getItem('usersMessages')) {
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
  } else {
    usersMessages = [];
  }
};

const appendFromLocalStorage = () => {
  if (usersMessages != null) {
    Array.prototype.forEach.call(usersMessages, (item) => {
      appendMessage(item.message);
      // appendMessage(getDate(item.date);
    });
  }
};

const setMessageToLocalStorage = (object) => {
  addObjectToUserMessages(object);
  const str = JSON.stringify(object.observers);
  localStorage.setItem('usersMessages', str);
};

export { usersMessages, getLocalStorage, setMessageToLocalStorage, appendFromLocalStorage };

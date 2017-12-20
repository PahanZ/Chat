import getDate from '../storage/getDate';
import appendMessage from '../components/message';
import addObjectToUserMessages from '../storage/addObjectToUserMessages';
import { usersMessages } from '../API/messages';
import newObserver from '../components/observer';
import createObj from '../storage/createObj';

const sentMessage = () => {
  addObjectToUserMessages(newObserver());
  const str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};


const serverMessage = () => {
  setTimeout(() => {
    const objectServer = createObj('2', 'эмуляция ответа');
    sentMessage(objectServer);
    getDate(objectServer.date);
    appendMessage(objectServer.message);
  }, 1000);
};

export { serverMessage, sentMessage };

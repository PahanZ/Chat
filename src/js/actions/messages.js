import getDate from '../storage/getDate';
import createObj from '../storage/createObj';
import { setMessageToLocalStorage } from '../API/messages';
import appendMessage from '../storage/appendMessage';
import Observer from '../store';
import textarea from '../index';


const userMessage = () => {
  const newObserver = new Observer();
  newObserver.set(createObj('1', textarea.value));
  newObserver.subscribe(appendMessage);
  setMessageToLocalStorage(newObserver);
};

const serverMessage = () => {
  setTimeout(() => {
    const objectServer = createObj('2', 'эмуляция ответа');
    setMessageToLocalStorage(objectServer);
    getDate(objectServer.date);
    appendMessage(objectServer.message);
  }, 1000);
};

export { userMessage, serverMessage };

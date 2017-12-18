import getDate from '../storage/getDate';
import createObj from '../storage/createObj';
import { setMessageToLocalStorage } from '../API/messages';
import appendMessage from '../storage/appendMessage';

export default () => {
  setTimeout(() => {
    const objectServer = createObj('2', 'эмуляция ответа');
    setMessageToLocalStorage(objectServer);
    getDate(objectServer.date);
    appendMessage(objectServer.message);
  }, 1000);
};

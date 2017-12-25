import Observer from '../storage/store';
import createObj from '../storage/createObj';
import MessageForm from '../components/messageForm';

export default () => {
  const newObserver = new Observer();
  const message = new MessageForm({ src: document.getElementsByClassName('wrapp')[0] });
  newObserver.set(createObj('1', message.get().value));
  return newObserver;
};

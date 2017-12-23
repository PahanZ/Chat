import Observer from '../storage/store';
import createObj from '../storage/createObj';
import { textarea } from '../components/chat';

export default () => {
  const newObserver = new Observer();
  newObserver.set(createObj('1', textarea.value));
  return newObserver;
};

import Observer from '../storage/store';
import createObj from '../storage/createObj';

export default () => {
  const newObserver = new Observer();
  newObserver.set(createObj('1', message.value));
  return newObserver;
};

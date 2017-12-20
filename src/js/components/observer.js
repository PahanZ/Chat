import Observer from '../store';
import createObj from '../storage/createObj';
import textarea from '../index';

export default () => {
  const newObserver = new Observer();
  newObserver.set(createObj('1', textarea.value));
  return newObserver;
};

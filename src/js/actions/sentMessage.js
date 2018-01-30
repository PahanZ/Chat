import createObj from '../storage/createObj';
import instanceStore from '../storage/store';

export default (message) => {
  instanceStore.set(createObj('1', message));
};

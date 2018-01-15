import createObj from '../storage/createObj';
import instanceStore from '../storage/store';

export default () => {
  instanceStore.set(createObj('1', message.value));
};

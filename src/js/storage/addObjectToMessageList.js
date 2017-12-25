import { store } from '../API/getMessages';

export default (object) => {
  store.push(object);
};


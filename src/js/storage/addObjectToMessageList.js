import { getStore } from '../API/getMessages';

export default (object) => {
  getStore().push(object);
};


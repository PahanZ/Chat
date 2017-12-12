import { usersMessages } from './API/messages';

const addObjectToUserMessages = (object) => {
  usersMessages.push(object);
};

export { addObjectToUserMessages };

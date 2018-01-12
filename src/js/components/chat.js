import messageForm from './messageForm';
import messages from './messages';
import getStore from './getStore';
import correctDate from '../storage/getDate';
import message from './message';

export default (action) => {
  const wrap = document.getElementsByClassName('wrapp')[0];
  wrap.innerHTML = null;
  wrap.append(messages(message, getStore, correctDate));
  wrap.append(messageForm({
    onSubmit: () => {
      action();
    },
  }));
  return wrap;
};

import Messages from './Messages';
import Message from './Message';
import MessageForm from './MessageForm';

export default ({ sentMessage, store, correctDate }) => {
  const wrap = document.getElementsByClassName('wrapp')[0];
  wrap.innerHTML = null;
  wrap.append(Messages(Message, store, correctDate));
  wrap.append(MessageForm({
    onSubmit: () => {
      sentMessage();
    },
  }));
  return wrap;
};

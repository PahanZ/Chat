import Messages from './Messages';
import MessageForm from './MessageForm';

export default ({ sentMessage, store, correctDate }) => {
  const tmp = document.getElementById('tmpWrap').content.cloneNode(true);
  const wrap = tmp.getElementById('wrapp');
  wrap.append(Messages({
    store,
    correctDate,
  }));
  wrap.append(MessageForm({
    onSubmit: sentMessage,
  }));
  tmp.append(wrap);
  return tmp;
};

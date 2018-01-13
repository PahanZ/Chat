import '../style.scss';
import Chat from './components/Chat';
import InstanceStore from './storage/store';
import sentMessage from './actions/sentMessage';
import correctDate from './storage/correctDate';
import Messages from './components/Messages';
import Message from './components/Message';
import MessageForm from './components/MessageForm';

const body = document.getElementsByTagName('body')[0];
const store = InstanceStore.get();
InstanceStore.subscribe(() => {
  body.prepend(Chat(
    sentMessage, store, correctDate,
    Messages(Message, store, correctDate),
    MessageForm({
      onSubmit: () => {
        sentMessage();
      },
    }),
  ));
});
body.prepend(Chat(
  sentMessage, store, correctDate,
  Messages(Message, store, correctDate),
  MessageForm({
    onSubmit: () => {
      sentMessage();
    },
  }),
));

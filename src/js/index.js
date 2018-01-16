import '../style.scss';
import Chat from './components/Chat';
import InstanceStore from './storage/store';
import sentMessage from './actions/sentMessage';
import correctDate from './storage/correctDate';


const body = document.getElementsByTagName('body')[0];
const store = InstanceStore.get();
InstanceStore.subscribe(() => {
  body.prepend(Chat({ sentMessage, store, correctDate }));
});
InstanceStore.emit();

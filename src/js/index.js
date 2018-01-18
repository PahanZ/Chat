import '../style.scss';
import Chat from './components/Chat';
import InstanceStore from './storage/store';
import sentMessage from './actions/sentMessage';
import correctDate from './storage/correctDate';


const app = document.getElementById('app');
const store = InstanceStore.get();
InstanceStore.subscribe(() => {
  app.innerHTML = null;
  app.prepend(Chat({ sentMessage, store, correctDate }));
});
InstanceStore.emit();


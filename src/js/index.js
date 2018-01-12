import '../style.scss';
import chat from './components/chat';
import instanceStore from './storage/store';
import action from './actions/action';

const body = document.getElementsByTagName('body')[0];
instanceStore.subscribe(() => {
  body.prepend(chat(action));
});
body.prepend(chat(action));

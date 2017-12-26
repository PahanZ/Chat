import Wrap from './wrapper';
import MessageList from './messageList';
import MessageForm from './messageForm';
import Message from './message';

export default () => {
  const wrap = new Wrap({ src: document.body });
  wrap.render();
  const messageList = new MessageList({ src: document.getElementsByClassName('wrapp')[0] });
  messageList.render();
  const messageForm = new MessageForm({ src: document.getElementsByClassName('wrapp')[0] });
  messageForm.render();
  messageForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = new Message();
    message.set();
    // messageList.render();
    // messageForm.render();
    messageForm.get().value = '';
  });
};


// const submit = document.getElementById('form');
// const textarea = document.getElementById('message');
// const output = document.getElementById('output');


// const chat = (messageList, sentMessage, message) => {
//   messageList();
//   submit.addEventListener('submit', (event) => {
//     event.preventDefault();
//     sentMessage();
//     message();
//     textarea.value = '';
//   });
// };

// export { chat, textarea, output };

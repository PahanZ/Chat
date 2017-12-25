import Wrap from './wrapper';
import MessageList from './messageList';
import MessageForm from './messageForm';
import Message from './message';

const chat = () => {
  const wrap = new Wrap({ src: document.body });
  wrap.render();
  const messageList = new MessageList({ src: document.getElementsByClassName('wrapp')[0], message: document.getElementById('output') });
  messageList.render();
  const messageForm = new MessageForm({ src: document.getElementsByClassName('wrapp')[0] });
  messageForm.render();
  messageForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = new Message();
    // message.set();
    console.log(messageForm.get());
    messageForm.get().value = '';
  });
};

export { chat };

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

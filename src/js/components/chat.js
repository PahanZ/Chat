
const submit = document.getElementById('form');
const textarea = document.getElementById('message');
const output = document.getElementById('output');

const chat = (messageList, sentMessage, message) => {
  messageList();
  submit.addEventListener('submit', (event) => {
    event.preventDefault();
    sentMessage();
    message();
    textarea.value = '';
  });
};

export { chat, textarea, output };

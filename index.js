const output = document.getElementById('output');
const textarea = document.getElementById('message');
const submit = document.getElementById('form');
const usersMessages = [];
const state = JSON.parse(localStorage.getItem('usersMessages'));

const createObj = (id, message) => ({
  id,
  message,
});


const getDate = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  };
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

const appendMessage = (sms) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = sms;
  output.appendChild(newDiv);
};


const setLocalStorage = (object) => {
  usersMessages.push(object);
  const str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};


if (state != null) {
  Array.prototype.forEach.call(state, (item) => {
    appendMessage(item.message);
  });
}

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  getDate();
  setLocalStorage(createObj('user', textarea.value));
  appendMessage(usersMessages[usersMessages.length - 1].message);
  textarea.value = '';
  setTimeout(() => {
    getDate();
    setLocalStorage(createObj('server', 'эмуляция ответа'));
    appendMessage(usersMessages[usersMessages.length - 1].message);
  }, 1000);
});


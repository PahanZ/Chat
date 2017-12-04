const output = document.getElementById('output');
const textarea = document.getElementById('message');
const submit = document.getElementById('form');
let usersMessages;


const getLocalStorage = () => {
  if (localStorage.getItem('usersMessages')) {
    usersMessages = JSON.parse(localStorage.getItem('usersMessages'));
  } else {
    usersMessages = [];
  }
};
getLocalStorage();


const users = {
  1: {
    id: 1,
    userName: 'user',
  },
  2: {
    id: 2,
    userName: 'server',
  },
};


const createObj = (id, message) => ({
  id,
  message,
  date: new Date(),
});


const getDate = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
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
  newDiv.textContent = sms;
  output.appendChild(newDiv);
};


const setLocalStorage = (object) => {
  usersMessages.push(object);
  const str = JSON.stringify(usersMessages);
  localStorage.setItem('usersMessages', str);
};


if (usersMessages != null) {
  Array.prototype.forEach.call(usersMessages, (item) => {
    appendMessage(item.message);
  });
}


submit.addEventListener('submit', (event) => {
  event.preventDefault();
  setLocalStorage(createObj('1', textarea.value));
  getDate(usersMessages[usersMessages.length - 1].date);
  appendMessage(usersMessages[usersMessages.length - 1].message);


  textarea.value = '';
  setTimeout(() => {
    setLocalStorage(createObj('2', 'эмуляция ответа'));
    getDate(usersMessages[usersMessages.length - 1].date);
    appendMessage(usersMessages[usersMessages.length - 1].message);
  }, 1000);
});

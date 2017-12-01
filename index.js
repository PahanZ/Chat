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


const users = { // зачем отдельно хранить еще один объект с объектами, если есть просто массив с объектами, из которого можно вытянуть всю инфу
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
});


const getDate = () => {
  const date = new Date();
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
  for (const key in users) {
    if (Object.prototype.hasOwnProperty.call(users, key)) { // че сделать с этим косяком и с циклом  for in
      appendMessage(users[key].userName);
    }
  }
  // Array.prototype.forEach.call(users, (item) => {
  //   console.log(item);
  // });
}


submit.addEventListener('submit', (event) => {
  event.preventDefault();
  getDate();
  setLocalStorage(createObj('1', textarea.value)); // как добавить свойство не указываю его(т.е. добавить объект в объект просто)
  appendMessage(users[usersMessages[usersMessages.length - 1].id].userName); // зачем отображать имя пользователя ,если нам нужны сообщени/
  textarea.value = '';
  setTimeout(() => {
    getDate();
    setLocalStorage(createObj('2', 'эмуляция ответа'));
    appendMessage(users[usersMessages[usersMessages.length - 1].id].userName);
  }, 1000);
});

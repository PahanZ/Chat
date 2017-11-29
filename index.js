const output = document.getElementById('output');
const message = document.getElementById('message');
const submit = document.getElementById('form');
const usersMessage = [];
const obj = {
  name: 'user',
  message: '',
  date: new Date(),
  showDate() {
    return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
  },
};
const serv = {
  name: 'server',
  message: '',
  date: new Date(),
  showDate() {
    return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
  },
};

const state = JSON.parse(localStorage.getItem('usersMessage'));

const addMessage = (sms) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = sms;
  output.appendChild(newDiv);
  const str = JSON.stringify(usersMessage);
  localStorage.setItem('usersMessage', str);
};


if (state != null) {
  Array.prototype.forEach.call(state, (item) => {
    addMessage(item.message);
  });
}

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  obj.message = message.value;
  addMessage(obj.message);
  usersMessage.push(obj);
  message.value = '';
  setTimeout(() => {
    serv.message = 'эмуляция ответа';
    addMessage(serv.message);
    usersMessage.push(serv);
  }, 1000);
});

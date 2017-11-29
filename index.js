const output = document.getElementById('output');
const message = document.getElementById('message');
const submit = document.getElementById('form');
const usersMessage = [];
const state = JSON.parse(localStorage.getItem('usersMessage'));
const serv = {
  name: 'server',
  message: 'эмуляция ответа',
  date: new Date(),
  showDate() {
    return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
  },
};


const showMessage = (sms) => {
  const newDiv = document.createElement('div');
  newDiv.append(sms);
  output.appendChild(newDiv);
};


const setLocalStorage = () => {
  const str = JSON.stringify(usersMessage);
  localStorage.setItem('usersMessage', str);
};


if (state != null) {
  Array.prototype.forEach.call(state, (item) => {
    showMessage(item.message);
  });
}


const pushing = (object) => {
  usersMessage.push(object);
};


submit.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = {
    name: 'user',
    message: message.value,
    date: new Date(),
    showDate() {
      return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
    },
  };
  pushing(user);
  setLocalStorage();
  showMessage(user.message);
  message.value = '';
  setTimeout(() => {
    showMessage(serv.message);
    pushing(serv);
    setLocalStorage();
  }, 1000);
});

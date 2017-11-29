const output = document.getElementById('output');
const message = document.getElementById('message');
const submit = document.getElementById('form');
const usersMessage = [];
// const obj = {
//   name: 'user',
//   message: '',
//   date: new Date(),
//   showDate() {
//     return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
//   },
// };
const serv = {
  name: 'server',
  message: 'эмуляция ответа',
  date: new Date(),
  showDate() {
    return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
  },
};

const state = JSON.parse(localStorage.getItem('usersMessage'));

const showMessage = (sms) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = sms;
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
  usersMessage.push(user);
  setLocalStorage();
  showMessage(user.message);
  message.value = '';
  console.log(usersMessage);
  setTimeout(() => {
    showMessage(serv.message);
    usersMessage.push(serv);
    setLocalStorage();
  }, 1000);
});


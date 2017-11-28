const output = document.getElementById('output');
const message = document.getElementById('message');
const submit = document.getElementById('form');
const obj = {
  name: 'user',
  message: [],
  date: new Date(),
  showDate() {
    return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
  },
};

const state = JSON.parse(localStorage.getItem('key'));


const addMessage = (arr, elem) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = arr[elem];
  output.appendChild(newDiv);
  const str = JSON.stringify(obj);
  localStorage.setItem('key', str);
  console.log(obj.showDate());
};


if (state != null) {
  Array.prototype.forEach.call(state.message, (item, i) => {
    addMessage(state.message, i);
  });
}

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  obj.message.push(message.value);
  addMessage(obj.message, obj.message.length - 1);
  message.value = '';
  setTimeout(() => {
    obj.message.push('эмуляция ответа');
    addMessage(obj.message, obj.message.length - 1);
  }, 1000);
});

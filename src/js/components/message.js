import { usersMessages } from '../API/messages';
import getDate from '../storage/getDate';

const output = document.getElementById('output');

export default () => {
  output.innerHTML = null;
  // Array.prototype.forEach.call(output.children, (item) => {
  //   item.remove();
  // });
  Array.prototype.forEach.call(usersMessages, (item) => {
    const wrap = document.createElement('div');
    wrap.className = 'newMessage';
    const messageDiv = document.createElement('div');
    messageDiv.className = 'messageDiv';
    messageDiv.textContent = item.observers[0].message;
    wrap.appendChild(messageDiv);
    const dateDiv = document.createElement('div');
    dateDiv.textContent = getDate(item.observers[0].date);
    wrap.appendChild(dateDiv);
    output.appendChild(wrap);
  });
};

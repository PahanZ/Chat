import { usersMessages } from '../API/messages';
import getDate from '../storage/getDate';

const output = document.getElementById('output');

export default () => {
  Array.prototype.forEach.call(output.children, (item) => {
    item.remove();
  });
  const wrap = document.createElement('div');
  wrap.className = 'newMessage';
  Array.prototype.forEach.call(usersMessages, (item) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'messageDiv';
    messageDiv.textContent = item.observers[0].message;
    wrap.appendChild(messageDiv);
  });
  Array.prototype.forEach.call(usersMessages, (item) => {
    const dateDiv = document.createElement('div');
    dateDiv.textContent = getDate(item.observers[0].date);
    wrap.appendChild(dateDiv);
  });
  output.appendChild(wrap);
};

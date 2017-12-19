const output = document.getElementById('output');

export default (sms, date) => {
  const wrap = document.createElement('div');
  wrap.className = 'newMessage';
  const messageDiv = document.createElement('div');
  messageDiv.className = 'messageDiv';
  messageDiv.textContent = sms;
  const dateDiv = document.createElement('div');
  dateDiv.textContent = date;
  wrap.appendChild(messageDiv);
  wrap.appendChild(dateDiv);
  output.appendChild(wrap);
};


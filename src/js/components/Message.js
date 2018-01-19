export default ({ content, correctDate }) => {
  const wrap = document.createElement('div');
  const messageDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  wrap.className = 'newMessage';
  messageDiv.className = 'messageDiv';
  messageDiv.textContent = content.message;
  dateDiv.textContent = correctDate(content.date);
  wrap.append(messageDiv);
  wrap.append(dateDiv);
  return wrap;
};

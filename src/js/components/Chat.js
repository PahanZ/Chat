export default (action, store, correctDate, messages, messageForm) => {
  const wrap = document.getElementsByClassName('wrapp')[0];
  wrap.innerHTML = null;
  wrap.append(messages);
  wrap.append(messageForm);
  return wrap;
};

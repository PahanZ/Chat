const output = document.getElementById('output');

export default (sms) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = sms;
  output.appendChild(newDiv);
};

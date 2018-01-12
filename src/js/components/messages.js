export default (message, store, correctDate) => {
  const tmp = document.getElementById('tmpOutput').content.cloneNode(true);
  const output = tmp.getElementById('output');
  store().forEach((item) => {
    output.append(message(item, correctDate));
  });
  tmp.append(output);
  return tmp;
};


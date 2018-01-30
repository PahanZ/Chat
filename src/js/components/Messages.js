import Message from './Message';

export default ({ store, correctDate }) => {
  const tmp = document.getElementById('tmpOutput').content.cloneNode(true);
  const output = tmp.getElementById('output');
  store.forEach((item) => {
    output.append(Message({
      content: item,
      correctDate,
    }));
  });
  tmp.append(output);
  return tmp;
};


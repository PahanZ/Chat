export default (wrap, store, searchMessage) => {
  if (store.get().length >= 1) {
    Array.prototype.forEach.call(store.get(), (item) => {
      if (item.message === searchMessage) {
        const newDiv = document.createElement('div');
        const input = document.createElement('input');
        const btn = document.createElement('button');
        btn.textContent = 'Изменить';
        input.value = item.message;
        newDiv.append(input);
        newDiv.append(btn);
        wrap.append(newDiv);
        btn.addEventListener('click', () => {
          const output = document.getElementById('output');
          Array.prototype.forEach.call(output.children, (element) => {
            const messages = element.getElementsByTagName('div')[0];
            if (messages.textContent === item.message) {
              messages.innerHTML = input.value;
              newDiv.remove();
            }
          });
        });
      }
    });
  }
};

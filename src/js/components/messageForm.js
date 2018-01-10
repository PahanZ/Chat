// import messages from './messages';

const messageForm = ({ element, onSubmit }) => {
  const form = element.getElementById('form');
  // const output = element.getElementById('output');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmit();
  });
  // messages(output);
  element.append(form);
};

export default messageForm;
// class MessageForm {
//   constructor(event) {
//     // this.src = src;
//     this.onSubmit = event;
//   }
//   render(elem) {
//     const form = elem.content;
//     this.src.innerHTML = null;
//     this.src.append(form.cloneNode(true));


//     // this.form = document.createElement('form');
//     // this.form.id = 'form';
//     // this.label = document.createElement('label');
//     // this.label.for = this.form.id;
//     // this.label.textContent = 'Введите сообщение';
//     // this.textarea = document.createElement('textarea');
//     // this.textarea.id = 'message';
//     // this.submit = document.createElement('button');
//     // this.submit.textContent = 'Отправить';
//     // this.form.append(this.label);
//     // this.form.append(this.textarea);
//     // this.form.append(this.submit);
//     // this.src.append(this.form);
//   }
// }

// export default MessageForm;

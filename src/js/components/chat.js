// import messageList from './messageList';
import MessageForm from './messageForm';
// import messages from './messages';

export default () => {
  const template = document.getElementById('tmp1').content.cloneNode(true);
  // const output = template.getElementById('output');
  const formElement = template.getElementById('form');

  const messageForm = new MessageForm({
    onSubmit: () => {
      console.log('callback');
    },
  });
  formElement.append(messageForm);

  console.log(messageForm);
  return template;


  // messageList.render(document.getElementById('tmp1'));
  // messageForm.render(document.getElementById('tmp1'));
  // messages.render(document.getElementById('output'));


  // sent(() => {
  //   messages.render(document.getElementById('output'));
  // });
  // document.getElementById('form').addEventListener('submit', sent);

  // form.addEventListener('submit', sent); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! не робит !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // messageForm.form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   sent();
  //   messages.render();
  //   messageForm.get().value = '';
  // });
};


// const submit = document.getElementById('form');
// const textarea = document.getElementById('message');
// const output = document.getElementById('output');


// const chat = (messageList, sentMessage, message) => {
//   messageList();
//   submit.addEventListener('submit', (event) => {
//     event.preventDefault();
//     sentMessage();
//     message();
//     textarea.value = '';
//   });
// };

// export { chat, textarea, output };

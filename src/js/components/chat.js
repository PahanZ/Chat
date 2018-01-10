// import messageList from './messageList';
import messageForm from './messageForm';
import messages from './messages';


export default (action) => {
  const template = document.getElementById('tmp1').content.cloneNode(true);
  messages(template);
  messageForm({
    element: template,
    onSubmit: () => {
      action();
    },
  });
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

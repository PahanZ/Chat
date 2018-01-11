import messageForm from './messageForm';
import messages from './messages';
import instanceStore from '../storage/store';
import correctDate from '../storage/getDate';
import message from './message';


export default (action) => {
  const wrap = document.getElementsByClassName('wrapp')[0];
  wrap.innerHTML = null;
  const template = document.getElementById('tmp1').content.cloneNode(true);
  messages(template, instanceStore, correctDate);
  messageForm({
    element: template,
    onSubmit: () => {
      action();
    },
  });
  message(wrap, instanceStore, 'somth');
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

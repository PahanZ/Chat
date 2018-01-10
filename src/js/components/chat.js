// import messageList from './messageList';
import messageForm from './messageForm';
import messages from './messages';
// import instanceStore from '../storage/store';
// import createObj from '../storage/createObj';
import action from '../actions/action';

export default () => {
  const template = document.getElementById('tmp1').content.cloneNode(true);
  const output = template.getElementById('output');
  // if (instanceStore.get() !== null) {
  //   output.append(instanceStore.get().message);
  // }
  const formElement = template.getElementById('form');
  messageForm({
    element: formElement,
    onSubmit: () => {
      action();
      // instanceStore.set(createObj('1', formElement.getElementsByTagName('textarea')[0].value));
      // formElement.getElementsByTagName('textarea')[0].value = '';
      messages(output);
    },
  });
  template.append(output);
  template.append(formElement);
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


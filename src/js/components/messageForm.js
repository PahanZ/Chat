export default ({ onSubmit }) => {
  const tmp = document.getElementById('tmpForm').content.cloneNode(true);
  const form = tmp.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    onSubmit();
  });
  return tmp;
};

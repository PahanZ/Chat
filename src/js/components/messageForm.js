class MessageForm {
  constructor(src) {
    this.src = src;
  }
  render(elem) {
    const form = elem.content;
    this.src.append(form.cloneNode(true));
    // this.form = document.createElement('form');
    // this.form.id = 'form';
    // this.label = document.createElement('label');
    // this.label.for = this.form.id;
    // this.label.textContent = 'Введите сообщение';
    // this.textarea = document.createElement('textarea');
    // this.textarea.id = 'message';
    // this.submit = document.createElement('button');
    // this.submit.textContent = 'Отправить';
    // this.form.append(this.label);
    // this.form.append(this.textarea);
    // this.form.append(this.submit);
    // this.src.append(this.form);
  }
  get() {
    return this.textarea;
  }
}

export default new MessageForm(document.getElementsByClassName('wrapp')[0]);

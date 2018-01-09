class MessageList {
  constructor(src) {
    this.src = src;
  }
  render(elem) {
    this.src.innerHTML = null;


    const output = elem.content;
    this.src.prepend(output.cloneNode(true));


    
    // const output2 = output.cloneNode(true);
    // this.output = document.createElement('div');
    // this.output.id = 'output';
    // this.src.prepend(this.output);
  }
}

const messageList = new MessageList(document.getElementsByClassName('wrapp')[0]);
export default messageList;

import { getMessage, displayMessage } from '../API/getMessages';

export default class MessageList {
  constructor(options) {
    this.src = options.src;
  }
  render() {
    this.output = document.createElement('div');
    this.output.id = 'output';
    this.src.append(this.output);
  }
  get() {
    console.log(getMessage());
  }
}

// export default () => {
//   getMessage();
//   displayMessage();
// };

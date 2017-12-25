export default class Wrap {
  constructor(options) {
    this.src = options.src;
  }
  render() {
    this.wrap = document.createElement('div');
    this.wrap.classList = 'wrapp';
    this.src.append(this.wrap);
  }
}

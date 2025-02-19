export default class Slide {

  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    console.log('clicou')
    this.wrapper.addEventListener('mousemove', this.onMove);
    this.wrapper.addEventListener('mouseup', this.onUp);
  }

  onMove(event) {
    console.log('moveu')
  }

  onUp(event) {
    console.log('Soltou')
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onUp = this.onUp.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
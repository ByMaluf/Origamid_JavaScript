import outsideClick from './outsideclick.js';

export default class DropdownMenu {

  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = 'active';
    //define touchstart e click como arumento padrão
    //de events não defina
    this.events = events || ['touchstart', 'click'];
  }

  //ativa o dropdowmenu e adiciona
  //a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length)
      this.addDropdownMenusEvent();
    return this;
  }
}

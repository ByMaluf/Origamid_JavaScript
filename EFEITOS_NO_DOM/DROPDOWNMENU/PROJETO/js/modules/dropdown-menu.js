export default function initDropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
  ['click', 'touchstart'].forEach(useEvent => {
    menu.addEventListener(useEvent, handleClick)
  })
})

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
}
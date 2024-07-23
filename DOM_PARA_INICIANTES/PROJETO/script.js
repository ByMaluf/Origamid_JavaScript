const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabContent.length && tabMenu.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => section.classList.remove('ativo'));
    tabContent[index].classList.add('ativo')
  }

  function activeTabMenu() {
    const index = Array.from(tabMenu).indexOf(this);
    activeTab(index);
  }

  tabMenu.forEach((li) => {
    li.addEventListener('click', activeTabMenu);
  })
}


export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove('ativo', `${section.dataset.anime}`));
      const anime = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', `${anime}`);
    }

    function activeTabMenu() {
      const index = Array.from(tabMenu).indexOf(this);
      activeTab(index);
    }

    tabMenu.forEach((li) => {
      li.addEventListener('click', activeTabMenu);
    })
  }
}
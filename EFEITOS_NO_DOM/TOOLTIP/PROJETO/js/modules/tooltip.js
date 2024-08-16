export default function initTooltip() {

}

const tooltips = document.querySelector('[data-tooltip]');

function onMouseOver(event) {

  event.preventDefault();

  const { pageX, pageY } = event;
  const tooltipBox = criarTooltipBox(this)
  tooltipBox.style.top = `${pageY}px`
  tooltipBox.style.left = `${pageX}px`

  function onMouseLeave() {
    tooltipBox.remove();
  }

  this.addEventListener('mouseleave', onMouseLeave);
}



function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  tooltipBox.innerHTML = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}

tooltips.addEventListener('mouseover', onMouseOver);
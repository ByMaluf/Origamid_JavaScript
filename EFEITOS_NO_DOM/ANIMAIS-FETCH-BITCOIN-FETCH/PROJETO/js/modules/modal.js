export default function initModal() {
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const containerModal = document.querySelector('[data-modal="container"]');


    if (botaoAbrir && botaoFechar && containerModal) {

        function gerenciarModal(event) {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }

        function cliqueForaDoModal(event) {
            if (event.target == this) {
                gerenciarModal(event)
            }
        }

        botaoAbrir.addEventListener('click', gerenciarModal);
        botaoFechar.addEventListener('click', gerenciarModal);
        containerModal.addEventListener('click', cliqueForaDoModal)
    }
}



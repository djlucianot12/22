document.addEventListener('DOMContentLoaded', () => {
    const parkMansionLink = document.querySelector('.p-stage__menu__item[data-canvas-url="works/park-mansion-minami-azabu.html"]');
    const transitionContainer = document.getElementById('transition-container');

    if (parkMansionLink && transitionContainer) {
        parkMansionLink.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.dataset.canvasUrl;

            transitionContainer.classList.add('color-overlay-out');

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    }
});

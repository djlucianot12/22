document.addEventListener('DOMContentLoaded', () => {
    const parkMansionLink = document.querySelector('.p-stage__menu__item[data-canvas-url="works/park-mansion-minami-azabu.html"]');

    if (parkMansionLink) {
        parkMansionLink.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.dataset.canvasUrl;

            document.body.classList.add('fade-out-simple');

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    }
});

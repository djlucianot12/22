document.addEventListener('DOMContentLoaded', () => {
    const parkMansionLink = document.querySelector('.p-stage__menu__item[data-canvas-url="works/park-mansion-minami-azabu.html"]');

    if (parkMansionLink) {
        parkMansionLink.addEventListener('click', function(event) {
            const url = this.dataset.canvasUrl;

            if (url) {
                event.preventDefault();
                document.body.classList.add('dynamic-transition-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 800);
            }
        });
    }

    if (window.location.pathname.includes('/works/park-mansion-minami-azabu.html')) {
        document.body.classList.add('dynamic-transition-in');
    }
});

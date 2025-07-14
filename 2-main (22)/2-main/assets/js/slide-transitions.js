document.addEventListener('DOMContentLoaded', () => {
    const parkMansionLink = document.querySelector('li[data-canvas-url="works/park-mansion-minami-azabu.html"]');

    if (parkMansionLink) {
        parkMansionLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('slide-out-to-left');
            setTimeout(() => {
                window.location.href = this.dataset.canvasUrl;
            }, 500);
        });
    }

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('slide-out-to-left');
            document.body.classList.add('slide-in-from-right');
        }
    });

    document.body.classList.add('slide-in-from-right');
});

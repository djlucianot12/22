document.addEventListener('DOMContentLoaded', () => {
    const parkMansionLink = document.querySelector('li[data-canvas-url="works/park-mansion-minami-azabu.html"]');

    if (parkMansionLink) {
        parkMansionLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('slide-out-to-left');

            const url = this.dataset.canvasUrl;
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    }

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('slide-out-to-left');
            document.body.classList.add('slide-in-from-right');
        }
    });

    // Use 'visibilitychange' and 'pagehide' as alternatives to 'unload'
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            document.body.classList.remove('slide-in-from-right');
        }
    });

    window.addEventListener('pagehide', (event) => {
        if (event.persisted === false) {
            document.body.classList.remove('slide-in-from-right');
        }
    });

    document.body.classList.add('slide-in-from-right');
});

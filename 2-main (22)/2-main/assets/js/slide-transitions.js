document.addEventListener('DOMContentLoaded', () => {
    const transitionLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.href;

            if (url.startsWith(window.location.origin)) {
                event.preventDefault();
                document.body.classList.add('zoom-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            }
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('zoom-out');
        }
    });

    document.body.classList.add('zoom-in');
});

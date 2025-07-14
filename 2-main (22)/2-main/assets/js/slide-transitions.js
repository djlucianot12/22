document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.p-stage__menu__item');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.dataset.canvasUrl;

            if (url) {
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
            document.body.classList.add('zoom-in');
        }
    });
});

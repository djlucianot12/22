document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.p-stage__menu__item');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.dataset.canvasUrl;

            if (url) {
                event.preventDefault();
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            }
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('page-transition-out');
        }
    });

    document.body.classList.add('page-transition-in');
});

document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.p-stage__menu__item');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.dataset.canvasUrl;

            if (url) {
                event.preventDefault();
                document.body.classList.add('fade-out-to-blue');
                setTimeout(() => {
                    window.location.href = url;
                }, 1000);
            }
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('fade-out-to-blue');
            document.body.classList.add('fade-in-from-blue');
        }
    });

    document.body.classList.add('fade-in-from-blue');
});

document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.p-stage__menu__item');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.dataset.canvasUrl;

            if (url) {
                event.preventDefault();
                document.body.classList.add('slide-and-fade-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            }
        });
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('slide-and-fade-out');
        }
    });

    document.body.classList.add('slide-and-fade-in');
});

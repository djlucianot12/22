document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('home')) {
        const projectLinks = document.querySelectorAll('.p-stage__menu__item');

        projectLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const url = this.dataset.canvasUrl;

                if (url) {
                    event.preventDefault();
                    document.body.classList.add('home-to-project-transition-out');
                    setTimeout(() => {
                        window.location.href = url;
                    }, 700);
                }
            });
        });
    }

    if (window.location.pathname.includes('/works/')) {
        document.body.classList.add('home-to-project-transition-in');
    }
});

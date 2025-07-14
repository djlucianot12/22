document.addEventListener('DOMContentLoaded', () => {
    const transitionLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.href;

            if (url.startsWith(window.location.origin) && !this.closest('.p-stage__menu__item')) {
                event.preventDefault();
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 550);
            }
        });
    });

    const projectLinks = document.querySelectorAll('.p-stage__menu__item');
    projectLinks.forEach(projectItemLi => {
        const targetUrl = projectItemLi.getAttribute('data-canvas-url');
        if (targetUrl && !targetUrl.startsWith('http') && !targetUrl.startsWith('#')) {
            projectItemLi.addEventListener('click', function(event) {
                event.preventDefault();
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 550);
            });
        }
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('page-transition-out');
        }
    });

    // On page load, trigger the fade-in animation
    document.body.classList.add('page-transition-in');
});

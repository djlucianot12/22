document.addEventListener('DOMContentLoaded', () => {
    // Flag to indicate if the counter animation is running
    window.isCounterAnimating = true;

    // Listen for a custom event that signals the counter animation is complete
    document.addEventListener('counterAnimationComplete', () => {
        window.isCounterAnimating = false;
    });

    const transitionLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.href;

            if (url.startsWith(window.location.origin) && !this.closest('.p-stage__menu__item')) {
                event.preventDefault();
                if (window.isCounterAnimating) {
                    setTimeout(() => {
                        document.body.classList.add('page-transition-out');
                        setTimeout(() => {
                            window.location.href = url;
                        }, 550);
                    }, 4000); // Wait for the counter animation to finish
                } else {
                    document.body.classList.add('page-transition-out');
                    setTimeout(() => {
                        window.location.href = url;
                    }, 550);
                }
            }
        });
    });

    const projectLinks = document.querySelectorAll('.p-stage__menu__item');
    projectLinks.forEach(projectItemLi => {
        const targetUrl = projectItemLi.getAttribute('data-canvas-url');
        if (targetUrl && !targetUrl.startsWith('http') && !targetUrl.startsWith('#')) {
            projectItemLi.addEventListener('click', function(event) {
                event.preventDefault();
                if (window.isCounterAnimating) {
                    setTimeout(() => {
                        document.body.classList.add('page-transition-out');
                        setTimeout(() => {
                            window.location.href = targetUrl;
                        }, 550);
                    }, 4000); // Wait for the counter animation to finish
                } else {
                    document.body.classList.add('page-transition-out');
                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 550);
                }
            });
        }
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.body.classList.remove('page-transition-out');
        }
    });

    document.body.classList.add('page-transition-in');
});

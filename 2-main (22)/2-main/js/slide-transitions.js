document.addEventListener('DOMContentLoaded', () => {
    const projectLink = document.querySelector('a[href="works/park-mansion-minami-azabu.html"]');

    if (projectLink) {
        projectLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('test-transition-out');
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    }

    if (window.location.pathname.includes('/works/')) {
        document.body.classList.add('test-transition-in');
    }
});

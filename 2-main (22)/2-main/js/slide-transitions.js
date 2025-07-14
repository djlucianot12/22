document.addEventListener('DOMContentLoaded', () => {
    const projectLink = document.querySelector('a[href="works/park-mansion-minami-azabu.html"]');

    if (projectLink) {
        projectLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('test-transition-out');

            const url = this.href;
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    }
});

window.addEventListener('beforeunload', () => {
    document.body.classList.add('test-transition-in');
});

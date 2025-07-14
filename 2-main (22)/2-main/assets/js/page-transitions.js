document.addEventListener('DOMContentLoaded', () => {
    // Select all links that should trigger a page transition
    const transitionLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.href;

            // Only apply to internal links
            if (url.startsWith(window.location.origin)) {
                event.preventDefault();
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 550); // Match this timeout with the CSS animation duration
            }
        });
    });

    // On page load, trigger the fade-in animation
    window.addEventListener('load', () => {
        document.body.classList.add('page-transition-in');
    });
});

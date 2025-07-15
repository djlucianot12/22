// Scripts para la recreación de la página

document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.p-stage__menu__item');
    const transitionContainer = document.getElementById('transition-container');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.dataset.canvasUrl;

            if (url && transitionContainer) {
                transitionContainer.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            }
        });
    });
});

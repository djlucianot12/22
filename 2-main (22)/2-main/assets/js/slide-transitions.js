document.addEventListener('DOMContentLoaded', () => {
    const parkMansionLink = document.querySelector('.p-stage__menu__item[data-canvas-url="works/park-mansion-minami-azabu.html"]');
    const wrapper = document.getElementById('wrapper');

    if (parkMansionLink && wrapper) {
        parkMansionLink.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.dataset.canvasUrl;

            wrapper.classList.add('red-flash-out');

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    }
});

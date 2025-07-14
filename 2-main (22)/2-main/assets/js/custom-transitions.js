document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.p-stage__menu__item');
    const counterScript = document.querySelector('script[src="assets/js/new_project_counter.js"]');

    projectLinks.forEach(projectItemLi => {
        const targetUrl = projectItemLi.getAttribute('data-canvas-url');
        if (targetUrl && !targetUrl.startsWith('http') && !targetUrl.startsWith('#')) {
            projectItemLi.addEventListener('click', function(event) {
                event.preventDefault();

                // Disable the counter script
                if (counterScript) {
                    counterScript.remove();
                }

                // Show water effect
                const waterEffect = document.createElement('div');
                waterEffect.style.position = 'fixed';
                waterEffect.style.top = '0';
                waterEffect.style.left = '0';
                waterEffect.style.width = '100vw';
                waterEffect.style.height = '100vh';
                waterEffect.style.backgroundColor = 'blue';
                waterEffect.style.zIndex = '9999';
                waterEffect.style.opacity = '0';
                document.body.appendChild(waterEffect);

                gsap.to(waterEffect, {
                    opacity: 1,
                    duration: 1,
                    onComplete: () => {
                        window.location.href = targetUrl;
                    }
                });
            });
        }
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            const newCounterScript = document.createElement('script');
            newCounterScript.src = 'assets/js/new_project_counter.js';
            document.body.appendChild(newCounterScript);
        }
    });
});

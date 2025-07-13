document.addEventListener('DOMContentLoaded', function () {
    console.log('[NPC Fader] DOMContentLoaded: Script de galería con fundido iniciado.');

    const mediaItems = document.querySelectorAll('.npc-media-item');
    const currentMediaSpan = document.getElementById('npc-current-media');
    const totalMediaSpan = document.getElementById('npc-total-media');
    const progressBarFill = document.getElementById('npc-progress-fill');
    const galleryElement = document.querySelector('.npc-media-gallery');

    if (!currentMediaSpan || !totalMediaSpan || !progressBarFill || !galleryElement) {
        console.error('[NPC Fader] ERROR: Faltan elementos esenciales (contador, barra de progreso o galería).');
        return;
    }

    if (mediaItems.length === 0) {
        console.warn('[NPC Fader] ADVERTENCIA: No se encontraron elementos .npc-media-item.');
        totalMediaSpan.textContent = '00';
        currentMediaSpan.textContent = '00';
        progressBarFill.style.width = '0%';
        return;
    }

    totalMediaSpan.textContent = String(mediaItems.length).padStart(2, '0');

    let currentMediaIndex = 0; // El índice se basará en 0 ahora
    let autoplayTimeout;
    const autoplayDuration = 4000;
    let isAutoplayPaused = false;

    function updateDisplay(newIndex) {
        if (newIndex === currentMediaIndex) return; // No hacer nada si el índice es el mismo

        // Quitar la clase activa del elemento anterior
        if (mediaItems[currentMediaIndex]) {
            mediaItems[currentMediaIndex].classList.remove('is-active');
        }

        currentMediaIndex = (newIndex + mediaItems.length) % mediaItems.length; // Asegurar que el índice esté en el rango correcto

        // Añadir la clase activa al nuevo elemento
        if (mediaItems[currentMediaIndex]) {
            mediaItems[currentMediaIndex].classList.add('is-active');
        }

        // Actualizar el contador
        currentMediaSpan.textContent = String(currentMediaIndex + 1).padStart(2, '0');

        // Reiniciar la barra de progreso y la animación
        if (!isAutoplayPaused) {
            progressBarFill.style.transition = 'none';
            progressBarFill.style.width = '0%';
            // Forzar un reflow para que la transición se reinicie
            void progressBarFill.offsetWidth;
            progressBarFill.style.transition = `width ${autoplayDuration / 1000}s linear`;
            progressBarFill.style.width = '100%';
        }

        startAutoplay(); // Reiniciar el temporizador del autoplay
    }

    function startAutoplay() {
        clearTimeout(autoplayTimeout);
        if (isAutoplayPaused || mediaItems.length <= 1) {
            return;
        }
        autoplayTimeout = setTimeout(() => {
            updateDisplay(currentMediaIndex + 1);
        }, autoplayDuration);
    }

    // Eventos para pausar y reanudar el autoplay al pasar el mouse sobre la galería
    galleryElement.addEventListener('mouseenter', () => {
        if (mediaItems.length <= 1) return;
        clearTimeout(autoplayTimeout);
        isAutoplayPaused = true;
        const currentWidth = window.getComputedStyle(progressBarFill).width;
        progressBarFill.style.transition = 'none'; // Pausar animación de la barra
        progressBarFill.style.width = currentWidth;
    });

    galleryElement.addEventListener('mouseleave', () => {
        if (mediaItems.length <= 1) return;
        isAutoplayPaused = false;
        // Reanudar la animación de la barra de progreso desde donde se quedó
        const currentPercentage = (parseFloat(window.getComputedStyle(progressBarFill).width) / progressBarFill.parentElement.offsetWidth) * 100;
        const remainingDuration = (autoplayDuration / 1000) * (1 - currentPercentage / 100);
        progressBarFill.style.transition = `width ${remainingDuration}s linear`;
        progressBarFill.style.width = '100%';
        startAutoplay(); // Inicia el timer de nuevo
    });

    // Configuración inicial
    if (mediaItems.length > 0) {
        mediaItems[0].classList.add('is-active'); // Mostrar el primer ítem
        currentMediaSpan.textContent = '01';
        progressBarFill.style.transition = `width ${autoplayDuration / 1000}s linear`;
        progressBarFill.style.width = '100%';
        startAutoplay();
    }
});

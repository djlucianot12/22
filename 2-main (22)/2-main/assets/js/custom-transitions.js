document.addEventListener('DOMContentLoaded', () => {
    let scene, camera, renderer, material, mesh;

    function initWaterEffect() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '9999';
        renderer.domElement.style.display = 'none';
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 1.0 },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec2 resolution;
                uniform float time;
                varying vec2 vUv;

                void main() {
                    vec2 p = -1.0 + 2.0 * vUv;
                    float a = time * 40.0;
                    float d, e, f, g = 1.0 / 40.0, h, i, j, k, l, m;
                    e = 400.0 * (p.x * 0.5 + 0.5);
                    f = 400.0 * (p.y * 0.5 + 0.5);
                    i = 200.0 + sin(e * g + a / 150.0) * 20.0;
                    j = 200.0 + cos(f * g / 2.0 + a / 150.0) * 20.0;
                    k = 200.0 + sin(f * g / 10.0 + a / 200.0) * 20.0;
                    l = 200.0 + cos(e * g / 20.0 + a / 200.0) * 20.0;
                    m = sin(i + j + k + l + a) * 0.5 + 0.5;
                    gl_FragColor = vec4(m, m, m, 1.0);
                }
            `
        });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        camera.position.z = 1;
    }

    function animateWater() {
        if (renderer.domElement.style.display === 'none') return;
        material.uniforms.time.value += 0.05;
        renderer.render(scene, camera);
        requestAnimationFrame(animateWater);
    }

    function showWaterEffect(callback) {
        renderer.domElement.style.display = 'block';
        animateWater();
        setTimeout(callback, 1500); // Duration of the water effect
    }

    const transitionLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');
    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const url = this.href;

            if (url.startsWith(window.location.origin) && !this.closest('.p-stage__menu__item')) {
                event.preventDefault();
                showWaterEffect(() => {
                    window.location.href = url;
                });
            }
        });
    });

    const projectLinks = document.querySelectorAll('.p-stage__menu__item');
    projectLinks.forEach(projectItemLi => {
        const targetUrl = projectItemLi.getAttribute('data-canvas-url');
        if (targetUrl && !targetUrl.startsWith('http') && !targetUrl.startsWith('#')) {
            projectItemLi.addEventListener('click', function(event) {
                event.preventDefault();
                showWaterEffect(() => {
                    window.location.href = targetUrl;
                });
            });
        }
    });

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            if (renderer && renderer.domElement) {
                renderer.domElement.style.display = 'none';
            }
        }
    });

    initWaterEffect();
});

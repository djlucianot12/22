import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WaterTransition = ({ onComplete }) => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
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
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        camera.position.z = 1;

        let startTime = Date.now();
        function animate() {
            if (Date.now() - startTime > 1500) {
                if (onComplete) {
                    onComplete();
                }
                return;
            }
            material.uniforms.time.value += 0.05;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();
    }, [onComplete]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }} />;
};

export default WaterTransition;

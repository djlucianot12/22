import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WaterTransition from '../components/transitions/WaterTransition';

export default function Home() {
    const [html, setHtml] = useState({ __html: '' });
    const [transitioning, setTransitioning] = useState(false);
    const [targetUrl, setTargetUrl] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetch('/2-main (22)/2-main/index.html')
            .then(res => res.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const bodyContent = doc.body.innerHTML;
                setHtml({ __html: bodyContent });
            });
    }, []);

    useEffect(() => {
        if (html.__html) {
            const projectLinks = document.querySelectorAll('.p-stage__menu__item');
            projectLinks.forEach(projectItemLi => {
                const targetUrl = projectItemLi.getAttribute('data-canvas-url');
                if (targetUrl && !targetUrl.startsWith('http') && !targetUrl.startsWith('#')) {
                    projectItemLi.addEventListener('click', function(event) {
                        event.preventDefault();
                        setTargetUrl(`/works/${targetUrl.split('/').pop()}`);
                        setTransitioning(true);
                    });
                }
            });
        }
    }, [html]);

    const handleTransitionComplete = () => {
        if (targetUrl) {
            router.push(targetUrl);
        }
    };

    return (
        <div>
            {transitioning && <WaterTransition onComplete={handleTransitionComplete} />}
            <div dangerouslySetInnerHTML={html} />
        </div>
    );
}

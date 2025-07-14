import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FadeIn from '../../components/transitions/FadeIn';

export default function Work() {
    const [html, setHtml] = useState({ __html: '' });
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
            fetch(`/2-main (22)/2-main/works/${slug}`)
                .then(res => res.text())
                .then(data => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const bodyContent = doc.body.innerHTML;
                    setHtml({ __html: bodyContent });
                });
        }
    }, [slug]);

    return (
        <FadeIn>
            <div dangerouslySetInnerHTML={html} />
        </FadeIn>
    );
}

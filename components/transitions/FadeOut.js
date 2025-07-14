import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FadeOut = ({ children, onComplete }) => {
    const el = useRef();

    useEffect(() => {
        gsap.to(el.current, {
            opacity: 0,
            duration: 0.55,
            onComplete: () => {
                if (onComplete) {
                    onComplete();
                }
            },
        });
    }, []);

    return <div ref={el}>{children}</div>;
};

export default FadeOut;

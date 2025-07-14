import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FadeIn = ({ children }) => {
    const el = useRef();

    useEffect(() => {
        gsap.fromTo(el.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    return <div ref={el}>{children}</div>;
};

export default FadeIn;

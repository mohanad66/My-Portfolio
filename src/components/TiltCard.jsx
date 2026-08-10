import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const isMobile = () => window.innerWidth < 768;

const TiltCard = ({ children, className }) => {
    const cardRef = useRef(null);
    const rotateXRef = useRef(null);
    const rotateYRef = useRef(null);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobile());
        if (cardRef.current) {
            gsap.set(cardRef.current, { transformPerspective: 1000 });
            rotateXRef.current = gsap.quickTo(cardRef.current, 'rotationX', { duration: 0.4, ease: 'power2.out' });
            rotateYRef.current = gsap.quickTo(cardRef.current, 'rotationY', { duration: 0.4, ease: 'power2.out' });
        }
    }, []);

    const handleMouseMove = (e) => {
        if (mobile || !cardRef.current || !rotateXRef.current || !rotateYRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        rotateXRef.current((y - 0.5) * -15);
        rotateYRef.current((x - 0.5) * 15);
    };

    const handleMouseLeave = () => {
        if (mobile || !cardRef.current) return;

        gsap.to(cardRef.current, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.35)'
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {children}
        </div>
    );
};

export default TiltCard;

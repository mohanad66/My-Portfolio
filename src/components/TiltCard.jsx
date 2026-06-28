import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const isMobile = () => window.innerWidth < 768;

const TiltCard = ({ children, className }) => {
    const cardRef = useRef(null);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobile());
    }, []);

    const handleMouseMove = (e) => {
        if (mobile || !cardRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateX = (y - 0.5) * -15;
        const rotateY = (x - 0.5) * 15;

        gsap.to(cardRef.current, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        if (mobile) return;

        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)'
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

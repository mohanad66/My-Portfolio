import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useMobile from '../../hooks/useMobile';

const TiltCard = ({ children, className }) => {
    const cardRef = useRef(null);
    const rotateXRef = useRef(null);
    const rotateYRef = useRef(null);
    const leaveTweenRef = useRef(null);
    const mobile = useMobile();

    useEffect(() => {
        if (cardRef.current) {
            gsap.set(cardRef.current, { transformPerspective: 1000 });
            rotateXRef.current = gsap.quickTo(cardRef.current, 'rotationX', { duration: 0.4, ease: 'power2.out' });
            rotateYRef.current = gsap.quickTo(cardRef.current, 'rotationY', { duration: 0.4, ease: 'power2.out' });
        }
    }, []);

    const handleMouseMove = (e) => {
        if (mobile || !cardRef.current || !rotateXRef.current || !rotateYRef.current) return;

        if (leaveTweenRef.current) {
            leaveTweenRef.current.kill();
            leaveTweenRef.current = null;
        }

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        rotateXRef.current((y - 0.5) * -15);
        rotateYRef.current((x - 0.5) * 15);
    };

    const handleMouseLeave = () => {
        if (mobile || !cardRef.current || !rotateXRef.current || !rotateYRef.current) return;

        if (leaveTweenRef.current) {
            leaveTweenRef.current.kill();
        }

        rotateXRef.current(0);
        rotateYRef.current(0);
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

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Typewriter from './Typewriter';

const isMobile = () => window.innerWidth < 768;

export default function Hero() {
    const container = useRef(null);
    const heroTitleRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobile());
        const handleResize = () => setMobile(isMobile());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useGSAP(() => {
        if (mobile) return;

        const targets = [heroTitleRef.current, heroSubtitleRef.current, ctaRef.current];
        if (targets.every(el => el)) {
            gsap.set(targets, { opacity: 0, y: 30 });
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
            tl.fromTo(heroTitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.5 })
                .fromTo(heroSubtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=1')
                .fromTo(ctaRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: 'back.out(1.7)' }, '-=0.8');
        }
    }, { scope: container });

    return (
        <section id="home" ref={container} className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
            <div className="text-center">
                <motion.h1 ref={heroTitleRef} initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-[8rem] font-black tracking-tighter mb-4 leading-tight">MOHANAD MAHMOUD</motion.h1>

                <div ref={heroSubtitleRef} className="text-base sm:text-xl md:text-4xl font-medium text-gray-400 h-10 md:h-12">
                    <span className="opacity-80">I am a </span>
                    <Typewriter texts={["Frontend Developer", "Backend Developer", "Full Stack Developer", "Software Engineer"]} speed={120} wait={2000} />
                </div>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-10 justify-center px-4">
                    <motion.a href="#projects" className="px-6 md:px-8 py-2 md:py-3 border border-emerald-500/50 text-emerald-400 rounded-full hover:bg-emerald-500/10 transition-all text-sm md:text-base">View My Work</motion.a>
                    <motion.a href="/Mohanad-Mahmoud in second year in high school.pdf" download="Mohanad_Mahmoud_CV.pdf" className="px-6 md:px-8 py-2 md:py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Download CV
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

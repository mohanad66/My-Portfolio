import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import useMobile from '../../hooks/useMobile';
import Typewriter from '../ui/Typewriter';

export default function Hero() {
    const container = useRef(null);
    const heroTitleRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const heroDescRef = useRef(null);
    const heroLocationRef = useRef(null);
    const ctaRef = useRef(null);
    const mobile = useMobile();

    useGSAP(() => {
        if (mobile) return;

        const targets = [heroTitleRef.current, heroSubtitleRef.current, heroDescRef.current, heroLocationRef.current, ctaRef.current];
        if (targets.every(el => el)) {
            gsap.set(targets, { opacity: 0, y: 30 });
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
            tl.fromTo(heroTitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.3 })
                .fromTo(heroSubtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
                .fromTo(heroDescRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
                .fromTo(heroLocationRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
                .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'back.out(1.7)' }, '-=0.7');
        }
    }, { scope: container });

    return (
        <section id="home" ref={container} className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 pt-20" aria-label="Hero section">
            <div className="text-center max-w-4xl mx-auto">
                <motion.h1
                    ref={heroTitleRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-[6rem] lg:text-[7.5rem] font-black tracking-tighter mb-4 leading-[0.9]"
                >
                    MOHANAD<br />MAHMOUD
                </motion.h1>

                <motion.p
                    ref={heroSubtitleRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-base sm:text-xl md:text-3xl font-bold text-emerald-400 mb-4 tracking-tight"
                >
                    <Typewriter
                        texts={['Full-Stack Web Developer', 'React & Django Developer', 'Production Web Apps']}
                        speed={80}
                        wait={2500}
                    />
                </motion.p>

                <motion.p
                    ref={heroDescRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-3 leading-relaxed"
                >
                    I build production-ready web applications, customer-facing websites, dashboards, e-commerce systems, and REST APIs using React and Django.
                </motion.p>

                <motion.p
                    ref={heroLocationRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-gray-500 mb-10 tracking-wide"
                >
                    Based in Egypt &middot; Working with businesses, startups, and agencies worldwide.
                </motion.p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <motion.a
                        href="#client-work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all text-sm md:text-base"
                    >
                        View Client Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 border border-emerald-500/50 text-emerald-400 rounded-full hover:bg-emerald-500/10 transition-all text-sm md:text-base"
                    >
                        Start a Project
                    </motion.a>
                    <motion.a
                        href="/Mohanad-Mahmoud in second year in high school.pdf"
                        download="Mohanad_Mahmoud_CV.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 border border-white/10 text-gray-400 rounded-full hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Download CV
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

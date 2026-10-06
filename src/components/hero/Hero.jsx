import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import useMobile from '../../hooks/useMobile';
import Typewriter from '../ui/Typewriter';
import { useLanguage } from '../../lib/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block mb-8 px-5 py-2.5 glass-glow glass-hover rounded-full"
                >
                    <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        {t('hero.available')}
                    </span>
                </motion.div>

                <motion.h1
                    ref={heroTitleRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-[6rem] lg:text-[7.5rem] font-black tracking-tighter mb-4 leading-[0.9]"
                >
                    MOHANAD<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 text-glow">MAHMOUD</span>
                </motion.h1>

                <motion.p
                    ref={heroSubtitleRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-base sm:text-xl md:text-3xl font-bold text-emerald-400 mb-4 tracking-tight"
                >
                    <Typewriter
                        texts={[t('hero.subtitle1'), t('hero.subtitle2'), t('hero.subtitle3')]}
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
                    {t('hero.desc')}
                </motion.p>

                <motion.p
                    ref={heroLocationRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-gray-500 mb-10 tracking-wide"
                >
                    {t('hero.location')}
                </motion.p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center px-4 flex-wrap">
                    <motion.a
                        href="#client-work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all text-sm md:text-base"
                    >
                        {t('hero.viewWork')}
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 glass-glow glass-hover text-emerald-400 rounded-full transition-all text-sm md:text-base"
                    >
                        {t('hero.startProject')}
                    </motion.a>
                    <motion.a
                        href="https://tidycal.com/mohanadmahmoud33245/30-minute-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 glass-glow glass-hover text-emerald-400 rounded-full transition-all text-sm md:text-base"
                    >
                        {t('nav.bookSession')}
                    </motion.a>
                    <motion.a
                        href="/Mohanad-Mahmoud in second year in high school.pdf"
                        download="Mohanad_Mahmoud_CV.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 glass glass-hover text-gray-300 rounded-full transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        {t('hero.downloadCv')}
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

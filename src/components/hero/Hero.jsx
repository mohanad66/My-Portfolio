import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import useMobile from '../../hooks/useMobile';
import { useLanguage } from '../../lib/LanguageContext';

const WHATSAPP_ICON = 'M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.548 4.17 1.589 5.986L.044 23.633l5.753-1.509a11.967 11.967 0 006.234 1.737h.005c6.634 0 12.031-5.396 12.031-12.033C24.067 5.395 18.67 0 12.031 0zm0 21.848h-.004a9.948 9.948 0 01-5.074-1.385l-.364-.216-3.774.99 1.008-3.68-.237-.377A9.957 9.957 0 012.012 12.03C2.012 6.51 6.511 2.01 12.035 2.01c5.522 0 10.021 4.501 10.021 10.022 0 5.522-4.5 10.016-10.025 10.016zm5.498-7.513c-.302-.15-1.787-.882-2.064-.984-.277-.101-.478-.15-.68.151-.201.301-.779.983-.955 1.185-.176.201-.352.226-.654.075-1.28-.616-2.484-1.523-3.284-2.673-.207-.297-.022-.458.129-.609.135-.135.302-.352.453-.528.151-.176.202-.301.302-.502.101-.202.05-.377-.025-.528-.076-.151-.68-1.642-.931-2.25-.245-.595-.494-.514-.68-.523-.175-.008-.376-.01-.577-.01-.2 0-.528.075-.804.377-.276.301-1.055 1.03-1.055 2.512s1.08 2.914 1.231 3.115c.15.201 2.124 3.242 5.143 4.545.719.309 1.279.494 1.717.632.721.229 1.378.197 1.895.12.578-.086 1.787-.73 2.038-1.436.251-.706.251-1.311.176-1.437-.076-.126-.277-.201-.579-.352z';

export default function Hero() {
    const { t } = useLanguage();
    const container = useRef(null);
    const heroTitleRef = useRef(null);
    const heroDescRef = useRef(null);
    const heroLocationRef = useRef(null);
    const ctaRef = useRef(null);
    const mobile = useMobile();

    useGSAP(() => {
        if (mobile) return;

        const targets = [heroTitleRef.current, heroDescRef.current, heroLocationRef.current, ctaRef.current];
        if (targets.every(el => el)) {
            gsap.set(targets, { opacity: 0, y: 30 });
            const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
            tl.fromTo(heroTitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.3 })
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
                    className="inline-block mb-6 px-5 py-2.5 glass-glow glass-hover rounded-full"
                >
                    <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        {t('hero.available')}
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-sm sm:text-base md:text-xl font-black tracking-[0.3em] uppercase text-gray-300 mb-4"
                >
                    MOHANAD<span className="text-emerald-500">.</span>MAHMOUD
                </motion.p>

                <motion.h1
                    ref={heroTitleRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6 max-w-4xl mx-auto"
                >
                    {t('hero.headline1')}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 text-glow">{t('hero.headline2')}</span>
                    {t('hero.headline3')}
                </motion.h1>

                <motion.p
                    ref={heroDescRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
                >
                    {t('hero.offer')}
                </motion.p>

                <motion.p
                    ref={heroLocationRef}
                    initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs sm:text-sm text-gray-500 mb-10 tracking-wide"
                >
                    {t('hero.location')}
                </motion.p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <motion.a
                        href="#client-work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all text-sm md:text-base"
                    >
                        {t('hero.viewWork')}
                    </motion.a>
                    <motion.a
                        href="https://wa.link/mn8hwl"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 bg-[#25D366] text-black font-semibold rounded-full hover:bg-[#1ebe5b] hover:shadow-[0_0_40px_rgba(37,211,102,0.45)] transition-all text-sm md:text-base flex items-center justify-center gap-2"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d={WHATSAPP_ICON} /></svg>
                        {t('whatsapp.chat')}
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
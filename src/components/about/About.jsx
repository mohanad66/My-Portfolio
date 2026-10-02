import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/LanguageContext';

export default function About() {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative z-10 max-w-7xl mx-auto" aria-label="About Mohanad Mahmoud">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-emerald-500/15 blur-[100px] rounded-full" />
                    <div className="absolute -top-4 -left-4 inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[3rem] filter blur-2xl" />
                    <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden border border-emerald-500/15 glass group shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(16,185,129,0.08)] aspect-square">
                        <img src="/myImg.jpg" alt="Mohanad Mahmoud, Full-Stack Web Developer based in Egypt" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 p-4 glass-strong rounded-2xl hidden md:block">
                            <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Mohanad Mahmoud</p>
                            <p className="text-xs text-gray-300">{t('hero.subtitle1')} — React & Django</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">{t('about.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{t('about.me')}</span></h2>
                    <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        <p>
                            {t('about.p1')}
                        </p>
                        <p>
                            {t('about.p2')}
                        </p>
                        <p>
                            {t('about.p3')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { value: '2', key: 'customerProducts' },
                            { value: '6+', key: 'projectsShipped' },
                            { value: '30+', key: 'repositories' },
                        ].map((stat) => (
                            <div key={stat.key} className="glass glass-hover rounded-2xl p-4 md:p-5 text-center">
                                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2 text-glow">{stat.value}</div>
                                <div className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">{t(`about.${stat.key}`)}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

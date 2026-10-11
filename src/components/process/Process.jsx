import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/LanguageContext';

const icons = [
    'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    'M3 17l6-6 4 4 8-8M15 7h6v6',
];

export default function Process() {
    const { t } = useLanguage();
    const steps = t('process.steps');

    return (
        <section id="process" className="py-20 md:py-32 px-4 md:px-6 relative z-10 max-w-7xl mx-auto" aria-label="How I work">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
            >
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase">{t('process.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{t('process.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{t('process.highlight')}</span></h2>
                <p className="text-gray-500 max-w-lg mx-auto text-xs md:text-sm mt-4">{t('process.subtitle')}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {(Array.isArray(steps) ? steps : []).map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="relative glass glass-hover rounded-3xl p-6 md:p-7 h-full text-center">
                            <div className="relative z-10">
                                <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
                                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[i % icons.length]} />
                                    </svg>
                                </div>
                                <span className="block text-[10px] font-black text-emerald-400/60 tracking-widest mb-2">0{i + 1}</span>
                                <h3 className="text-base md:text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
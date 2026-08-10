import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Skills({ skillData }) {
    const [active, setActive] = useState('All');
    const mobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    const categories = useMemo(
        () => ['All', ...new Set(skillData.map((s) => s.category))],
        [skillData]
    );

    const counts = useMemo(() => {
        const c = {};
        skillData.forEach((s) => {
            c[s.category] = (c[s.category] || 0) + 1;
        });
        return c;
    }, [skillData]);

    const filtered = useMemo(
        () => (active === 'All' ? skillData : skillData.filter((s) => s.category === active)),
        [skillData, active]
    );

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
            {!mobile && (
                <>
                    <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-12">
                    <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase">Tech Stack & Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technologies</span></h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">Building modern, scalable web applications with cutting-edge technologies</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActive(category)}
                            aria-pressed={active === category}
                            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full border text-xs md:text-sm font-medium transition-colors duration-200 ${
                                active === category
                                    ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {category}
                            <span className={`ml-2 font-bold ${active === category ? 'text-emerald-300' : 'text-emerald-400'}`}>
                                {category === 'All' ? skillData.length : counts[category] || 0}
                            </span>
                        </button>
                    ))}
                </motion.div>

                <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, transition: { type: 'tween', duration: 0.2, ease: 'easeOut' } }}
                                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                                transition={{
                                    layout: { type: 'tween', duration: 0.3, ease: 'easeOut' },
                                    default: { type: 'tween', duration: 0.35, ease: 'easeOut', delay: Math.min(i * 0.02, 0.2) },
                                }}
                                className="relative aspect-square rounded-2xl md:rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-2xl md:rounded-bl-3xl" />
                                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-6 gap-2 md:gap-4">
                                    <div className="relative">
                                        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center" style={{ boxShadow: `0 0 16px ${skill.color}66` }} aria-hidden>
                                            <img src={skill.icon} alt={skill.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" style={{ filter: 'brightness(1.4) saturate(1.4)' }} loading="lazy" decoding="async" />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-white font-bold text-xs md:text-sm tracking-wide">{skill.name}</h3>
                                        <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider mt-1 block">{skill.category}</span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                                        <motion.div className="h-full" style={{ backgroundColor: skill.color, filter: 'brightness(1.5)' }} initial={{ width: '0%' }} whileInView={{ width: '100%' }} viewport={{ once: true, amount: 0.5 }} transition={{ type: 'tween', duration: 1.1, ease: 'easeOut' }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

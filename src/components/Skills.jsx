import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ skillData }) {
    const mobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
            {!mobile && (
                <>
                    <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-[120px]" />
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-20">
                    <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase">Tech Stack & Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6">Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technologies</span></h2>
                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-4">Building modern, scalable web applications with cutting-edge technologies</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    {skillData.map((skill, i) => (
                        <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03, duration: 0.4, type: 'spring' }} className="relative aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                            <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-2xl md:rounded-bl-3xl" />
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 md:p-6 gap-2 md:gap-4">
                                <div className="relative">
                                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center" aria-hidden>
                                        <img src={skill.icon} alt={skill.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" style={{ filter: `drop-shadow(0 0 6px ${skill.color}55)` }} loading="lazy" />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-white font-bold text-xs md:text-sm tracking-wide">{skill.name}</h3>
                                    <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider mt-1 block">{skill.category}</span>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                                    <motion.div className="h-full" style={{ backgroundColor: skill.color }} initial={{ width: '0%' }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: i * 0.05 }} viewport={{ once: true }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-12 md:mt-16 flex flex-wrap justify-center gap-3 md:gap-4">
                    {['Frontend', 'Backend', 'Styling', 'Animation', 'Tools'].map((category) => (
                        <div key={category} className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="text-gray-300 text-xs md:text-sm font-medium">{category}</span>
                            <span className="ml-2 text-emerald-400 text-xs font-bold">{skillData.filter(s => s.category === category).length}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

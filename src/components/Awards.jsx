import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function Awards({ awards }) {
    const mobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    return (
        <section id="awards" className="py-20 md:py-32 px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-6xl font-bold mb-12 md:mb-20 text-center tracking-tighter">RECOGNITION</motion.h2>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {awards.map((award, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }}>
                            <TiltCard className="relative p-[1px] rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-transparent">
                                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-10 rounded-[calc(1rem-1px)] md:rounded-[1.9rem] h-full border border-white/5">
                                    <div className="text-4xl md:text-6xl mb-6 md:mb-8 mb-6 md:mb-8" style={{ transform: mobile ? 'none' : 'translateZ(40px)' }}>{award.icon}</div>

                                    <div style={{ transform: mobile ? 'none' : 'translateZ(30px)' }}>
                                        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">{award.title}</h3>
                                        <p className="text-lg md:text-xl text-white font-medium mb-1">{award.event}</p>
                                        <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8">{award.organization}</p>

                                        <span className="px-4 md:px-5 py-1 md:py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] md:text-xs font-black tracking-widest uppercase">{award.year}</span>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

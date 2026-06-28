import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function Projects({ projects }) {
    return (
        <section id="projects" className="py-20 md:py-40 px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
                <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-4xl md:text-7xl font-bold tracking-tighter">SELECTED <br /> <span className="text-emerald-500">WORKS</span></motion.h2>
                <p className="text-gray-500 max-w-xs text-xs md:text-sm italic">Each project is a unique blend of technical challenge and visual storytelling.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((p, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8 }}>
                        <TiltCard className="relative p-[1px] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#080808] p-6 md:p-10 rounded-[calc(1.5rem-1px)] md:rounded-[2.4rem] min-h-[450px] md:min-h-[550px] flex flex-col justify-between overflow-hidden relative">
                                <div className="relative z-20">
                                    <div className="flex justify-between items-start mb-4 md:mb-6">
                                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Project 0{i + 1}</div>
                                        <div className="text-xs text-gray-600">{p.period}</div>
                                    </div>

                                    <div className="w-full h-40 md:h-48 mb-4 overflow-hidden rounded-xl md:rounded-2xl">
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold mb-3">{p.title}</h3>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-3">{p.description}</p>
                                </div>

                                <div className={`absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-40`} />

                                <div className="relative z-20">
                                    <div className="flex gap-2 flex-wrap mb-4">{p.tech.map(t => <span key={t} className="text-[9px] px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">{t}</span>)}</div>

                                    <div className="flex gap-3">
                                        {p.github_link && (
                                            <a href={p.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-emerald-400 transition-colors">GitHub</a>
                                        )}
                                        {p.websiteUrl && (
                                            <a href={p.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-emerald-400 transition-colors">Live Demo</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';
import TiltCard from '../ui/TiltCard';
import Carousel from '../ui/Carousel';
import personalProjects from '../../data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-40 px-4 md:px-6 relative z-10 max-w-7xl mx-auto" aria-label="Selected projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter"
                >
                    SELECTED <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">PROJECTS</span>
                </motion.h2>
                <p className="text-gray-500 max-w-xs text-xs md:text-sm italic">
                    Technical and personal projects that demonstrate full-stack capabilities and deep learning.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {personalProjects.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                    >
                        <TiltCard className="group relative p-[1px] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent h-full">
                            <div className="bg-[#080808] p-6 md:p-8 rounded-[calc(1.5rem-1px)] md:rounded-[2.4rem] min-h-[520px] md:min-h-[600px] flex flex-col justify-between overflow-hidden relative">
                                <div className="relative z-20">
                                    <div className="flex justify-between items-start mb-3 md:mb-4">
                                        <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">{p.category}</div>
                                        <div className="text-xs text-gray-600">{p.period}</div>
                                    </div>

                                    <Carousel images={p.images} className="mb-4" />

                                    <h3 className="text-lg md:text-xl font-bold mb-2">{p.title}</h3>

                                    <div className="mb-3">
                                        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Purpose</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{p.purpose}</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">What I Built</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{p.whatIBuilt}</p>
                                    </div>

                                    <div className="mb-3">
                                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Role: </span>
                                        <span className="text-[10px] text-gray-500 font-medium">{p.role}</span>
                                    </div>
                                </div>

                                <div className={`absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                                <div className="relative z-20">
                                    <div className="mb-3">
                                        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1.5">Technical Lesson</h4>
                                        <p className="text-gray-500 text-[11px] leading-relaxed italic">{p.lesson}</p>
                                    </div>

                                    <div className="flex gap-2 flex-wrap mb-4">
                                        {p.tech.map((t) => (
                                            <span key={t} className="text-[9px] px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">{t}</span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        {p.github_link && (
                                            <a href={p.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-400 hover:text-emerald-400 transition-colors">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                GitHub
                                            </a>
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

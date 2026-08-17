import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars -- motion and AnimatePresence are used as JSX member expressions
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from '../ui/TiltCard';
import Carousel from '../ui/Carousel';
import clientProjects from '../../data/clientWork';

function CaseStudyModal({ project, onClose }) {
    if (!project) return null;
    const cs = project.caseStudy;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${project.badgeColor === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'}`}>
                            {project.badge}
                        </span>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-2" aria-label="Close case study">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className="space-y-5">
                    {[
                        ['Client', cs.client],
                        ['My Role', cs.role],
                        ['The Challenge', cs.challenge],
                        ['What I Delivered', cs.delivered],
                        ['Technical Stack', cs.stack],
                        ['Live Result', cs.result],
                        ['Next Improvement', cs.next],
                    ].map(([label, value]) => (
                        <div key={label}>
                            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">{label}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all text-sm">
                        {project.linkLabel}
                    </a>
                        <button onClick={onClose} className="px-5 py-2.5 border border-white/10 text-gray-400 rounded-full hover:bg-white/5 hover:text-white transition-all text-sm" aria-label="Close case study modal">
                            Close
                        </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ClientWork() {
    const [activeCaseStudy, setActiveCaseStudy] = useState(null);

    return (
        <section id="client-work" className="py-20 md:py-32 px-4 md:px-6 relative z-10 max-w-7xl mx-auto" aria-label="Client work and production projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-20"
            >
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase">Production Experience</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">WORK</span></h2>
                <p className="text-gray-500 max-w-lg mx-auto text-xs md:text-sm mt-4">Delivered production web products for real customers and businesses.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {clientProjects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8 }}
                    >
                        <TiltCard className="group relative p-[1px] rounded-3xl md:rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent h-full">
                            <div className="bg-[#080808] p-6 md:p-10 rounded-[calc(1.5rem-1px)] md:rounded-[2.4rem] flex flex-col justify-between h-full relative overflow-hidden">
                                <div className="relative z-20">
                                    <div className="flex justify-between items-start mb-4 md:mb-6">
                                        <div>
                                            <span className={`inline-block px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full border mb-3 ${project.badgeColor === 'emerald' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'}`}>
                                                {project.badge}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mb-3 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                                        <span>{project.role}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                                        <span>{project.type}</span>
                                    </div>

                                    <Carousel images={project.images} className="mb-5" />

                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5">{project.description}</p>
                                </div>

                                <div className={`absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-gradient-to-br ${project.color} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                                <div className="relative z-20">
                                    <div className="flex gap-2 flex-wrap mb-5">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">{t}</span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-all text-xs">
                                            {project.linkLabel}
                                        </a>
                                        <button
                                            onClick={() => setActiveCaseStudy(project)}
                                            className="px-5 py-2.5 border border-white/10 text-gray-400 rounded-full hover:bg-white/5 hover:text-white transition-all text-xs"
                                        >
                                            Case Study
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {activeCaseStudy && (
                    <CaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

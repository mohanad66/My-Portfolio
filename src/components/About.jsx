import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
                    <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden border border-white/10 aspect-square">
                        <img src="/bedouin.PNG" alt="Mohanad Mahmoud" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">ABOUT <span className="text-emerald-500">ME</span></h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        I'm a passionate Full-Stack Developer from Egypt, working worldwide. I specialize in building scalable web applications with React & Django, creating elegant responsive experiences with robust server-side logic.
                        I'm constantly learning and pushing the boundaries of what's possible on the web.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">30+</div>
                            <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest">Repositories</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">220+</div>
                            <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest">Contributions</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-black text-white mb-2">3+</div>
                            <div className="text-xs text-emerald-500 font-bold uppercase tracking-widest">Years Exp</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

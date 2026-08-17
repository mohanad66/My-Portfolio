import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';

export default function About() {
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
                    <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
                    <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden border border-white/10 aspect-square group">
                        <img src="/bedouin.PNG" alt="Mohanad Mahmoud, Full-Stack Web Developer based in Egypt" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">ME</span></h2>
                    <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        <p>
                            I&apos;m Mohanad Mahmoud, a Full-Stack Web Developer based in Egypt. I build production web applications and customer-facing digital products with React, Django, REST APIs, and databases.
                        </p>
                        <p>
                            My experience includes delivering a complete live customer product and building the frontend for a live tourism platform. I also create technical projects such as an index-based search engine to deepen my understanding of APIs, databases, indexing, ranking, and web application architecture.
                        </p>
                        <p>
                            I care about clear user flows, maintainable code, responsive interfaces, reliable backend logic, and delivering software that people can actually use.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { value: '2', label: 'Customer Products' },
                            { value: '6+', label: 'Projects Shipped' },
                            { value: '30+', label: 'Repositories' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-3xl md:text-4xl font-black text-emerald-400 mb-2">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

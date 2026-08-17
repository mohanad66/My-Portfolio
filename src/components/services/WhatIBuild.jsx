import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Production Web Applications',
        description: 'React frontends, Django backends, REST APIs, authentication, databases, and deployment.',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        gradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
        title: 'E-commerce Systems',
        description: 'Product catalogs, carts, checkout flows, order management, admin functionality, and integrations.',
        icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
        gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
        title: 'Dashboards & Internal Tools',
        description: 'Operational dashboards, data views, admin workflows, task management, and business automation.',
        icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
        gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        title: 'Frontend Implementation',
        description: 'Responsive React interfaces, Arabic/RTL layouts, API integration, reusable components, and production UI.',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        gradient: 'from-amber-500/20 to-yellow-500/20',
    },
];

export default function WhatIBuild() {
    return (
        <section id="what-i-build" className="py-20 md:py-32 px-4 md:px-6 relative z-10 max-w-7xl mx-auto" aria-label="Services offered">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
            >
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase">Services</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">WHAT I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">BUILD</span></h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="relative group"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                        <div className="relative bg-[#080808] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300 h-full">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

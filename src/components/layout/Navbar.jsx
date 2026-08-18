import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

const navItems = ['Home', 'About', 'Client Work', 'Projects', 'Skills', 'Awards', 'Contact'];

const navIdMap = {
    'Home': 'home',
    'About': 'about',
    'Client Work': 'client-work',
    'Projects': 'projects',
    'Skills': 'skills',
    'Awards': 'awards',
    'Contact': 'contact',
};

export default function Navbar() {
    const [hovered, setHovered] = useState(null);
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress, scrollY } = useScroll();

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navBg = useTransform(scrollY, [0, 100], ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.95)']);
    const navPadding = useTransform(scrollY, [0, 100], ['20px', '12px']);

    return (
        <motion.nav
            role="navigation"
            aria-label="Main navigation"
            initial="visible"
            animate={hidden ? 'hidden' : 'visible'}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -80, opacity: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: navBg, paddingTop: navPadding, paddingBottom: navPadding }}
            className="fixed top-0 left-0 w-full z-[999] px-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-white/5"
        >
            <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 origin-left" style={{ scaleX }} />

            <a href="#home" className="text-xl md:text-2xl font-black tracking-tighter text-white" aria-label="Mohanad Mahmoud - Go to top">
                MM<span className="text-emerald-500">.</span>
            </a>

            <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${navIdMap[item]}`}
                        onMouseEnter={() => setHovered(item)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative hover:text-white transition-colors"
                    >
                        {item}
                        {hovered === item && (
                            <motion.div layoutId="nav-glow" className="absolute -bottom-2 left-0 w-full h-[1px] bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        )}
                    </a>
                ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            <div className="hidden md:flex items-center gap-4">
                <a href="https://github.com/mohanad66" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/mohanad-mahmoud-fathi-mohammed-6086b1254/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61593244390278" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 bg-emerald-600 text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-colors">
                    Start a Project
                </motion.a>
            </div>

            {mobileMenuOpen && (
                <motion.div id="mobile-menu" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden" role="menu">
                    <div className="flex flex-col p-6 gap-4">
                        {navItems.map((item) => (
                            <a key={item} href={`#${navIdMap[item]}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors py-2 text-sm font-semibold uppercase tracking-wider">
                                {item}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-6 py-3 bg-emerald-600 text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-colors text-center">
                            Start a Project
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

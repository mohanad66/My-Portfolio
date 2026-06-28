import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
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
            initial="visible"
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: navBg, paddingTop: navPadding, paddingBottom: navPadding }}
            className="fixed top-0 left-0 w-full z-[999] px-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-white/5"
        >
            <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left" style={{ scaleX }} />

            <div className="text-xl md:text-2xl font-black tracking-tighter text-white">
                MM<span className="text-emerald-500">.</span>
            </div>

            <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                {['Home', 'Projects', 'Skills', 'Awards', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} onMouseEnter={() => setHovered(item)} onMouseLeave={() => setHovered(null)} className="relative hover:text-white transition-colors">
                        {item}
                        {hovered === item && (
                            <motion.div layoutId="nav-glow" className="absolute -bottom-2 left-0 w-full h-[1px] bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        )}
                    </a>
                ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block px-6 py-2 bg-emerald-600 text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-colors">
                Hire Me
            </motion.a>

            {mobileMenuOpen && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden">
                    <div className="flex flex-col p-6 gap-4">
                        {['Home', 'Projects', 'Skills', 'Awards', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors py-2 text-sm font-semibold uppercase tracking-wider">
                                {item}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-6 py-3 bg-emerald-600 text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-colors text-center">
                            Hire Me
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;

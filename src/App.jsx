import React from 'react';
import Navbar from './components/layout/Navbar';
import ParticlesBackground from './components/layout/ParticlesBackground';
import Hero from './components/hero/Hero';
import CredibilityStrip from './components/about/CredibilityStrip';
import About from './components/about/About';
import WhatIBuild from './components/services/WhatIBuild';
import ClientWork from './components/projects/ClientWork';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import GitHubStats from './components/github/GitHubStats';
import Awards from './components/awards/Awards';
import Contact from './components/contact/Contact';

export default function Portfolio() {
    return (
        <>
            <Navbar />
            <ParticlesBackground />
            <div className="relative min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
                <div className="fixed top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 blur-[120px] rounded-full z-0 pointer-events-none" aria-hidden="true" />

                <main>
                    <Hero />
                    <CredibilityStrip />
                    <About />
                    <WhatIBuild />
                    <ClientWork />
                    <Projects />
                    <Skills />
                    <GitHubStats />
                    <Awards />
                    <Contact />
                </main>

                <footer className="py-8 md:py-12 border-t border-white/5 text-center text-gray-600 text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase px-4" role="contentinfo">
                    © 2026 All Rights Reserved. Built with React & 3D WebGL Logic.
                </footer>
            </div>
        </>
    );
}

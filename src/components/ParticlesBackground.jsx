import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const isMobile = () => window.innerWidth < 768;

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobile());
        if (!isMobile()) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => setInit(true));
        }
    }, []);

    const options = useMemo(() => ({
        fullScreen: { enable: false },
        interactivity: {
            events: { onHover: { enable: !mobile, mode: 'grab' } },
            modes: { grab: { distance: 200, links: { opacity: 0.5, color: '#10b981' } } }
        },
        particles: {
            color: { value: '#ffffff' },
            links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.05, width: 1 },
            move: { enable: true, speed: 0.5 },
            number: { value: mobile ? 40 : 80, density: { enable: true, area: 800 } },
            opacity: { value: { min: 0.1, max: 0.3 } },
            size: { value: { min: 1, max: 2 } }
        }
    }), [mobile]);

    return (init && !mobile) ? <Particles id="tsparticles" className="absolute inset-0 z-0" options={options} /> : null;
}

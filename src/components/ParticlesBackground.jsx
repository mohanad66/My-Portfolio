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
        autoPlay: true,
        pauseOnBlur: true,
        particles: {
            color: { value: '#ffffff' },
            move: { enable: true, speed: 0.4 },
            number: { value: mobile ? 25 : 45, density: { enable: true, area: 900 } },
            opacity: { value: { min: 0.08, max: 0.25 } },
            size: { value: { min: 1, max: 2 } }
        }
    }), [mobile]);

    return (init && !mobile) ? <Particles id="tsparticles" className="absolute inset-0 z-0" options={options} /> : null;
}

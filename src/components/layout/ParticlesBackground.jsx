import React, { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import useMobile from '../../hooks/useMobile';
import getParticlesOptions from '../../utils/particlesConfig';

export default function ParticlesBackground() {
    const [init, setInit] = React.useState(false);
    const mobile = useMobile();

    useEffect(() => {
        if (window.innerWidth >= 768) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => setInit(true));
        }
    }, []);

    const options = useMemo(() => getParticlesOptions(mobile), [mobile]);

    return (init && !mobile) ? <Particles id="tsparticles" className="absolute inset-0 z-0" options={options} /> : null;
}

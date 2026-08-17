const getParticlesOptions = (mobile) => ({
    fullScreen: { enable: false },
    autoPlay: true,
    pauseOnBlur: true,
    particles: {
        color: { value: '#ffffff' },
        move: { enable: true, speed: 0.4 },
        number: { value: mobile ? 25 : 45, density: { enable: true, area: 900 } },
        opacity: { value: { min: 0.08, max: 0.25 } },
        size: { value: { min: 1, max: 2 } },
    },
});

export default getParticlesOptions;

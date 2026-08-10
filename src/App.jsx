import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import Awards from './components/Awards';
import Contact from './components/Contact';

const isMobile = () => typeof window !== 'undefined' ? window.innerWidth < 768 : false;

export default function Portfolio() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
    const onResize = () => setMobile(isMobile());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: mobile ? 600 : 1000, once: true, easing: 'ease-out-expo', disable: mobile ? 'mobile' : false });
  }, [mobile]);

  const projects = [
    { title: 'Full Market Store', category: 'E-Commerce', description: 'Full-stack platform with Django and React.', tech: ['React.js', 'Django', 'Resful API', 'SQLite', 'React Router', 'SCSS', 'Axios'], color: 'from-emerald-500 to-teal-500', period: '2025', img: "/Bright-1.PNG", github_link: "https://github.com/mohanad66/Dream-Project", websiteUrl: "" },
    { title: 'Award-Winning Store', category: 'Frontend', description: 'Competition-winning UI with modern animations.', tech: ['React', 'SCSS', 'Framer Motion'], color: 'from-purple-500 to-pink-500', period: '2025', img: "/Capture.PNG", github_link: "https://github.com/mohanad66/Project-for-sohag-team" },
    { title: 'Bedouin Trails', category: 'Tourism Website', description: 'Tourism Frontend for the user Part Using React and SEO enhancing .', tech: ['React.js', 'SCSS', 'React Router', 'Lucide', 'Axios'], color: ' from-blue-500 to-cyan-500 ', period: '2026', img: "/bedouin.PNG", github_link: "", websiteUrl: "https://bedouintrails.com" },
    { title: 'Digital Citizenship', category: 'Education', description: 'Interactive site for digital literacy.', tech: ['HTML', 'CSS', 'JS', " Bootstrap"], color: 'from-purple-700 to-pink-300', period: '2024', img: "Capture13.PNG", github_link: "https://github.com/mohanad66/DigitalCitienzship" },
    { title: 'Demo Portfolio', category: 'Portfolio', description: 'A Porftolio Template I made to Imagine my Porfolio .', tech: ['React js', 'CSS', " Bootstrap"], color: 'from-green-500 to-emerald-500', period: '2024', img: "Capture3.png", github_link: "https://github.com/mohanad66/Learn-3" },
    { title: 'Horse Mining Market', category: 'Full-Stack Crypto Platform', description: 'A production-ready crypto mining & investment platform with user dashboard, referral system, deposit/withdraw flows, admin panel, and full Arabic/English RTL support.', tech: ['React', 'Django', 'REST API', 'PostgreSQL', 'JWT', 'i18next', 'Tailwind', 'Docker'], color: 'from-amber-500 to-yellow-500', period: '2025', img: "/HorseMining_Website.PNG", websiteUrl: "" },
    { title: 'Fake Market Store Django', category: 'Backend/Full-Stack', description: 'A fully functional e-commerce platform built with Django .', tech: ['Django', 'Python', 'Stripe', 'HTML/CSS', 'PostgreSQL'], color: 'from-blue-600 to-indigo-600', period: '2025' ,img: "/1.PNG", github_link: "https://github.com/mohanad66/Fake-Market-Store-Django" },
    { title: 'StarBinance', category: 'Full-Stack Crypto Platform', description: 'A production-ready crypto mining & investment platform with user dashboard, referral system, deposit/withdraw flows, admin panel, and full Arabic/English RTL support.', tech: ['React', 'Django', 'REST API', 'PostgreSQL', 'JWT', 'i18next', 'Tailwind', 'Docker'], color: 'from-amber-500 to-yellow-500', period: '2025', img: "/starbinance.png", websiteUrl: "https://starbinan.com/" },
  ];

  const skillData = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26', category: 'Frontend' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6', category: 'Frontend' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', category: 'Programming' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'Frontend' },
    { name: 'Axios', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg', color: '#5A29E4', category: 'Frontend' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', category: 'Styling' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3', category: 'Styling' },
    { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', color: '#CC6699', category: 'Styling' },
    { name: 'Framer', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framer.svg', color: '#0055FF', category: 'Animation' },
    { name: 'GSAP', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/greensock.svg', color: '#88CE02', category: 'Animation' },
    { name: 'Flickity', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/javascript.svg', color: '#E9530F', category: 'Animation' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#21B573', category: 'Backend' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'Programming' },
    { name: 'REST API', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fastapi.svg', color: '#009688', category: 'Backend' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: '#007ACC', category: 'Tools' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', category: 'Tools' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', color: '#31A8FF', category: 'Design' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C', category: 'Programming' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', category: 'Backend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'Backend' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'Tools' },
    { name: 'WebSocket', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mqtt.svg', color: '#660066', category: 'Backend' },
    { name: 'JWT', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/jwt.svg', color: '#00B9F1', category: 'Backend' },
    { name: 'i18n / RTL', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/weblate.svg', color: '#144CC3', category: 'Frontend' },
    { name: 'Telegram', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/telegram.svg', color: '#26A5E4', category: 'Tools' },
    { name: 'WhatsApp', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/whatsapp.svg', color: '#25D366', category: 'Tools' },
    { name: 'Google Play', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/google-play.svg', color: '#4285F4', category: 'Tools' },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', color: '#3DDC84', category: 'Tools' },
    { name: 'Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg', color: '#02303A', category: 'Tools' },
    { name: 'Nginx', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/nginx.svg', color: '#009639', category: 'Backend' },
    { name: 'GitHub Actions', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/github-actions.svg', color: '#2088FF', category: 'Tools' },
  ];

  const awards = [
    { title: 'National Finalist', event: 'Future Science Challenge', organization: 'Hamdan Bin Rashid Foundation', year: '2025', icon: '🏆' },
    { title: '3rd Place', event: 'Digital Transformation', organization: 'Sohag Governorate', year: '2024', icon: '🥉' },
  ];

  return (
    <>
      <Navbar />
      <ParticlesBackground />
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
        {!mobile && <div className="fixed top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 blur-[120px] rounded-full z-0 pointer-events-none" />}

        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills skillData={skillData} />
        <GitHubStats />
        <Awards awards={[{ title: 'National Finalist', event: 'Future Science Challenge', organization: 'Hamdan Bin Rashid Foundation', year: '2025', icon: '🏆' }, { title: '3rd Place', event: 'Digital Transformation', organization: 'Sohag Governorate', year: '2024', icon: '🥉' }]} />
        <Contact />

        <footer className="py-8 md:py-12 border-t border-white/5 text-center text-gray-600 text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase px-4">© 2026 All Rights Reserved. Built with React & 3D WebGL Logic.</footer>

        <style>{`
          .ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
          html { scroll-behavior: smooth; }
          body { background: #030303; }
          body, html { overflow-x: hidden; max-width: 100vw; }
          @media (max-width: 768px) { * { -webkit-tap-highlight-color: transparent; } .group { transform: none !important; } }
        `}</style>
      </div>
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, success: false, error: false, message: '' });
    const mobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    useEffect(() => {
        // noop for now; could init AOS here if desired
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });

        try {
            await emailjs.send('service_h3v91ko', 'template_ne2oe4r', {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Mohanad',
                time: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Africa/Cairo' })
            }, '8QQ_y17IlH6z0UwSh');

            setStatus({ loading: false, success: true, error: false, message: '✓ Message sent successfully!' });
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setStatus({ loading: false, success: false, error: false, message: '' }), 5000);
        } catch (error) {
            console.error(error);
            setStatus({ loading: false, success: false, error: true, message: '✗ Failed to send. Please email me directly.' });
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative p-6 md:p-12 rounded-3xl md:rounded-[3rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 overflow-hidden">
                    {!mobile && <div className="absolute -top-24 -right-24 w-48 md:w-64 h-48 md:h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />}

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tighter">LET'S <br />CONNECT</h2>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">Have a project in mind? Let's build something that pushes the boundaries of the modern web.</p>
                            <div className="space-y-2 text-xs md:text-sm font-bold text-emerald-400 tracking-wider md:tracking-widest uppercase break-all mb-8">
                                <p>mohanadmahmoud33245@gmail.com</p>
                                <p>Based in Egypt, Working Worldwide</p>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://github.com/mohanad66" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all text-white">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/%D9%85%D9%87%D9%86%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D9%81%D8%AA%D8%AD%D9%8A-%D9%85%D8%AD%D9%85%D8%AF-6086b1254/ target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all text-white">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                                <a href="https://wa.link/mn8hwl" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all text-white">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.548 4.17 1.589 5.986L.044 23.633l5.753-1.509a11.967 11.967 0 006.234 1.737h.005c6.634 0 12.031-5.396 12.031-12.033C24.067 5.395 18.67 0 12.031 0zm0 21.848h-.004a9.948 9.948 0 01-5.074-1.385l-.364-.216-3.774.99 1.008-3.68-.237-.377A9.957 9.957 0 012.012 12.03C2.012 6.51 6.511 2.01 12.035 2.01c5.522 0 10.021 4.501 10.021 10.022 0 5.522-4.5 10.016-10.025 10.016zm5.498-7.513c-.302-.15-1.787-.882-2.064-.984-.277-.101-.478-.15-.68.151-.201.301-.779.983-.955 1.185-.176.201-.352.226-.654.075-1.28-.616-2.484-1.523-3.284-2.673-.207-.297-.022-.458.129-.609.135-.135.302-.352.453-.528.151-.176.202-.301.302-.502.101-.202.05-.377-.025-.528-.076-.151-.68-1.642-.931-2.25-.245-.595-.494-.514-.68-.523-.175-.008-.376-.01-.577-.01-.2 0-.528.075-.804.377-.276.301-1.055 1.03-1.055 2.512s1.08 2.914 1.231 3.115c.15.201 2.124 3.242 5.143 4.545.719.309 1.279.494 1.717.632.721.229 1.378.197 1.895.12.578-.086 1.787-.73 2.038-1.436.251-.706.251-1.311.176-1.437-.076-.126-.277-.201-.579-.352z"/></svg>
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                            <motion.div whileHover={{ scale: mobile ? 1 : 1.02 }}>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-emerald-500 outline-none transition-all placeholder:text-gray-600 text-sm md:text-base" />
                            </motion.div>

                            <motion.div whileHover={{ scale: mobile ? 1 : 1.02 }}>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-emerald-500 outline-none transition-all placeholder:text-gray-600 text-sm md:text-base" />
                            </motion.div>

                            <motion.div whileHover={{ scale: mobile ? 1 : 1.02 }}>
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows="4" required className="w-full p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-emerald-500 outline-none transition-all placeholder:text-gray-600 resize-none text-sm md:text-base" />
                            </motion.div>

                            {status.message && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`p-3 md:p-4 rounded-xl md:rounded-2xl text-center font-semibold text-sm ${status.success ? 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-400' : 'bg-red-500/10 border border-red-500/50 text-red-400'}`}>
                                    {status.message}
                                </motion.div>
                            )}

                            <motion.button type="submit" disabled={status.loading} whileHover={{ scale: status.loading || mobile ? 1 : 1.05 }} whileTap={{ scale: status.loading || mobile ? 1 : 0.95 }} className="w-full py-4 md:py-5 bg-emerald-600 text-black font-black uppercase tracking-[0.15em] md:tracking-[0.2em] rounded-xl md:rounded-2xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-xs md:text-sm">
                                {status.loading ? (<><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</>) : 'Send Message'}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

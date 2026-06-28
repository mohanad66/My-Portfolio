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
                            <div className="space-y-2 text-xs md:text-sm font-bold text-emerald-400 tracking-wider md:tracking-widest uppercase break-all">
                                <p>mohanadmahmoud33245@gmail.com</p>
                                <p>Based in Egypt, Working Worldwide</p>
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

import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars -- motion and AnimatePresence are used as JSX member expressions
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../lib/LanguageContext';
import { getStoredConsent, setConsent } from '../../lib/consent';

export default function ConsentBanner() {
    const { t } = useLanguage();
    const [visible, setVisible] = useState(() => !getStoredConsent());

    const choose = (status) => {
        setConsent(status);
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 60 }}
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9998] w-[calc(100%-2rem)] max-w-md glass-strong rounded-3xl p-6"
                    role="dialog"
                    aria-live="polite"
                    aria-label={t('consent.title')}
                >
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">{t('consent.message')}</p>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={() => choose('granted')}
                            className="px-5 py-2.5 bg-emerald-500 text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 transition-all flex-1"
                        >
                            {t('consent.accept')}
                        </button>
                        <button
                            type="button"
                            onClick={() => choose('denied')}
                            className="px-5 py-2.5 glass text-gray-300 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all flex-1"
                        >
                            {t('consent.decline')}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
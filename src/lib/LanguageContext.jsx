import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import en from './translations/en';
import ar from './translations/ar';

/* eslint-disable react-refresh/only-export-components -- LanguageContext + useLanguage (context + hook) belong together */

function lookup(dict, key) {
    return key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), dict);
}

const LanguageContext = createContext({ lang: 'en', dir: 'ltr', isRTL: false, toggleLang: () => {}, t: (k) => k, dict: en });

function getInitialLang() {
    try {
        const saved = window.localStorage.getItem('mm_lang');
        if (saved === 'ar' || saved === 'en') return saved;
    } catch (e) { // eslint-disable-line no-unused-vars -- ignore storage errors
        /* ignore */
    }
    return 'en';
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === 'en' ? 'ar' : 'en';
            try {
                window.localStorage.setItem('mm_lang', next);
            } catch (e) { // eslint-disable-line no-unused-vars -- ignore storage errors
                /* ignore */
            }
            return next;
        });
    }, []);

    const value = useMemo(() => {
        const dict = lang === 'ar' ? ar : en;
        return {
            lang,
            dir: lang === 'ar' ? 'rtl' : 'ltr',
            isRTL: lang === 'ar',
            toggleLang,
            t: (key) => {
                const found = lookup(dict, key);
                return found == null ? key : found;
            },
            dict,
        };
    }, [lang, toggleLang]);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    return useContext(LanguageContext);
}

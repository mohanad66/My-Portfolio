export const CONSENT_STORAGE_KEY = 'mm_consent';

export const CONSENT_DENIED = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
};

export const CONSENT_GRANTED = {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
};

export function getStoredConsent() {
    try {
        const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
        return value === 'granted' || value === 'denied' ? value : null;
    } catch (e) { /* eslint-disable-line no-unused-vars -- ignore storage errors */
        return null;
    }
}

export function setConsent(status) {
    const granted = status === 'granted';
    try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, granted ? 'granted' : 'denied');
    } catch (e) { /* eslint-disable-line no-unused-vars -- ignore storage errors */
        /* ignore */
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', granted ? CONSENT_GRANTED : CONSENT_DENIED);
    }
}
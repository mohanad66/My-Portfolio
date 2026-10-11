const MEASUREMENT_ID = import.meta.env.VITE_G4_MEASUREMENT_ID;

export function initAnalytics() {
    if (!MEASUREMENT_ID || typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, { send_page_view: true });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (!link) return;
        const href = link.href || '';
        if (href.includes('wa.link')) {
            trackEvent('whatsapp_click', { link_url: href });
        } else if (href.includes('tidycal.com')) {
            trackEvent('booking_click', { link_url: href });
        }
    });
}

export function trackEvent(name, params = {}) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', name, params);
}
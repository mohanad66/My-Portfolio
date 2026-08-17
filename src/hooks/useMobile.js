import { useSyncExternalStore } from 'react';

const subscribe = (cb) => {
    window.addEventListener('resize', cb);
    return () => window.removeEventListener('resize', cb);
};

const getSnapshot = () => window.innerWidth < 768;
const getServerSnapshot = () => false;

export default function useMobile() {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

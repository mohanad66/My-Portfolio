import { useState, useEffect } from 'react';
import { fetchFromSanity, queries, urlFor } from './sanity';

function processSanityImages(items, hasImages = true) {
    if (!items || !hasImages) return items;
    return items.map((item) => ({
        ...item,
        images: item.images?.map((img) => (img?.asset ? urlFor(img).url() : img)) || [],
    }));
}

export function useSanityData(queryKey, fallbackData) {
    const [data, setData] = useState(fallbackData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const result = await fetchFromSanity(queries[queryKey]);
                if (!cancelled && result && result.length > 0) {
                    const processed = queryKey === 'skills'
                        ? result
                        : processSanityImages(result);
                    setData(processed);
                }
            } catch {
                // fallback data already set
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [queryKey]);

    return { data, loading };
}

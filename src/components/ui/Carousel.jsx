import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.div> JSX member expressions inside Lightbox
import { AnimatePresence, motion } from 'framer-motion';
import useMobile from '../../hooks/useMobile';

function Lightbox({ images, index, onClose, onPrev, onNext }) {
    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                aria-label="Close lightbox"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                    draggable={false}
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white/70 font-medium">
                    {index + 1} / {images.length}
                </div>
            </motion.div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        aria-label="Previous image"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                        aria-label="Next image"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </>
            )}
        </motion.div>,
        document.body
    );
}

export default function Carousel({ images, className = '', autoPlay = true, loop = true }) {
    const mobile = useMobile();
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop, align: 'start' },
        autoPlay ? [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })] : []
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi, onSelect]);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const lightboxPrev = useCallback(() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);
    const lightboxNext = useCallback(() => setLightboxIndex((prev) => (prev + 1) % images.length), [images.length]);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowLeft') lightboxPrev();
            if (e.key === 'ArrowRight') lightboxNext();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxOpen, lightboxPrev, lightboxNext]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div className={`relative ${className}`}>
                <div className="overflow-hidden rounded-xl md:rounded-2xl cursor-pointer" ref={emblaRef}>
                    <div className="flex">
                        {images.map((img, i) => (
                            <div key={i} className="flex-[0_0_100%] min-w-0">
                                <div className="relative w-full h-36 md:h-44 overflow-hidden">
                                    <img
                                        src={img}
                                        alt={`Slide ${i + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                        draggable={false}
                                        onClick={() => openLightbox(i)}
                                    />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100 pointer-events-none">
                                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {images.length > 1 && (
                    <div className="flex items-center justify-center gap-1.5 mt-3">
                        {scrollSnaps.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => scrollTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`transition-all duration-300 rounded-full ${
                                    i === selectedIndex
                                        ? 'w-5 h-1.5 bg-emerald-400'
                                        : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                )}

                {images.length > 1 && !mobile && (
                    <>
                        <button
                            type="button"
                            onClick={() => emblaApi?.scrollPrev()}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Previous slide"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => emblaApi?.scrollNext()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Next slide"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </>
                )}

                {images.length > 1 && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[9px] text-white/60 font-medium">
                        {selectedIndex + 1}/{images.length}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <Lightbox
                        images={images}
                        index={lightboxIndex}
                        onClose={() => setLightboxOpen(false)}
                        onPrev={lightboxPrev}
                        onNext={lightboxNext}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

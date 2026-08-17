import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.span> JSX member expressions
import { motion } from 'framer-motion';

export default function Typewriter({ texts, speed = 100, wait = 2000 }) {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const currentFullText = texts[index % texts.length];

        const handleTyping = () => {
            if (!isDeleting) {
                const nextText = currentFullText.slice(0, displayText.length + 1);
                setDisplayText(nextText);

                if (nextText === currentFullText) {
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        setIsDeleting(true);
                    }, wait);
                }
            } else {
                const nextText = currentFullText.slice(0, displayText.length - 1);
                setDisplayText(nextText);

                if (nextText === '') {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, texts, speed, wait, isPaused]);

    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono font-bold">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[3px] h-6 md:h-8 bg-emerald-500 ml-1 align-middle"
            />
        </span>
    );
}

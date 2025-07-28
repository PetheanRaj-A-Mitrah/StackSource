'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection(data) {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="max-w-[80%] mx-auto py-12 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--theme-text)]">
                {data.title}
            </h2>
            <div className="space-y-4">
                {data.faq_questions.map((item, index) => {
                    const isOpen = activeIndex === index;
                    const answerMarkdown = item.answer
                        .map((block) =>
                            block.children.map((child) => child.text).join('')
                        )
                        .join('\n\n');

                    return (
                        <div
                            key={item.id}
                            className="border-b border-[var(--theme-border)] pb-4"
                        >
                            <button
                                className="flex justify-between items-center w-full text-left font-medium text-lg text-[var(--theme-text)]"
                                onClick={() => toggle(index)}
                            >
                                <span>{item.questions}</span>
                                <span className="text-[var(--theme-primary)]">
                                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: 'auto' },
                                            collapsed: { opacity: 0, height: 0 },
                                        }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden mt-3 text-sm leading-relaxed text-[var(--theme-text)]"
                                    >
                                        <ReactMarkdown>{answerMarkdown}</ReactMarkdown>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

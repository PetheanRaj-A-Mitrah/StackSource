
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const BestPracticesSection = (data) => {
    const [openSections, setOpenSections] = useState(
        data.sections.map((_, idx) => idx === 0)
    );

    const toggleSection = (idx) => {
        setOpenSections((prev) =>
            prev.map((open, i) => (i === idx ? !open : open))
        );
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.main_title}</h1>
            <p className="text-lg text-gray-700 mb-10">{data.intro}</p>

            {data.sections.map((section, idx) => (
                <div
                    key={section.id}
                    className={`mb-8 ${openSections[idx] ? '' : 'border-b border-gray-200'}`}
                >
                    <button
                        className="flex items-center w-full text-left py-4 focus:outline-none"
                        onClick={() => toggleSection(idx)}
                        aria-expanded={openSections[idx]}
                        aria-controls={`section-content-${section.id}`}
                    >
                        <span className="text-xl font-semibold text-theme-primary flex-1">{section.title}</span>
                        <span className="ml-2 text-2xl text-theme-primary">
                            {openSections[idx] ? '−' : '+'}
                        </span>
                    </button>
                    <AnimatePresence initial={false}>
                        {openSections[idx] && (
                            <motion.div
                                id={`section-content-${section.id}`}
                                key={`section-content-${section.id}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                                aria-hidden={!openSections[idx]}
                            >
                                <hr className="border-t-2 border-gray-200 mb-4" />
                                <p className="text-gray-700 mb-6">{section.description}</p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {section.items.map((item) => (
                                        <div key={item.id}>
                                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-700 mt-1">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </section>
    );
};

export default BestPracticesSection;

'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const OutsourcingInfo = ({ title, outsourcing_content = [] }) => {
    const navItems = outsourcing_content.map(section => ({ id: section.id, label: section.heading }));
    const [activeId, setActiveId] = useState(navItems[0]?.id);
    const activeSection = outsourcing_content.find((s) => s.id === activeId);

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-9 leading-tight">{title}</h1>

            <div className="flex flex-col md:flex-row gap-10">
                <nav className="md:min-w-[260px] border-r border-gray-400 md:pr-6">
                    <ul className="space-y-4">
                        {navItems.map((item, idx) => (
                            <li key={item.id} className={idx < navItems.length - 1 ? 'pb-3 border-b border-gray-400' : ''}>
                                <button
                                    onClick={() => setActiveId(item.id)}
                                    className={`text-left w-full transition-colors duration-200 flex items-center justify-between 
                                        ${activeId === item.id ? 'text-theme-primary font-medium' : 'text-gray-800'}`}
                                >
                                    <span className="text-lg">{item.label}</span>
                                    {activeId === item.id && (
                                        <span className="text-theme-primary text-xl ml-2">&rarr;</span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                        {activeSection && (
                            <motion.div
                                key={activeSection.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-2xl font-semibold mb-4">{activeSection.heading}</h2>
                                <div className="prose prose-lg max-w-none text-gray-800">
                                    <ReactMarkdown
                                        components={{
                                            p: ({ node, ...props }) => (
                                                <p className="mb-4" {...props} />
                                            ),
                                            ul: ({ node, ...props }) => (
                                                <ul className="list-disc pl-6 mb-4" {...props} />
                                            ),
                                            ol: ({ node, ...props }) => (
                                                <ol className="list-decimal pl-6 mb-4" {...props} />
                                            ),
                                            li: ({ node, ...props }) => (
                                                <li className="mb-1" {...props} />
                                            ),
                                        }}
                                    >
                                        {activeSection.paragraph
                                            .map(p =>
                                                p.children
                                                    ? p.children
                                                        .map(child =>
                                                            child.bold
                                                                ? `**${child.text}**`
                                                                : child.text
                                                        )
                                                        .join("")
                                                    : ""
                                            )
                                            .join("\n\n")}
                                    </ReactMarkdown>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default OutsourcingInfo;

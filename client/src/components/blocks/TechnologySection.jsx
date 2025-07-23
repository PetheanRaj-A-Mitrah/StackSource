"use client";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StrapiImage } from "../StrapiImage";

const getCategories = (items) => {
    const cats = items.map((item) => item.category).filter(Boolean);
    return ["All", ...Array.from(new Set(cats.filter((c) => c && c !== "All")))];
};

export default function TechnologySection({ title, description, items = [] }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const categories = useMemo(() => getCategories(items), [items]);

    const filtered = useMemo(() => {
        return items.filter((item) => {
            const matchesCategory = category === "All" || item.category === category;
            const matchesSearch =
                !search || item.name.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [items, search, category]);

    return (
        <section className="technology-section max-w-[80%] mx-auto py-12">
            <div className="text-center mb-8">
                {title && <h2 className="text-6xl font-bold mb-2">{title}</h2>}
                {description && (
                    <p className="text-4xl font-bold text-gray-600 whitespace-pre-line">{description}</p>
                )}
            </div>
            <div className="flex flex-col items-center mb-6">
                <input
                    type="text"
                    placeholder="Search technology name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border rounded mb-8 focus:outline-none focus:ring"
                />
                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-1 rounded-full border ${category === cat
                                ? "bg-blue-100 border-blue-400 text-blue-600 font-semibold"
                                : "bg-gray-100 border-gray-300 text-gray-700"
                                } transition`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 w-full">
                {category === "All" ? (
                    (() => {
                        const grouped = {};
                        filtered.forEach((item) => {
                            const letter = item.name[0]?.toUpperCase() || "#";
                            if (!grouped[letter]) grouped[letter] = [];
                            grouped[letter].push(item);
                        });
                        const letters = Object.keys(grouped).sort();
                        return (
                            <>
                                {letters.map((letter) => (
                                    <div key={letter} className="col-span-full w-full">
                                        <div className="text-2xl font-bold mb-4 mt-8 border-b border-gray-200 pb-2 pl-2">{letter}</div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                            <AnimatePresence>
                                                <motion.div
                                                    key={letter + '-group'}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="contents"
                                                >
                                                    {grouped[letter]
                                                        .sort((a, b) => a.name.localeCompare(b.name))
                                                        .map((item, idx) => (
                                                            <motion.a
                                                                key={item.id}
                                                                href={item.link}
                                                                className="group flex flex-col items-center p-0 bg-transparent rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition"
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -20 }}
                                                                transition={{ duration: 0.3, delay: idx * 0.06 }}
                                                                layout
                                                            >
                                                                <div className="flex flex-col items-center justify-center bg-white rounded-t-xl w-full pt-8 pb-6 px-6">
                                                                    {item.logo?.url && (
                                                                        <StrapiImage
                                                                            src={item.logo.url}
                                                                            className="h-12 mb-3 object-contain"
                                                                            width={148}
                                                                            height={48}
                                                                            alt={item.logo.alternativeText || item.name}
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div className="bg-gray-400 group-hover:bg-black transition rounded-b-xl w-full py-3 flex items-center justify-center">
                                                                    <span className="font-semibold text-white text-base text-center">{item.name}</span>
                                                                </div>
                                                            </motion.a>
                                                        ))}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                                <AnimatePresence>
                                    {filtered.length === 0 && (
                                        <motion.div className="col-span-full text-center text-gray-400 py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            No technologies found.
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        );
                    })()
                ) : (
                    <>
                        <AnimatePresence>
                            {filtered.map((item, idx) => (
                                <motion.a
                                    key={item.id}
                                    href={item.link}
                                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100 hover:border-blue-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                                    layout
                                >
                                    {item.logo?.url && (
                                        <StrapiImage
                                            src={item.logo.url}
                                            className="h-12 mb-3 object-contain"
                                            width={148}
                                            height={48}
                                            alt={item.logo.alternativeText || item.name}
                                        />
                                    )}
                                    <span className="font-semibold text-lg text-center mb-1">{item.name}</span>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                        <AnimatePresence>
                            {filtered.length === 0 && (
                                <motion.div className="col-span-full text-center text-gray-400 py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    No technologies found.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </div>
        </section>
    );
}

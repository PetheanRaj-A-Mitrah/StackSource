"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollingTechStack({ items }) {
    const [isFirstRowHovered, setIsFirstRowHovered] = useState(false);
    const [isSecondRowHovered, setIsSecondRowHovered] = useState(false);

    const firstRowItems = [...items];
    const secondRowItems = [...items];

    const baseVelocity = 40;

    const x1 = useMotionValue(0);
    const x2 = useMotionValue(0);

    const wrapper1 = useRef(null);
    const wrapper2 = useRef(null);
    const contentWidth1 = useRef(0);
    const contentWidth2 = useRef(0);


    useEffect(() => {
        if (wrapper1.current) {
            contentWidth1.current = wrapper1.current.scrollWidth / 2;
        }
        if (wrapper2.current) {
            contentWidth2.current = wrapper2.current.scrollWidth / 2;
            x2.set(-contentWidth2.current);
        }
    }, [items]);


    useAnimationFrame((_, delta) => {
        const deltaInSeconds = delta / 1000;
        if (!isFirstRowHovered && wrapper1.current) {
            x1.set(x1.get() - baseVelocity * deltaInSeconds);
        }
        if (!isSecondRowHovered && wrapper2.current) {
            x2.set(x2.get() + baseVelocity * deltaInSeconds);
        }
    });


    const x1Transform = useTransform(x1, (val) => `${val}px`);
    const x2Transform = useTransform(x2, (val) => `${val}px`);



    return (
        <section className="py-16 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Yes. We cover your tech stack.</h2>
                <p className="text-lg mb-10">
                    Our 4,000+ team has expertise in almost every programming language.
                </p>
                <div
                    className="relative overflow-hidden w-full py-4"
                    onMouseEnter={() => setIsFirstRowHovered(true)}
                    onMouseLeave={() => setIsFirstRowHovered(false)}
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        style={{ x: x1Transform }}
                        ref={wrapper1}
                    >
                        {[...firstRowItems, ...firstRowItems].map((tech, i) => (
                            <Link
                                key={`first-${tech.id}-${i}`}
                                href={tech.link}
                                className="inline-block text-5xl font-semibold text-[#B0B0B0] hover:text-[var(--theme-primary-hover)] mx-6"
                            >
                                {tech.name}
                            </Link>
                        ))}
                    </motion.div>
                </div>
                <div
                    className="relative overflow-hidden w-full py-4"
                    onMouseEnter={() => setIsSecondRowHovered(true)}
                    onMouseLeave={() => setIsSecondRowHovered(false)}
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        style={{ x: x2Transform }}
                        ref={wrapper2}
                    >
                        {[...secondRowItems, ...secondRowItems].map((tech, i) => (
                            <Link
                                key={`second-${tech.id}-${i}`}
                                href={tech.link}
                                className="inline-block text-5xl font-semibold text-[#B0B0B0] hover:text-[var(--theme-primary-hover)] mx-12"
                            >
                                {tech.name}
                            </Link>
                        ))}
                    </motion.div>
                </div>

                <Link
                    href="/technologies"
                    className="inline-block mt-12 text-lg font-semibold text-[var(--theme-primary)] hover:text-[var(--theme-primary-hover)]"
                >
                    Our full expertise →
                </Link>
            </div>
        </section>
    );
}
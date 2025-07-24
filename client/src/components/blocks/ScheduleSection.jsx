"use client";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";

export default function ScheduleSection(data) {
    const { main_title, banner, schedule_items, cta } = data;
    console.log(`ScheduleSection.jsx 7 schedule_items---->`, schedule_items)

    return (
        <section className="flex flex-col md:flex-row items-start gap-12 py-16 px-6 md:px-20">
            <div className="md:w-1/2 flex flex-col gap-6 items-center">
                <h2 className="text-4xl md:text-5xl font-bold leading-snug text-black">
                    {main_title.split(".").map((line, i) => (
                        <span key={i} className="block">
                            {line.trim() + (i < main_title.split(".").length - 1 ? "." : "")}
                        </span>
                    ))}
                </h2>
                <div className="relative w-64 h-64 overflow-hidden">
                    <StrapiImage
                        src={banner.url}
                        alt={banner.alternativeText || "Process Banner"}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            <div className="md:w-1/2 flex flex-col gap-8 relative">
                {schedule_items.map((item, index) => (
                    <div key={item.id} className="flex items-start gap-4 relative">
                        {index < schedule_items.length - 1 && (
                            <span className="absolute left-6 top-12 h-[100px] border-l-2 border-dotted border-[#1a73e8]" />
                        )}
                        <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-[#1a73e8] rounded-full shrink-0">
                            <StrapiImage
                                src={item.icon.url}
                                alt={item.icon.alternativeText || "icon"}
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-[#1a73e8] uppercase">
                                {item.preTitle}
                            </p>
                            <h3 className="text-lg md:text-xl font-bold text-[#121212] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[#555] leading-relaxed text-sm md:text-base">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

                {cta?.[0] && (
                    <Link
                        href={cta[0].href}
                        target={cta[0].isExternal ? "_blank" : "_self"}
                        className="pt-4"
                    >
                        <button className="bg-[#1a73e8] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#6586b1] transition duration-200">
                            {cta[0].Name}
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}

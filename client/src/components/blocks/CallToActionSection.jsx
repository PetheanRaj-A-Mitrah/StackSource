import Image from "next/image";
import cta from "../../assets/images/cta-image.avif";

export default function CallToActionSection({
    title = "Looking for reliable software development services?",
    highlight = "See how we can help.",
    buttonLabel = "Schedule a Call",
    buttonLink = "/start/basic-details",
    imageSrc = cta,
    imageAlt = "Team discussion",
}) {
    return (
        <section className="bg-black text-[var(--theme-text)] py-16 px-6 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Content */}
                <div className="flex-1">
                    <h2 className="text-3xl text-white md:text-4xl font-semibold leading-snug">
                        {title}
                    </h2>
                    <p className="text-[var(--theme-primary)] text-2xl mt-4 font-semibold">
                        {highlight}
                    </p>
                    <a
                        href={buttonLink}
                        className="inline-block mt-6 bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-hover)] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                    >
                        {buttonLabel}
                    </a>
                </div>

                {/* Visual */}
                <div className="flex-1 relative w-full max-w-md md:max-w-none">
                    <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-[100px] clip-hourglass">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

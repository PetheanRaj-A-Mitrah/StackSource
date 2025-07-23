import { StrapiImage } from '../StrapiImage';

export default function TrustedBySection(data) {
    const { title, logos } = data.data;
    return (
        <section className="bg-gray-800 text-white p-8">
            <h3 className="text-xl font-semibold mb-6">{title}</h3>
            <div className="flex flex-col items-center justify-around gap-8">
                {logos?.map((logo, idx) => (
                    <div key={idx} className="w-32 relative h-10">
                        <StrapiImage
                            src={logo.url}
                            alt={logo.alternativeText || `Logo ${idx + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

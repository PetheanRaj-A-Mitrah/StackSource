import ServiceCard from "../ServiceCard";

export function ExpertiseSection({ title, services }) {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    {services.map((service, idx) => (
                        <div key={service.id} className="py-8 border-b md:border-b-0 md:border-r-0 md:border-t-0 border-gray-200 md:even:pl-8 md:odd:pr-8">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

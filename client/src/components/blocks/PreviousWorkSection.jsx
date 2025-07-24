export default function PreviousWorkSection({ mainTitle, categories }) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
                    {mainTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {categories.map((category, index) => (
                        <div key={category.id} className="flex flex-col justify-between border-b border-gray-200 pb-6 h-full">
                            <div>
                                <div className="border-l-4 border-blue-500 pl-4 mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {category.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">
                                    {category.description}
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                    {category.items.map((item) => (
                                        <li key={item.id}>
                                            {item.url ? (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {item.name}
                                                </a>
                                            ) : (
                                                item.name
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

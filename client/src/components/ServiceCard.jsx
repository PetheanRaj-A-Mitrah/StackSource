import { StrapiImage } from "./StrapiImage";

const ServiceCard = ({ icon, title, description }) => {
    const CardContent = (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
            <div>
                {icon?.url && (
                    <StrapiImage
                        src={icon.url}
                        alt={icon.alternativeText || title}
                        className="w-6 h-6 object-contain mr-2"
                        width={24}
                        height={24}
                    />
                )}
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );

    return (
        CardContent
    );
};

export default ServiceCard;

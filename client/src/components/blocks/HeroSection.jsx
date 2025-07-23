import Link from "next/link";
import { StrapiImage } from "../StrapiImage";

export function HeroSection({
  preTitle,
  title,
  description,
  buttonLabel,
  buttonLink,
  image,
  alignment = "left",
}) {
  const renderTitle = () => {
    return title?.map((block, index) => {
      if (block.type === "paragraph") {
        return (
          <p key={index} className="text-4xl font-extrabold text-gray-900 mb-4">
            {block.children?.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <section className="w-full py-16 bg-white">
      <div
        className={`container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 ${alignment.trim() === "right" ? "md:flex-row-reverse" : ""
          }`}
      >
        {/* Text Content */}
        <div className="md:w-1/2">
          {preTitle && (
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              {preTitle}
            </h4>
          )}

          {renderTitle()}

          {description && (
            <p className="text-lg text-gray-700 mb-6">{description}</p>
          )}

          {buttonLabel && buttonLink && (
            <Link
              href={buttonLink}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition"
            >
              {buttonLabel}
            </Link>
          )}
        </div>

        {/* Image */}
        {image?.url && (
          <div className="md:w-1/2">
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || "Hero image"}
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage, getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { StrapiImage } from "@/components/StrapiImage";
import CallToActionSection from "@/components/blocks/CallToActionSection";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

async function getTrendingTechnologies() {
  const data = await getPageBySlug("technologies");
  return data;
}

export default async function HomeRoute() {
  const data = await loader();
  const techPage = await getTrendingTechnologies();

  if (!techPage) notFound();

  const blocks = data[0]?.blocks || [];
  const techBlocks = techPage?.data[0]?.blocks || [];

  const trendingItems =
    techBlocks
      .find((block) => block.__component === "blocks.technology-section")
      ?.items?.filter((item) => item.isTrending) || [];

  return (
    <div className="bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <BlockRenderer blocks={blocks} />
      {trendingItems.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[var(--theme-text)]">
              Trending Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingItems.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-[var(--theme-btn)] hover:bg-[var(--theme-btn-hover)] rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-colors duration-300"
                >
                  {tech.logo?.url && (
                    <div className="w-full h-24 mb-4 relative">
                      <StrapiImage
                        src={tech.logo.url}
                        alt={tech.logo.alternativeText || tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  {tech.link && (
                    <a
                      href={tech.link}
                      target="_self"
                      rel="noopener noreferrer"
                      className="mt-3 text-sm text-[var(--theme-primary)] hover:underline"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <CallToActionSection />
    </div>
  );
}

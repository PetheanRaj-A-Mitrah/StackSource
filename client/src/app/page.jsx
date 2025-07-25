import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage, getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { StrapiImage } from "@/components/StrapiImage";

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

  const blocks = data?.blocks || [];
  const techBlocks = techPage?.data[0]?.blocks || [];

  console.log(`page.jsx 26 techBlocks---->`, techBlocks, techPage)

  const trendingItems =
    techBlocks
      .find((block) => block.__component === "blocks.technology-section")
      ?.items?.filter((item) => item.isTrending) || [];

  return (
    <div>
      <BlockRenderer blocks={blocks} />
      {trendingItems.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Trending Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {trendingItems.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-sm text-blue-600 hover:underline"
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
    </div>
  );
}

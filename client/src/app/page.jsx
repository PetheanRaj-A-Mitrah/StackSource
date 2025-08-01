import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage, getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import CallToActionSection from "@/components/blocks/CallToActionSection";
import ScrollingTechStack from "@/components/ScrollingTechStack";
import cta from "@/assets/images/cta-image1.avif";

export default async function HomeRoute() {
  const data = await getHomePage();
  const techPage = await getPageBySlug("technologies");

  if (!data || !techPage) notFound();

  const blocks = data?.data?.[0]?.blocks || [];
  const techBlocks = techPage?.data?.[0]?.blocks || [];

  const techSection = techBlocks.find(
    (block) => block.__component === "blocks.technology-section"
  );

  const techItems = techSection?.items || [];

  console.log(`page.jsx 23 blocks---->`, blocks, data)

  return (
    <div className="bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <BlockRenderer blocks={blocks} />
      {techItems.length > 0 && (
        <ScrollingTechStack items={techItems} />
      )}
      <CallToActionSection imageSrc={cta} />
    </div>
  );
}

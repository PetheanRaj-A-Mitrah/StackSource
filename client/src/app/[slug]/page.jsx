
import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";

export default async function Page({ params }) {
  const { slug } = params;
  console.log(`page.jsx 8 slug---->`, slug)
  const { data } = await getPageBySlug(slug);
  if (!data || data.length === 0) notFound();
  const blocks = data[0]?.blocks;
  return <BlockRenderer blocks={blocks} />;
}
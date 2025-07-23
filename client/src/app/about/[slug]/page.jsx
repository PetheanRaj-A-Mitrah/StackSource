
import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";

export default async function Page({ params }) {
  const { slug } = params;
  const { data } = await getPageBySlug(slug);
  console.log(`page.jsx 9 data---->`, data)
  if (!data || data.length === 0) notFound();
  const blocks = data[0]?.blocks;
  return <BlockRenderer blocks={blocks} />;
}
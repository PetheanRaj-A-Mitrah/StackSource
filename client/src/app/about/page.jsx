
import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";

export default async function Page() {
    const { data } = await getPageBySlug('about');
    if (!data || data.length === 0) notFound();
    const blocks = data[0]?.blocks;
    return <BlockRenderer blocks={blocks} />;
}
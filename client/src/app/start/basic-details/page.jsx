
import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import TrustedBySection from "@/components/blocks/TrustedBySection";
import ContactFormSection from "@/components/blocks/ContactFormSection";

export default async function Page() {
    const { data } = await getPageBySlug('basic-details');
    if (!data || data.length === 0) notFound();
    const blocks = data[0]?.blocks;
    return (
        <div className="flex">
            <ContactFormSection data={blocks[0]} />
            <TrustedBySection data={blocks[1]} />
        </div>
    )
}
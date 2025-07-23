import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { FeaturedArticle } from "./blocks/FeaturedArticle";
import { Subscribe } from "./blocks/Subscribe";
import { ParagraphWithImage } from "@/components/blocks/ParagraphWithImage";
import { Paragraph } from "@/components/blocks/Paragraph";
import { FullImage } from "@/components/blocks/FullImage";
import { Heading } from "./blocks/Heading";
import { ExpertiseSection } from "./blocks/ExpertiseSection";
import OutsourcingInfo from "./blocks/OutsourcingInfo";
import BestPracticesSection from "./blocks/BestPracticesSection";
import TechnologySection from "./blocks/TechnologySection";
import ScheduleSection from "./blocks/ScheduleSection";
import FaqSection from "./blocks/FaqSection";
import ContactFormSection from "./blocks/ContactFormSection";
import TrustedBySection from "./blocks/TrustedBySection";

function blockRenderer(block, index) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.info-block":
      return <InfoBlock {...block} key={index} />;
    case "blocks.featured-article":
      return <FeaturedArticle {...block} key={index} />;
    case "blocks.subscribe":
      return <Subscribe {...block} key={index} />;
    case "blocks.heading":
      return <Heading {...block} key={index} />;
    case "blocks.paragraph-with-image":
      return <ParagraphWithImage {...block} key={index} />;
    case "blocks.paragraph":
      return <Paragraph {...block} key={index} />;
    case "blocks.full-image":
      return <FullImage {...block} key={index} />;
    case "blocks.expertise-section":
      return <ExpertiseSection {...block} key={index} />;
    case "blocks.android-outsourcing-info":
      return <OutsourcingInfo {...block} key={index} />;
    case "blocks.best-practices-section":
      return <BestPracticesSection {...block} key={index} />;
    case "blocks.technology-section":
      return <TechnologySection {...block} key={index} />;
    case "blocks.schedule-section":
      return <ScheduleSection {...block} key={index} />;
    case "blocks.faq-section":
      return <FaqSection {...block} key={index} />;
    case "blocks.contact-form-section":
      return <ContactFormSection {...block} key={index} />;
    case "blocks.trusted-by-section":
      return <TrustedBySection {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }) {
  return blocks?.map((block, index) => blockRenderer(block, index));
}
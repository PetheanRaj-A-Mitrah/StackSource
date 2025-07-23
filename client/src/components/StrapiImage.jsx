import Image from "next/image";
import { getStrapiURL } from "@/utils/get-strapi-url";

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return <Image src={imageUrl} alt={alt} className={className} {...rest} />;
}

export function getStrapiMedia(url) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL() + url;
}
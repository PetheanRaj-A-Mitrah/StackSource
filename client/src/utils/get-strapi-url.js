export function getStrapiURL() {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://worthy-cheese-16c170eb03.strapiapp.com/";
  return url;
}
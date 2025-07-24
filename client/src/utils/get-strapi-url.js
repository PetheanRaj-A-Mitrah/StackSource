export function getStrapiURL() {
  const url = process.env.STRAPI_API_URL || "http://localhost:1337";
  return url;
}
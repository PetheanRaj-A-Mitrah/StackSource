export function getStrapiURL() {
  const url = process.env.STRAPI_API_URL || "http://127.0.0.1:1337";
  return url;
}
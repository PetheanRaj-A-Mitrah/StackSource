import { getContent } from "@/data/loaders";

import { PaginationComponent } from "./PaginationComponent";
import { Search } from "@/components/Search"


async function loader(path, featured = false, query = "", page = "1") {
  const { data, meta } = await getContent(path, featured, query, page);
  return {
    articles: (data) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ContentList({
  headline,
  path,
  featured,
  component,
  headlineAlignment = "left",
  showSearch,
  query,
  page,
  showPagination,
}) {
  const { articles, pageCount } = await loader(path, featured, query, page);
  const Component = component;

  return (
    <section className="content-items container">
      <h3 className={`content-items__headline ${`content-items--${headlineAlignment}`}`}>
        {headline || "Featured Articles"}
      </h3>
      {showSearch && <Search />}
      <div className="content-items__container--card">
        {articles.map((article) => (
          <Component key={article.documentId} {...article} basePath={path} />
        ))}
      </div>
      {showPagination && <PaginationComponent pageCount={pageCount} />}
    </section>
  );
}
import { ContentList } from "@/components/ContentList";
import { getContentBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { EventSignupForm } from "@/components/EventSignUpFrom";

async function loader(slug) {
  const { data } = await getContentBySlug(slug, "/api/events");
  const event = data[0];

  if (!event) throw notFound();
  return { event: event, blocks: event?.blocks };
}



const EventCard = (props) => (
  <Card {...props} basePath="events" />
);

export default async function AllEventsRoute({
  params,
  searchParams,
}) {
  const slug = (await params).slug;
  const { query, page } = await searchParams;
  const { event, blocks } = await loader(slug);

  return (
    <div className="container">
      <div className="event-page">
        <EventSignupForm blocks={blocks} eventId={event.documentId} />
      </div>
      <ContentList
        headline="All Events"
        path="/api/events"
        query={query}
        page={page}
        showSearch
        showPagination
        component={EventCard}
      />
    </div>
  );
}
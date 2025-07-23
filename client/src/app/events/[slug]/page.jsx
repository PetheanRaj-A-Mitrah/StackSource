import { ContentList } from "@/components/ContentList";
import { Card } from "@/components/Card";
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

export default async function SingleEventRoute({ params }) {
  const slug = (await params).slug;
  const { event, blocks } = await loader(slug);

  return (
    <div className="container">
      <div className="event-page">
        <EventSignupForm
          blocks={blocks}
          eventId={event.documentId}
          startDate={event.startDate}
          price={event.price}
          image={{ url: event?.image?.url, alt: event?.image?.alternativeText || "Event image" }}
        />
      </div>
      <ContentList
        headline="Featured Events"
        path="/api/events"
        component={EventCard}
        featured={true}
      />
    </div>
  );
}
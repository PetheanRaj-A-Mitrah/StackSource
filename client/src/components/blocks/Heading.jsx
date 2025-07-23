export function Heading({ heading, linkId }) {
  return (
    <h3 className="article-headline" id={linkId}>
      {heading}
    </h3>
  );
}
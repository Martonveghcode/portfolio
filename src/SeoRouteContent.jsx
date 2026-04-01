import { getRouteSeoContent } from "./seo";

export default function SeoRouteContent({ route }) {
  const content = getRouteSeoContent(route);

  return (
    <section className="visually-hidden" data-seo-route={route.id}>
      <article>
        <h1>{content.heading}</h1>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {content.externalLink ? (
          <p>
            <a href={content.externalLink.href} target="_blank" rel="noreferrer">
              {content.externalLink.label}
            </a>
          </p>
        ) : null}

        {content.links.length ? (
          <nav aria-label="Related pages">
            <ul>
              {content.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </article>
    </section>
  );
}

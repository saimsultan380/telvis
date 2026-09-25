import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { blogPostHref, getBlogPostsBySlugs } from "@/lib/blog-posts";

type BlogRelatedReadingProps = {
  id?: string;
  heading?: string;
  lead?: string;
  slugs: readonly string[];
  delay?: number;
};

export function BlogRelatedReading({
  id = "related-reading-heading",
  heading = "Related reading",
  lead,
  slugs,
  delay = 0.06,
}: BlogRelatedReadingProps) {
  const posts = getBlogPostsBySlugs(slugs);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="telvis-section telvis-section-related-reading" aria-labelledby={id}>
      <div className="telvis-section-inner">
        <CardReveal delay={delay} className="telvis-glass telvis-panel telvis-related-reading">
          <CardRevealPart as="h2" id={id} className="telvis-panel-title">
            {heading}
          </CardRevealPart>
          {lead ? (
            <CardRevealPart as="p" className="telvis-info-body">
              {lead}
            </CardRevealPart>
          ) : null}
          <CardRevealPart>
            <ul className="telvis-related-reading-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={blogPostHref(post.slug)} className="telvis-related-reading-link">
                    {post.title}
                  </Link>
                  <span className="telvis-related-reading-meta">
                    {post.category} · {post.readMinutes} min
                  </span>
                </li>
              ))}
            </ul>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

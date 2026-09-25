import Link from "next/link";
import type { BlogBlock } from "@/lib/blog-posts";

type BlogArticleProps = {
  blocks: BlogBlock[];
};

export function BlogArticle({ blocks }: BlogArticleProps) {
  return (
    <article className="telvis-blog-prose">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === "h2") {
          return (
            <h2 key={index} className="telvis-blog-h2">
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3 key={index} className="telvis-blog-h3">
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="telvis-blog-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol key={index} className="telvis-blog-ordered">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }

        return (
          <aside key={index} className="telvis-glass telvis-blog-cta">
            <h2 className="telvis-blog-cta-title">{block.title}</h2>
            <p className="telvis-info-body">{block.body}</p>
            <div className="telvis-actions telvis-blog-cta-actions">
              <Link href={block.primaryHref} className="telvis-cta-primary">
                {block.primaryLabel}
              </Link>
              {block.secondaryHref && block.secondaryLabel ? (
                <Link href={block.secondaryHref} className="telvis-cta-outline">
                  {block.secondaryLabel}
                </Link>
              ) : null}
            </div>
          </aside>
        );
      })}
    </article>
  );
}

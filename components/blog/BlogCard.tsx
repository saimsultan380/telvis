import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import type { BlogPost } from "@/lib/blog-posts";

type BlogCardProps = {
  post: BlogPost;
  delay?: number;
};

export function BlogCard({ post, delay = 0 }: BlogCardProps) {
  const href = `/blog/${post.slug}`;

  return (
    <CardReveal as="article" delay={delay} className="telvis-glass telvis-blog-card">
      <CardRevealPart>
        <p className="telvis-blog-card-meta">
          <span>{post.category}</span>
          <span aria-hidden="true"> · </span>
          <span>{post.readMinutes} min read</span>
        </p>
        <h2 className="telvis-blog-card-title">
          <Link href={href}>{post.title}</Link>
        </h2>
        <p className="telvis-info-body">{post.excerpt}</p>
      </CardRevealPart>
      <CardRevealPart>
        <Link href={href} className="telvis-guide-device-link">
          Read article
        </Link>
      </CardRevealPart>
    </CardReveal>
  );
}

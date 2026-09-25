import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostSchema } from "@/components/blog/BlogPostSchema";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import {
  blogPosts,
  getAllBlogSlugs,
  getBlogPost,
} from "@/lib/blog-posts";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    path: `/blog/${post.slug}`,
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    ogType: "article",
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BlogPostSchema post={post} />
      <main className="telvis-blog-post-main">
        <PageHero
          layout="blog"
          eyebrow={post.category}
          headingId="blog-post-heading"
          titleLines={[<span key="title">{post.title}</span>]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy telvis-blog-post-intro">
              <p className="telvis-blog-post-meta">
                <time dateTime={post.datePublished}>
                  Published {formatDate(post.datePublished)}
                </time>
                {post.dateModified !== post.datePublished ? (
                  <>
                    {" · "}
                    <time dateTime={post.dateModified}>
                      Updated {formatDate(post.dateModified)}
                    </time>
                  </>
                ) : null}
                <span aria-hidden="true"> · </span>
                <span>{post.readMinutes} min read</span>
              </p>
              <p className="telvis-blog-post-deck">{post.excerpt}</p>
            </div>
          </HeroReveal>
        </PageHero>

        <section className="telvis-section telvis-blog-post-body" aria-label="Article">
          <div className="telvis-blog-post-column">
            <nav className="telvis-blog-crumb" aria-label="Breadcrumb">
              <Link href={routes.home}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link href={routes.blog}>Blog</Link>
              <span aria-hidden="true">/</span>
              <span>{post.category}</span>
            </nav>

            <div className="telvis-glass telvis-blog-prose-shell">
              <BlogArticle blocks={post.blocks} />
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="telvis-section telvis-blog-related-section" aria-labelledby="related-blog-heading">
            <div className="telvis-section-inner">
              <SectionHeader
                id="related-blog-heading"
                eyebrow="Keep reading"
                title={
                  <>
                    More <TitleAccent>IPTV UK</TitleAccent> Guides
                  </>
                }
              />
              <div className="telvis-blog-grid telvis-blog-grid-related">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}

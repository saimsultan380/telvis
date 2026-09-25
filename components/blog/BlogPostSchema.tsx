import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { absoluteAssetUrl, buildBreadcrumbList, canonicalUrl } from "@/lib/seo";
import { brandAssets, siteConfig } from "@/lib/site";
import type { BlogPost } from "@/lib/blog-posts";

export function BlogPostSchema({ post }: { post: BlogPost }) {
  const path = `/blog/${post.slug}`;
  const url = canonicalUrl(path);
  const homeUrl = canonicalUrl("/");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path },
      ]),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        url,
        mainEntityOfPage: url,
        inLanguage: "en-GB",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: homeUrl,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: homeUrl,
          logo: {
            "@type": "ImageObject",
            url: absoluteAssetUrl(brandAssets.logo512),
          },
        },
        image: [absoluteAssetUrl(brandAssets.ogImage)],
        keywords: post.keywords.join(", "),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

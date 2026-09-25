import type { MetadataRoute } from "next";
import { getBlogPostPaths } from "@/lib/blog-posts";
import { getIndexableGuideRoutes } from "@/lib/installation-guide-seo";
import { canonicalUrl, staticIndexableRoutes } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.contentUpdated);
  const routes = [
    ...staticIndexableRoutes,
    ...getIndexableGuideRoutes(),
    ...getBlogPostPaths(),
  ];

  return routes.map((path) => ({
    url: canonicalUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/iptv-uk" ||
            path === "/free-trial" ||
            path === "/plans" ||
            path === "/installation-guide"
          ? 0.9
          : path.startsWith("/installation-guide/") || path.startsWith("/blog/")
            ? 0.8
            : path === "/blog"
              ? 0.85
              : 0.7,
  }));
}

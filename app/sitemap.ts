import type { MetadataRoute } from "next";
import { getIndexableGuideRoutes } from "@/lib/installation-guide-seo";
import { canonicalUrl, staticIndexableRoutes } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.contentUpdated);
  const routes = [...staticIndexableRoutes, ...getIndexableGuideRoutes()];

  return routes.map((path) => ({
    url: canonicalUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/free-trial" || path === "/plans" || path === "/installation-guide"
          ? 0.9
          : path.startsWith("/installation-guide/")
            ? 0.8
            : 0.7,
  }));
}

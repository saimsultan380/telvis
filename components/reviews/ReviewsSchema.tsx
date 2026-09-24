import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { reviewsPageProductSchema } from "@/lib/product-schema";
import { routes } from "@/lib/site";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";

export function ReviewsSchema() {
  const webPage: Record<string, unknown> = webPageSchema({
    path: routes.reviews,
    name: "Telvis Reviews | Customer Feedback on Setup and Picture",
    description:
      "Read Telvis customer reviews covering Firestick and Smart TV setup, everyday viewing, support replies and what the 24-hour trial showed.",
  });

  const product = reviewsPageProductSchema();

  if (product) {
    webPage.mainEntity = { "@id": product["@id"] };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Telvis Reviews", path: routes.reviews },
      ]),
      webPage,
      ...(product ? [product] : []),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

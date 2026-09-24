import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

export function TrialSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Free Trial", path: routes.trial },
      ]),
      webPageSchema({
        path: routes.trial,
        name: "24-Hour IPTV Free Trial UK | Telvis",
        description:
          "Request a free 24-hour Telvis trial on your Firestick, Smart TV or phone. No card needed. Test picture, channels and setup before you pay.",
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

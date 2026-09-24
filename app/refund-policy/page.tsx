import type { Metadata } from "next";
import {
  RefundPolicyContent,
  RefundPolicyHero,
  RefundPolicySchema,
} from "@/components/legal/RefundPolicyContent";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.refund,
  title: "Telvis 7-Day Refund Policy",
  description:
    "Eligible Telvis paid plans include a seven-day refund guarantee. Read what is covered, how to request a refund, and how UK consumer rights still apply.",
  keywords: [
    "Telvis refund policy",
    "7 day IPTV refund",
    "Telvis guarantee",
  ],
});

export default function RefundPolicyPage() {
  return (
    <>
      <RefundPolicySchema />
      <main>
        <RefundPolicyHero />
        <RefundPolicyContent />
      </main>
    </>
  );
}

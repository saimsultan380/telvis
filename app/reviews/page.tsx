import type { Metadata } from "next";
import { ReviewsCollection } from "@/components/reviews/ReviewsCollection";
import { ReviewsEvaluate } from "@/components/reviews/ReviewsEvaluate";
import { ReviewsFinalCta } from "@/components/reviews/ReviewsFinalCta";
import { ReviewsHero } from "@/components/reviews/ReviewsHero";
import { ReviewsList } from "@/components/reviews/ReviewsList";
import { ReviewsRating } from "@/components/reviews/ReviewsRating";
import { ReviewsResponse } from "@/components/reviews/ReviewsResponse";
import { ReviewsSchema } from "@/components/reviews/ReviewsSchema";
import { ReviewsSubmit } from "@/components/reviews/ReviewsSubmit";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: routes.reviews,
  title: "Telvis Reviews | Customer Feedback on Setup and Picture",
  description:
    "Read Telvis customer reviews covering Firestick and Smart TV setup, everyday viewing, support replies and what the 24-hour trial showed.",
  keywords: [
    "Telvis reviews",
    "Telvis customer reviews",
    "IPTV subscription reviews UK",
  ],
});

export default function ReviewsPage() {
  return (
    <>
      <ReviewsSchema />
      <main>
        <ReviewsHero />
        <ReviewsRating />
        <ReviewsList />
        <ReviewsEvaluate />
        <ReviewsCollection />
        <ReviewsResponse />
        <ReviewsSubmit />
        <ReviewsFinalCta />
      </main>
    </>
  );
}

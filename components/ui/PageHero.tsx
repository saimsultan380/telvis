"use client";

import type { ReactNode } from "react";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { HeroTitleReveal } from "@/components/ui/HeroTitleReveal";

type PageHeroProps = {
  eyebrow: string;
  headingId: string;
  titleLines: ReactNode[];
  children?: ReactNode;
  visual?: ReactNode;
  /** Narrow reading column + extra top spacing for blog posts. */
  layout?: "default" | "blog";
};

export function PageHero({
  eyebrow,
  headingId,
  titleLines,
  children,
  visual,
  layout = "default",
}: PageHeroProps) {
  const isBlog = layout === "blog";
  const copyClassName = isBlog
    ? "telvis-page-hero-copy telvis-blog-post-column"
    : "telvis-page-hero-copy";

  return (
    <section
      className={`telvis-hero telvis-hero-page${isBlog ? " telvis-hero-blog" : ""}`}
      aria-labelledby={headingId}
    >
      <div className="telvis-container">
        {visual ? (
          <div className="telvis-content">
            <div className="telvis-copy-col">
              <HeroReveal delay={0.05}>
                <div className="telvis-eyebrow">
                  <span className="telvis-eyebrow-dot" />
                  {eyebrow}
                </div>
              </HeroReveal>

              <HeroTitleReveal
                id={headingId}
                className="telvis-h1"
                lines={titleLines}
              />

              {children}
            </div>
            {visual}
          </div>
        ) : (
          <div className={copyClassName}>
            <HeroReveal delay={0.05}>
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                {eyebrow}
              </div>
            </HeroReveal>

            <HeroTitleReveal
              id={headingId}
              className={`telvis-h1${isBlog ? " telvis-blog-post-title" : ""}`}
              lines={titleLines}
            />

            {children}
          </div>
        )}
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}

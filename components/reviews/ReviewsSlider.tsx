"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import type { PublishedReview } from "@/lib/reviews-data";

type ReviewsSliderProps = {
  reviews: PublishedReview[];
};

const AUTO_PLAY_MS = 4500;
const TRANSITION_MS = 520;
const DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 768;
const DESKTOP_SLIDES = 3;
const TABLET_SLIDES = 2;
const MOBILE_SLIDES = 1;
const SWIPE_THRESHOLD = 48;

function getSlidesPerView(width: number) {
  if (width >= DESKTOP_BREAKPOINT) return DESKTOP_SLIDES;
  if (width >= TABLET_BREAKPOINT) return TABLET_SLIDES;
  return MOBILE_SLIDES;
}

export function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const pointerDeltaX = useRef(0);
  const [slidesPerView, setSlidesPerView] = useState(MOBILE_SLIDES);
  const [slideWidth, setSlideWidth] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [skipTransition, setSkipTransition] = useState(false);

  const total = reviews.length;
  const pageCount = Math.max(1, total - slidesPerView + 1);
  const trackSlides = [
    ...reviews,
    ...reviews.slice(0, slidesPerView),
  ];

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextSlidesPerView = getSlidesPerView(window.innerWidth);
    setSlidesPerView(nextSlidesPerView);
    setSlideWidth(viewport.offsetWidth / nextSlidesPerView);
  }, []);

  useEffect(() => {
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(motionMedia.matches);

    updateMotion();
    motionMedia.addEventListener("change", updateMotion);
    return () => motionMedia.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    measure();

    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    setTrackIndex((index) => Math.min(index, Math.max(0, pageCount - 1)));
    setDotIndex((index) => Math.min(index, Math.max(0, pageCount - 1)));
  }, [pageCount]);

  const resetToStart = useCallback(() => {
    setSkipTransition(true);
    setTrackIndex(0);
    setDotIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setSkipTransition(false));
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      const nextIndex = ((index % pageCount) + pageCount) % pageCount;
      setSkipTransition(false);
      setTrackIndex(nextIndex);
      setDotIndex(nextIndex);
    },
    [pageCount, total],
  );

  const goNext = useCallback(() => {
    if (pageCount <= 1) return;

    setSkipTransition(false);

    if (trackIndex >= pageCount - 1) {
      setTrackIndex(pageCount);
      setDotIndex(0);
      return;
    }

    const nextIndex = trackIndex + 1;
    setTrackIndex(nextIndex);
    setDotIndex(nextIndex);
  }, [pageCount, trackIndex]);

  const goPrev = useCallback(() => {
    if (pageCount <= 1) return;

    setSkipTransition(false);

    if (trackIndex <= 0) {
      setTrackIndex(pageCount - 1);
      setDotIndex(pageCount - 1);
      return;
    }

    const nextIndex = trackIndex - 1;
    setTrackIndex(nextIndex);
    setDotIndex(nextIndex);
  }, [pageCount, trackIndex]);

  useEffect(() => {
    if (pageCount <= 1 || isPaused || reduceMotion) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, pageCount, reduceMotion]);

  const handleTransitionEnd = () => {
    if (trackIndex >= pageCount) {
      resetToStart();
    }
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
    pointerDeltaX.current = 0;
    setIsPaused(true);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;
    pointerDeltaX.current = event.clientX - pointerStartX.current;
  };

  const onPointerUp = () => {
    if (pointerStartX.current === null) return;

    const delta = pointerDeltaX.current;
    pointerStartX.current = null;
    pointerDeltaX.current = 0;
    setIsPaused(false);

    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  if (total === 0) return null;

  const offset = slideWidth > 0 ? trackIndex * slideWidth : 0;
  const trackStyle = {
    transform: `translate3d(-${offset}px, 0, 0)`,
    transition:
      skipTransition || reduceMotion
        ? "none"
        : `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
  };

  return (
    <div
      className="telvis-review-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="telvis-review-slider-shell">
        <button
          type="button"
          className="telvis-review-slider-arrow is-prev"
          aria-label="Show previous reviews"
          onClick={goPrev}
        >
          <ChevronLeft size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>

        <div
          ref={viewportRef}
          className="telvis-review-slider-viewport"
          aria-live="polite"
          aria-atomic="true"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={() => {
            if (pointerStartX.current !== null) onPointerUp();
          }}
        >
          <div
            className="telvis-review-slider-track"
            style={trackStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {trackSlides.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="telvis-review-slider-slide"
                style={{ width: slideWidth > 0 ? `${slideWidth}px` : undefined }}
              >
                <ReviewCard review={review} className="telvis-review-slide-card" />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="telvis-review-slider-arrow is-next"
          aria-label="Show next reviews"
          onClick={goNext}
        >
          <ChevronRight size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>

      <div
        className="telvis-review-slider-dots"
        role="tablist"
        aria-label="Choose a review slide"
      >
        {Array.from({ length: pageCount }, (_, index) => {
          const isActive = index === dotIndex;

          return (
            <button
              key={index}
              type="button"
              role="tab"
              className={`telvis-review-slider-dot${isActive ? " is-active" : ""}`}
              aria-label={`Show review slide ${index + 1} of ${pageCount}`}
              aria-selected={isActive}
              onClick={() => goTo(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

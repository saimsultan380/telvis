"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Monitor, X } from "lucide-react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GuideContent } from "@/components/installation/GuideContent";
import { staggerDelay } from "@/lib/motion";
import {
  installationDeviceTabs,
  type GuideSectionData,
} from "@/lib/installation-guide-data";
import {
  getDevicePageSeo,
  guideDeviceIcons,
} from "@/lib/installation-guide-seo";

export function InstallationGuideTabs() {
  const [activeDeviceId, setActiveDeviceId] = useState<string | null>(null);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const activeSection =
    installationDeviceTabs.find((section) => section.id === activeDeviceId) ??
    null;

  const closeModal = useCallback(() => {
    setActiveDeviceId(null);
  }, []);

  const openModal = useCallback((section: GuideSectionData, trigger: HTMLElement) => {
    lastTriggerRef.current = trigger;
    setActiveDeviceId(section.id);
  }, []);

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeSection, closeModal]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash.startsWith("device-")) {
      return;
    }

    const deviceId = hash.slice("device-".length);
    if (installationDeviceTabs.some((section) => section.id === deviceId)) {
      setActiveDeviceId(deviceId);
    }
  }, []);

  return (
    <>
      <div className="telvis-guide-device-grid">
        {installationDeviceTabs.map((section, index) => {
          const Icon = guideDeviceIcons[section.id] ?? Monitor;
          const seo = getDevicePageSeo(section.id);

          return (
            <CardReveal
              key={section.id}
              as="article"
              delay={staggerDelay(index, 0.04)}
              className="telvis-glass telvis-guide-device-card"
              id={`device-${section.id}`}
            >
              <CardRevealPart className="telvis-guide-device-card-inner">
                <div className="telvis-guide-device-card-top">
                  <span className="telvis-guide-device-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <div className="telvis-guide-device-copy">
                    <h3 className="telvis-guide-device-title">{section.label}</h3>
                    <p className="telvis-guide-device-lead">
                      {seo?.description ?? section.title}
                    </p>
                  </div>
                </div>
                <div className="telvis-guide-device-card-footer">
                  <button
                    type="button"
                    className="telvis-guide-device-open"
                    onClick={(event) => openModal(section, event.currentTarget)}
                  >
                    Show {section.label} steps
                  </button>
                </div>
              </CardRevealPart>
            </CardReveal>
          );
        })}
      </div>

      {activeSection ? (
        <div
          className="telvis-guide-modal-root"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="telvis-glass telvis-guide-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="telvis-guide-modal-head">
              <div className="telvis-guide-modal-heading">
                <p className="telvis-guide-modal-eyebrow">Device setup</p>
                <h2 id={titleId} className="telvis-guide-modal-title">
                  {activeSection.label} steps
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="telvis-guide-modal-close"
                onClick={closeModal}
                aria-label={`Close ${activeSection.label} steps`}
              >
                <X size={18} strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>

            <div className="telvis-guide-modal-body">
              <GuideContent blocks={activeSection.blocks} />
            </div>

            <div className="telvis-guide-modal-footer">
              <button
                type="button"
                className="telvis-cta-outline telvis-guide-modal-done"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

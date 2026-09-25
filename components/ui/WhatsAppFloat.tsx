"use client";

import { supportConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={supportConfig.whatsappUrl}
      className="telvis-whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Telvis support on WhatsApp"
    >
      WhatsApp
    </a>
  );
}

"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function ReferralClickTracker() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest?.("a");

      if (!link?.href) return;

      let url;

      try {
        url = new URL(link.href);
      } catch {
        return;
      }

      const isMatthewWeb =
        url.hostname === "matthew-web.com" ||
        url.hostname === "www.matthew-web.com";

      if (!isMatthewWeb) return;

      track("matthew_web_referral_clicked", {
        destination: url.href,
        source_path: window.location.pathname,
        link_text: link.textContent?.trim().slice(0, 80) || "unknown",
      });
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}

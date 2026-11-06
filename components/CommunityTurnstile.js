"use client";

import { useEffect, useRef } from "react";

const scriptId = "fgh-community-turnstile-script";
const scriptUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Browser-only widget. Supabase Auth validates the token server-side when CAPTCHA is enabled. */
export default function CommunityTurnstile({ siteKey, onToken, resetVersion }) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const callbackRef = useRef(onToken);

  useEffect(() => {
    callbackRef.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (!siteKey) return;
    let disposed = false;
    const script = document.getElementById(scriptId);

    function renderWidget() {
      if (disposed || !window.turnstile || !containerRef.current || widgetRef.current !== null) return;
      widgetRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: "auto",
        size: "flexible",
        callback: (token) => callbackRef.current(token),
        "expired-callback": () => callbackRef.current(""),
        "error-callback": () => callbackRef.current(""),
      });
    }

    if (script) {
      if (window.turnstile) renderWidget();
      else script.addEventListener("load", renderWidget);
    } else {
      const newScript = document.createElement("script");
      newScript.id = scriptId;
      newScript.src = scriptUrl;
      newScript.async = true;
      newScript.addEventListener("load", renderWidget);
      document.head.appendChild(newScript);
    }

    return () => {
      disposed = true;
      const activeScript = document.getElementById(scriptId);
      activeScript?.removeEventListener("load", renderWidget);
      if (widgetRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetRef.current);
        widgetRef.current = null;
      }
    };
  }, [siteKey]);

  useEffect(() => {
    if (resetVersion > 0 && widgetRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetRef.current);
    }
  }, [resetVersion]);

  return <div ref={containerRef} style={{ maxWidth: "100%", overflow: "hidden" }} />;
}

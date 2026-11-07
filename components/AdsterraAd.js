"use client";

import { useEffect, useRef, useState } from "react";

const AD_UNITS = {
  mobile: {
    width: 320,
    height: 50,
    key: "8bf8d49c4871b83adee34e43a6b9b38c",
    src: "https://www.highrevenueformat.com/8bf8d49c4871b83adee34e43a6b9b38c/invoke.js",
  },
  mobileBanner: {
    width: 320,
    height: 50,
    key: "8bf8d49c4871b83adee34e43a6b9b38c",
    src: "https://www.highrevenueformat.com/8bf8d49c4871b83adee34e43a6b9b38c/invoke.js",
  },
  "320x50": {
    width: 320,
    height: 50,
    key: "8bf8d49c4871b83adee34e43a6b9b38c",
    src: "https://www.highrevenueformat.com/8bf8d49c4871b83adee34e43a6b9b38c/invoke.js",
  },
  leaderboard: {
    width: 728,
    height: 90,
    key: "712e3a8edb4f28a580b41207ffaeec70",
    src: "https://www.highrevenueformat.com/712e3a8edb4f28a580b41207ffaeec70/invoke.js",
  },
  desktop: {
    width: 728,
    height: 90,
    key: "712e3a8edb4f28a580b41207ffaeec70",
    src: "https://www.highrevenueformat.com/712e3a8edb4f28a580b41207ffaeec70/invoke.js",
  },
  "728x90": {
    width: 728,
    height: 90,
    key: "712e3a8edb4f28a580b41207ffaeec70",
    src: "https://www.highrevenueformat.com/712e3a8edb4f28a580b41207ffaeec70/invoke.js",
  },
  rectangle: {
    width: 300,
    height: 250,
    key: "fb4cd2e2ed5edfadff8a1d86891528cf",
    src: "https://www.highrevenueformat.com/fb4cd2e2ed5edfadff8a1d86891528cf/invoke.js",
  },
  box: {
    width: 300,
    height: 250,
    key: "fb4cd2e2ed5edfadff8a1d86891528cf",
    src: "https://www.highrevenueformat.com/fb4cd2e2ed5edfadff8a1d86891528cf/invoke.js",
  },
  "300x250": {
    width: 300,
    height: 250,
    key: "fb4cd2e2ed5edfadff8a1d86891528cf",
    src: "https://www.highrevenueformat.com/fb4cd2e2ed5edfadff8a1d86891528cf/invoke.js",
  },
};

export default function AdsterraAd(props) {
  const {
    unit,
    adUnit,
    type,
    size,
    className = "",
    style = {},
  } = props || {};

  const unitName = unit || adUnit || type || size || "mobile";
  const aliasMap = {
    mobile320x50: "mobile",
    leaderboard728x90: "leaderboard",
    rectangle300x250: "rectangle",
  };

  const normalizedUnitName = aliasMap[unitName] || unitName;
  const config = AD_UNITS[normalizedUnitName] || AD_UNITS.mobile;

  const adBoxRef = useRef(null);
  const pilotFrameRef = useRef(null);
  const [pilotStatus, setPilotStatus] = useState("Starting pilotâ€¦");
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    function checkViewport() {
      const isPhone = window.matchMedia("(max-width: 760px)").matches;

      // Emergency pause: disable third-party ads on phones.
      // Keep ordinary mobile visitors ad-free; only the explicit pilot may load.
      if (
        isPhone &&
        !(config.width === 320 &&
          new URLSearchParams(window.location.search).get("mobileAdTest") === "1")
      ) {
        setShouldLoad(false);
        return;
      }

      const isMobileSlot =
        className.includes("fg-mobile-ad") ||
        unitName === "mobile" ||
        unitName === "mobileBanner" ||
        unitName === "320x50" ||
        unitName === "mobile320x50";

      const isDesktopSlot =
        className.includes("fg-top-ad") ||
        className.includes("fg-bottom-ad") ||
        className.includes("fg-side-ad") ||
        unitName === "leaderboard" ||
        unitName === "desktop" ||
        unitName === "728x90" ||
        unitName === "leaderboard728x90";

      if (isPhone && isDesktopSlot) {
        setShouldLoad(false);
        return;
      }

      if (!isPhone && isMobileSlot) {
        setShouldLoad(false);
        return;
      }

      setShouldLoad(true);
    }

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, [className, unitName, config.width]);

  useEffect(() => {
    if (!shouldLoad || config.width === 320 || !adBoxRef.current) return;

    const adBox = adBoxRef.current;
    adBox.innerHTML = "";

    window.atOptions = {
      key: config.key,
      format: "iframe",
      height: config.height,
      width: config.width,
      params: {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = config.src;
    script.async = false;

    adBox.appendChild(script);

    return () => {
      adBox.innerHTML = "";
    };
  }, [shouldLoad, config.key, config.src, config.height, config.width]);

  useEffect(() => {
    if (config.width !== 320) return;
    function onPilotMessage(event) {
      if (event.source !== pilotFrameRef.current?.contentWindow) return;
      if (event.data?.type !== "fgh-mobile-ad-pilot-v3") return;
      if (typeof event.data.status === "string") {
        setPilotStatus(event.data.status.slice(0, 180));
      }
    }
    window.addEventListener("message", onPilotMessage);
    return () => window.removeEventListener("message", onPilotMessage);
  }, [config.width]);
  if (!shouldLoad) {
    return null;
  }

  if (config.width === 320) {
    // fgh-mobile-ad-pilot-v3: opt-in diagnostic only. Not live for ordinary phones.
    const adOptions = {
      key: config.key,
      format: "iframe",
      height: config.height,
      width: config.width,
      params: {},
    };

    const adHtml = [
      '<!doctype html><html><head><meta charset="utf-8"></head>',
      '<body style="margin:0;padding:0;overflow:hidden">',
      `<script>
        window.atOptions = ${JSON.stringify(adOptions)};
        window.__fghScriptState = "pending";
        window.__fghPilotReport = function (status) {
          window.parent.postMessage({
            type: "fgh-mobile-ad-pilot-v3",
            status: status
          }, "*");
        };
        window.__fghPilotReport("Frame initialized; requesting script");
      <\/script>`,
      `<script src="${config.src}"
        onload="window.__fghScriptState='loaded';window.__fghPilotReport('Script loaded');"
        onerror="window.__fghScriptState='failed';window.__fghPilotReport('Script failed to load');"><\/script>`,
      `<script>
        (function () {
          function inspect(seconds) {
            var elements = document.querySelectorAll(
              'iframe, img, a, object'
            ).length;
            window.__fghPilotReport(
              'After ' + seconds + 's: script=' +
              window.__fghScriptState +
              ', elements=' + elements
            );
          }
          setTimeout(function () { inspect(2.5); }, 2500);
          setTimeout(function () { inspect(7); }, 7000);
          setTimeout(function () { inspect(12); }, 12000);
        })();
      <\/script>`,
      '</body></html>',
    ].join("");

    return (
      <div className={className} style={{ width: 320, maxWidth: "100%", margin: "0 auto", ...style }}>
        <iframe
          ref={pilotFrameRef}
          title="Sponsored banner diagnostic (opt-in)"
          srcDoc={adHtml}
          sandbox="allow-scripts"
          referrerPolicy="strict-origin-when-cross-origin"
          scrolling="no"
          style={{ width: 320, height: 50, maxWidth: "100%", border: 0, display: "block" }}
          onLoad={() => setPilotStatus((s) => s === "Starting pilotâ€¦" ? "Frame loaded; awaiting script diagnostics" : s)}
        />
        <p style={{ fontSize: 12, lineHeight: 1.4, color: "#777", margin: "8px 0 0", overflowWrap: "anywhere" }}>
          Mobile Adsterra test: {pilotStatus}
        </p>
      </div>
    );
  }
  return (
    <div
      className={className}
      style={{
        width: config.width,
        maxWidth: "100%",
        minHeight: config.height,
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "visible",
        ...style,
      }}
    >
      <div
        ref={adBoxRef}
        style={{
          width: config.width,
          maxWidth: "100%",
          minHeight: config.height,
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "visible",
        }}
      />
    </div>
  );
}




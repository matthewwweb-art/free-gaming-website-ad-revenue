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
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    function checkViewport() {
      const isPhone = window.matchMedia("(max-width: 760px)").matches;

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
  }, [className, unitName]);

  useEffect(() => {
    if (!shouldLoad || !adBoxRef.current) return;

    adBoxRef.current.innerHTML = "";

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

    adBoxRef.current.appendChild(script);

    return () => {
      if (adBoxRef.current) {
        adBoxRef.current.innerHTML = "";
      }
    };
  }, [shouldLoad, config.key, config.src, config.height, config.width]);

  if (!shouldLoad) {
    return null;
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



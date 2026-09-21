"use client";

import { useEffect, useRef } from "react";

const AD_UNITS = {
  mobile320x50: {
    key: "8bf8d49c4871b83adee34e43a6b9b38c",
    width: 320,
    height: 50,
  },
  leaderboard728x90: {
    key: "712e3a8edb4f28a580b41207ffaeec70",
    width: 728,
    height: 90,
  },
  rectangle300x250: {
    key: "fb4cd2e2ed5edfadff8a1d86891528cf",
    width: 300,
    height: 250,
  },
};

export default function AdsterraAd({ type }) {
  const adRef = useRef(null);

  useEffect(() => {
    const ad = AD_UNITS[type];
    const container = adRef.current;

    if (!ad || !container) return;

    container.innerHTML = "";

    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '${ad.key}',
        'format' : 'iframe',
        'height' : ${ad.height},
        'width' : ${ad.width},
        'params' : {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.async = true;
    invokeScript.src = `https://www.highrevenueformat.com/${ad.key}/invoke.js`;

    container.appendChild(optionsScript);
    container.appendChild(invokeScript);

    return () => {
      container.innerHTML = "";
    };
  }, [type]);

  const ad = AD_UNITS[type];

  if (!ad) return null;

  return (
    <div
      aria-label="Advertisement"
      style={{
        width: "100%",
        minHeight: `${ad.height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        ref={adRef}
        style={{
          width: `${ad.width}px`,
          minHeight: `${ad.height}px`,
          maxWidth: "100%",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
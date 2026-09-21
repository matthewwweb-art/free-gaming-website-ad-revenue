"use client";

import { useEffect, useRef } from "react";

export default function MobileAdsterraAd() {
  const adBoxRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 760px)").matches) return;
    if (!adBoxRef.current) return;

    adBoxRef.current.innerHTML = "";

    window.atOptions = {
      key: "8bf8d49c4871b83adee34e43a6b9b38c",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.highrevenueformat.com/8bf8d49c4871b83adee34e43a6b9b38c/invoke.js";
    script.async = false;

    adBoxRef.current.appendChild(script);

    return () => {
      if (adBoxRef.current) {
        adBoxRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="mw-raw-mobile-ad">
      <div ref={adBoxRef} />
    </div>
  );
}

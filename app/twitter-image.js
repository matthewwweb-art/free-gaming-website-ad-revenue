import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "FreeGameHub | Free Browser Games Online";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#111827",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#f97316",
            color: "#ffffff",
            padding: "14px 24px",
            borderRadius: "999px",
            fontSize: "28px",
            fontWeight: 800,
            width: "fit-content",
            marginBottom: "36px",
          }}
        >
          Free Browser Games
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "92px",
            lineHeight: 1,
            fontWeight: 900,
            marginBottom: "24px",
          }}
        >
          FreeGameHub
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "48px",
            lineHeight: 1.15,
            fontWeight: 800,
            color: "#f8fafc",
            marginBottom: "28px",
          }}
        >
          Play Free Online Games Instantly
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "28px",
            lineHeight: 1.45,
            color: "#d1d5db",
            maxWidth: "920px",
          }}
        >
          Free no-download browser games organized by category.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
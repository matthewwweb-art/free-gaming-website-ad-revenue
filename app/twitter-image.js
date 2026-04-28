import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "FreeGameHub | Free Browser Games Online";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 55%, #0f172a 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(249,115,22,0.25), transparent 35%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "60px 70px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              alignSelf: "flex-start",
              background: "#f97316",
              color: "#ffffff",
              padding: "14px 22px",
              borderRadius: "999px",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            Free Browser Games
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                fontSize: 88,
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-2px",
              }}
            >
              FreeGameHub
            </div>

            <div
              style={{
                fontSize: 54,
                lineHeight: 1.1,
                fontWeight: 800,
                color: "#f8fafc",
              }}
            >
              Play Free Online Games Instantly
            </div>

            <div
              style={{
                fontSize: 28,
                lineHeight: 1.45,
                color: "#d1d5db",
                maxWidth: "860px",
              }}
            >
              No downloads. No installs. Browse free browser games by category
              and start playing fast.
            </div>
          </div>

          <div
            style={{
              fontSize: 26,
              color: "#f97316",
              fontWeight: 800,
            }}
          >
            FreeGameHub
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
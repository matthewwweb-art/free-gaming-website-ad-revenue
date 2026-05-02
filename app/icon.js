import { ImageResponse } from "next/og";

const logoUrl =
  "https://cdn.imageurlgenerator.com/uploads/5e0d9325-ad82-4f88-8409-1e063ed7cc9f.png";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "512px",
          height: "512px",
          background: "#111827",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={logoUrl}
          alt="mathew-web Free Game Hub logo"
          style={{
            width: "512px",
            height: "512px",
            objectFit: "cover",
            borderRadius: "999px",
          }}
        />
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
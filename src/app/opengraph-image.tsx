import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(47,107,255,0.45), rgba(0,0,0,0) 60%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 88, fontWeight: 700, color: "#ffffff" }}>Cobalt</span>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2f6bff 0%, #22d3ee 100%)",
            }}
          />
        </div>
        <span style={{ marginTop: 20, fontSize: 32, color: "#93a0b8" }}>
          Model and simulate complex systems fast
        </span>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";
import { hero, site } from "@/content/pl";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "radial-gradient(90% 80% at 80% 0%, #0f3b35 0%, #0b0f11 60%)",
        color: "#e8eef0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "14px",
            background: "#2dd4bf",
            color: "#04201c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
          }}
        >
          AS
        </div>
        <div style={{ fontSize: "34px" }}>{site.name}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ fontSize: "62px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          {hero.headline}
        </div>
        <div
          style={{
            fontSize: "62px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#2dd4bf",
          }}
        >
          {hero.headlineAccent}
        </div>
      </div>
      <div style={{ fontSize: "26px", color: "#9fb0b6" }}>{hero.eyebrow}</div>
    </div>,
    size,
  );
}

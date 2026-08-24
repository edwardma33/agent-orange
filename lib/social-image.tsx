import { ImageResponse } from "next/og";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#111111",
          color: "#e8e8e8",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
          <div
            style={{
              alignItems: "center",
              background: "#ff6b00",
              color: "#111111",
              display: "flex",
              fontFamily: "monospace",
              fontSize: "22px",
              fontWeight: 900,
              height: "54px",
              justifyContent: "center",
              width: "54px",
            }}
          >
            AO
          </div>
          <div style={{ fontFamily: "monospace", fontSize: "26px", fontWeight: 700 }}>
            Agent Orange
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px", maxWidth: "980px" }}>
          <div
            style={{
              color: "#737373",
              fontFamily: "monospace",
              fontSize: "19px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Developer themes / light + dark
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "64px",
              fontWeight: 700,
              letterSpacing: "-0.055em",
              lineHeight: 1.02,
            }}
          >
            Near-black at rest. Color when the work needs a signal.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid #2a2a2a",
            color: "#737373",
            display: "flex",
            fontFamily: "monospace",
            fontSize: "18px",
            justifyContent: "space-between",
            paddingTop: "28px",
          }}
        >
          <div>NEOVIM / WARP / SHADCN / EXPO / CHATGPT</div>
          <div style={{ color: "#ff6b00" }}>#ff6b00</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ansh Adarsh | Software Development Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0F17",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(14, 165, 233, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0) 70%)",
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span
              style={{
                color: "#6ee7b7",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Open to SDE Roles
            </span>
          </div>

          <div
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              fontFamily: "monospace",
            }}
          >
            ansh@portfolio:~ (zsh)
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Ansh Adarsh
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #38bdf8 0%, #818cf8 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Software Development Engineer
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Shipping production-grade web interfaces and scalable backend systems in React, Next.js, TypeScript, and Node.js.
          </div>
        </div>

        {/* Bottom Tech Pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 18px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#e2e8f0",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

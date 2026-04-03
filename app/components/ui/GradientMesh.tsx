"use client";

export default function GradientMesh() {
  return (
    <div className="gradient-mesh" aria-hidden="true">
      <div
        className="blob"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-200px",
          background: "#1B2B4B",
          opacity: 0.4,
        }}
      />
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          top: "20%",
          right: "-100px",
          background: "#C8A96E",
          opacity: 0.06,
          animationDelay: "2s",
        }}
      />
      <div
        className="blob"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-150px",
          left: "30%",
          background: "#243654",
          opacity: 0.3,
        }}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";

// Simulation de makeStyles pour la démo
const useStyles = () => ({
  container: {
    display: "inline-block",
    position: "relative",
  },
  scanText: {
    background: `linear-gradient(
      90deg,
      #fafafa 0%,
      #fafafa 25%,
      rgba(255,255,255,0.95) 35%,
      rgba(255,255,255,1) 40%,
      rgba(255,255,255,1) 50%,
      rgba(255,255,255,1) 60%,
      rgba(255,255,255,0.95) 65%,
      #fafafa 75%,
      #fafafa 100%
    )`,
    backgroundSize: "200% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: "scanText 2.4s ease-out 1",
    fontFamily: "Delicatus, monospace",
    filter: "brightness(1.3) contrast(1.1)",
    textShadow: "0 0 20px rgba(255,255,255,0.6)",
  },
  finalText: {
    color: "#fafafa",
    fontFamily: "Delicatus, monospace",
    transition: "all 0.3s ease-out",
  }
});

export const TextDecrypt = ({ text = "Legal Technology Solutions" }) => {
  const classes = useStyles();
  const [showScan, setShowScan] = useState(true);

  useEffect(() => {
    setShowScan(true);
    const timer = setTimeout(() => setShowScan(false), 2400);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#2f2f2e", minHeight: "100vh" }}>
      <style>{`
        @keyframes scanText {
          0% {
            background-position: 200% 0%;
            filter: brightness(1.3) contrast(1.1);
            text-shadow: 0 0 20px rgba(255,255,255,0.6);
          }
          30% {
            filter: brightness(1.8) contrast(1.3);
            text-shadow: 0 0 30px rgba(255,255,255,0.9), 0 0 40px rgba(255,255,255,0.6);
          }
          70% {
            filter: brightness(2.0) contrast(1.4);
            text-shadow: 0 0 40px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.8);
          }
          100% {
            background-position: 0% 0%;
            filter: brightness(1.5) contrast(1.2);
            text-shadow: 0 0 25px rgba(255,255,255,0.7);
          }
        }
      `}</style>
      
      <div style={{ marginBottom: "3rem" }}>
        <h1 style={{ color: "#fafafa", marginBottom: "1rem", fontFamily: "Delicatus, monospace" }}>
          Effet Shine Amélioré
        </h1>
        <p style={{ color: "#cccccc", fontFamily: "Inter, system-ui", lineHeight: "1.6" }}>
          Animation avec effet lumineux renforcé et texte final en blanc.
        </p>
      </div>

      <div style={{ fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "0.05em" }}>
        <span className={classes.container}>
          <span className={showScan ? classes.scanText : classes.finalText}>
            {text}
          </span>
        </span>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <button 
          onClick={() => setShowScan(true)}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#fafafa",
            color: "#2f2f2e",
            border: "none",
            borderRadius: "4px",
            fontFamily: "Inter, system-ui",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#ffffff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fafafa";
          }}
        >
          Relancer l'animation
        </button>
      </div>

      <div style={{ marginTop: "3rem", color: "#cccccc" }}>
        <h3 style={{ color: "#fafafa", marginBottom: "1rem", fontFamily: "Delicatus, monospace" }}>Améliorations apportées</h3>
        <div style={{ fontFamily: "Inter, system-ui", lineHeight: "1.6" }}>
          <p style={{ marginBottom: "1rem" }}>
            ✓ Effet lumineux renforcé avec brightness et contrast
          </p>
          <p style={{ marginBottom: "1rem" }}>
            ✓ Text-shadow pour un effet de lueur plus réaliste
          </p>
          <p style={{ marginBottom: "1rem" }}>
            ✓ Gradient plus large et plus doux pour le shine
          </p>
          <p>
            ✓ Texte final en blanc (#fafafa) pour une lecture parfaite
          </p>
        </div>
      </div>
    </div>
  );
};

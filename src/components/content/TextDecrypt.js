import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

/*
 * TextDecrypt – pixel‑style headline with a single, slow left‑to‑right scan.
 * – Keeps text always readable (no transparent fill).
 * – Scan overlay animates once (2.4 s) then disappears.
 * – Re‑triggers automatically when the `text` prop changes.
 */

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
  },
  text: {
    position: "relative",
    zIndex: 1,
    color:
      theme.palette.foreground?.default ||
      (theme.palette.type === "dark" ? "#fafafa" : "#2f2f2e"),
    fontFamily: "Delicatus, monospace", // pixel‑style branding
  },
  scan: {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
    animation: "$scan 2.4s ease-out 1", // slow, single pass
    pointerEvents: "none",
  },
  "@keyframes scan": {
    "0%": { left: "-100%" },
    "100%": { left: "100%" },
  },
}));

export const TextDecrypt = ({ text = "", className }) => {
  const classes = useStyles();
  const [showScan, setShowScan] = useState(true);

  useEffect(() => {
    // Trigger scan on mount & whenever text changes
    setShowScan(true);
    const timer = setTimeout(() => setShowScan(false), 2400);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className={`${classes.container} ${className || ""}`.trim()}>
      <span className={classes.text}>{text}</span>
      {showScan && <span className={classes.scan} />} {/* overlay scan */}
    </span>
  );
};

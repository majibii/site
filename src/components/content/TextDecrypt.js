import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    position: "relative",
  },
  scanText: {
    background: `linear-gradient(90deg,
      rgba(0, 0, 0, 0) 0%,
      ${theme.palette.primary.main} 10%,
      ${theme.palette.primary.main} 90%,
      rgba(0, 0, 0, 0) 100%)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "10% 100%",
    backgroundPosition: "-100% 0",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Delicatus, monospace",
    fontSize: "2.2rem",
    animation: "$reveal 2.4s forwards ease-out",
  },
  visibleText: {
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.15rem",
    color: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
    whiteSpace: "pre-line",
  },
  "@keyframes reveal": {
    "0%": {
      backgroundPosition: "-100% 0",
    },
    "100%": {
      backgroundPosition: "100% 0",
    },
  },
}));

export const TextDecrypt = ({ text = "", variant = "egg" }) => {
  const classes = useStyles();
  const [showScan, setShowScan] = useState(true);

  useEffect(() => {
    setShowScan(true);
    const timer = setTimeout(() => setShowScan(false), 2400);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className={classes.container}>
      {variant === "egg" ? (
        <span className={showScan ? classes.scanText : classes.visibleText}>{text}</span>
      ) : (
        <span className={classes.visibleText}>{text}</span>
      )}
    </span>
  );
};

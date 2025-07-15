import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    position: "relative",
  },
  scanText: {
    background: `linear-gradient(
      90deg,
      ${theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e')} 0%,
      rgba(255,255,255,0.45) 50%,
      ${theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e')} 100%
    )`,
    backgroundSize: "200% 100%",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    animation: "$scanText 2.4s ease-out 1",
    fontFamily: "Delicatus, monospace",
  },
  '@keyframes scanText': {
    '0%': {
      backgroundPosition: '200% 0%',
    },
    '100%': {
      backgroundPosition: '0% 0%',
    }
  },
  finalText: {
    color: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
    fontFamily: "Delicatus, monospace",
  }
}));

export const TextDecrypt = ({ text = "" }) => {
  const classes = useStyles();
  const [showScan, setShowScan] = useState(true);

  useEffect(() => {
    setShowScan(true);
    const timer = setTimeout(() => setShowScan(false), 2400);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className={classes.container}>
      <span className={showScan ? classes.scanText : classes.finalText}>
        {text}
      </span>
    </span>
  );
};

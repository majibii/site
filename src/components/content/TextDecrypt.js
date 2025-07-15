import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
  },
  textBase: {
    fontFamily: "Delicatus, monospace",
    position: "relative",
  },
  textRevealed: {
    color: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
    clipPath: "inset(0 100% 0 0)",
    animation: "$revealText 2.4s ease-out 1 forwards",
  },
  textHidden: {
    color: theme.palette.type === 'dark' ? '#2f2f2e' : '#fafafa',
    position: "absolute",
    top: 0,
    left: 0,
    clipPath: "inset(0 0 0 0)",
    animation: "$hideText 2.4s ease-out 1 forwards",
  },
  '@keyframes revealText': {
    '0%': {
      clipPath: "inset(0 100% 0 0)",
    },
    '100%': {
      clipPath: "inset(0 0 0 0)",
    }
  },
  '@keyframes hideText': {
    '0%': {
      clipPath: "inset(0 0 0 0)",
    },
    '100%': {
      clipPath: "inset(0 0 0 100%)",
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
      {showScan ? (
        <span className={classes.textBase}>
          <span className={classes.textRevealed}>
            {text}
          </span>
          <span className={classes.textHidden}>
            {text}
          </span>
        </span>
      ) : (
        <span className={classes.finalText}>
          {text}
        </span>
      )}
    </span>
  );
};

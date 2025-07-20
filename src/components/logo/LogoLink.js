import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logoText: {
        position: "absolute",
        top: theme.spacing(6),
        left: theme.spacing(6),
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "#fafafa",
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: "0.05em",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
    },
}));

export const LogoLink = () => {
    const classes = useStyles();

    return (
        <Typography
            variant="h6"
            className={classes.logoText}
        >
            EggOn Technology
        </Typography>
    );
};

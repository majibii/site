import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "fixed", // Changed from absolute to fixed
        bottom: theme.spacing(3), // Reduced spacing
        right: theme.spacing(3), // Reduced spacing
        height: "2.5rem",
        width: "2.5rem",
        zIndex: 9999, // High z-index
        backgroundColor: theme.palette.background.paper, // Visible background
        border: `2px solid ${theme.palette.primary.main}`, // Border for visibility
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    icon: {
        fontSize: "1.25rem",
    },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const classes = useStyles();

    return (
        <Tooltip
            title={"Toggle theme"}
            placement="left" // Changed from right to left
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label={"Toggle theme"}
                className={classes.iconButton}
            >
                {theme === "light" ? (
                    <Brightness4 className={classes.icon} />
                ) : (
                    <Brightness7 className={classes.icon} />
                )}
            </IconButton>
        </Tooltip>
    );
};

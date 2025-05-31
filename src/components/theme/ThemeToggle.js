import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "fixed", // Changé de absolute à fixed
        bottom: theme.spacing(3), // Réduit l'espacement
        right: theme.spacing(3), // Réduit l'espacement
        height: "2.5rem",
        width: "2.5rem",
        zIndex: 9999, // Ajouter un z-index élevé
        backgroundColor: theme.palette.background.paper, // Arrière-plan visible
        border: `1px solid ${theme.palette.divider}`, // Bordure pour la visibilité
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
            placement="right"
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

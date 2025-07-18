import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    title: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        lineHeight: '1.1',
        color: '#fafafa',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        marginBottom: '1rem',
    },
    subtitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '400',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        lineHeight: '1.6',
        color: 'rgba(250, 250, 250, 0.9)',
        maxWidth: '80ch',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '1rem',
    }
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography
                variant="h2"
                component="h1"
                className={classes.title}
            >
                {Resume.basics.x_title}
            </Typography>
            <Typography
                variant="h5"
                component="h2"
                className={classes.subtitle}
            >
                {Resume.basics.job}
            </Typography>
        </Container>
    );
};

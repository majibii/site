import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ParticleText } from "./ParticleText";
import Resume from "../../settings/resume.json";
import { FirstName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    storyTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        lineHeight: '1.1',
        color: '#fafafa',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    storySubtitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '400',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        lineHeight: '1.6',
        color: 'rgba(250, 250, 250, 0.9)',
        maxWidth: '80ch',
        margin: '0 auto',
        textAlign: 'center',
    }
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <div className={classes.storyTitle}>
                <ParticleText text="EGGON TECHNOLOGY" />
            </div>
            <Typography variant="h5" component="h2" gutterBottom className={classes.storySubtitle}>
                {Resume.basics.job}
            </Typography>
        </Container>
    );
};
import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
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
    },
    storySubtitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '500',
        fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
        lineHeight: '1.6',
        color: 'rgba(250, 250, 250, 0.9)',
    }
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom className={classes.storyTitle}>
                <TextDecrypt text={`${Resume.basics.x_title}`} />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom className={classes.storySubtitle}>
                <TextDecrypt text={`${Resume.basics.job}`} />
            </Typography>
        </Container>
    );
};
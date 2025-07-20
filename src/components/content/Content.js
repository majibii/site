import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShinyText from "./ShinyText";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            textAlign: "center",
        },
    },
    contentLeft: {
        flex: "1",
        maxWidth: "600px",
        "@media (max-width: 768px)": {
            maxWidth: "100%",
        },
    },
    contentRight: {
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 768px)": {
            marginTop: "2rem",
        },
    },
    imagePlaceholder: {
        width: "300px",
        height: "300px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(250, 250, 250, 0.7)",
        fontSize: "1rem",
        textAlign: "center",
        "@media (max-width: 768px)": {
            width: "250px",
            height: "250px",
        },
    },
    title: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        lineHeight: '1.1',
        color: '#fafafa',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        marginBottom: '1rem',
        textAlign: 'left',
        "@media (max-width: 768px)": {
            textAlign: "center",
        },
    },
    subtitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '400',
        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
        lineHeight: '1.6',
        color: 'rgba(250, 250, 250, 0.9)',
        maxWidth: '60ch',
        margin: '0',
        textAlign: 'left',
        marginBottom: '1rem',
        "@media (max-width: 768px)": {
            textAlign: "center",
            margin: "0 auto 1rem auto",
        },
    },
    ctaButton: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50px',
        color: '#fafafa',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginTop: '2rem',
        textTransform: 'none',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
        },
    }
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={classes.main} maxWidth="lg">
            <div className={classes.contentLeft}>
                <ShinyText
                    text="Meet N.O.G, your trusted legal AI"
                    variant="h2"
                    component="h1"
                    className={classes.title}
                    speed={4}
                />
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.subtitle}
                >
                    N.O.G connects to your workflow and brings full transparency to every legal task—alone or with your team.
                </Typography>
                <Button
                    className={classes.ctaButton}
                    onClick={() => {
                        // Action à définir selon vos besoins
                        console.log('Become a Design Partner clicked');
                    }}
                >
                    Become a Design Partner
                </Button>
            </div>
            <div className={classes.contentRight}>
                <div className={classes.imagePlaceholder}>
                    Image placeholder
                    <br />
                    (300x300px)
                </div>
            </div>
        </Container>
    );
};

import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        alignItems: "center",
        gap: "5rem",
        width: "100%",
        maxWidth: "1200px",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "3rem",
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
    },
    contentWrapper: {
        flex: "1",
        minWidth: "0", // Permet au flex item de se rétrécir
        paddingLeft: "4rem", // Décalage vers la gauche
        "@media (max-width: 768px)": {
            paddingLeft: "1.5rem",
        },
    },
    imageWrapper: {
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        paddingRight: "3rem", // Décalage vers la droite
        "@media (max-width: 768px)": {
            width: "100%",
            justifyContent: "center",
            paddingRight: "0",
        },
    },
    heroImage: {
        height: "auto",
        maxWidth: "100%",
        width: "auto",
        maxHeight: "700px", // Agrandir encore plus l'image
        objectFit: "contain",
        "@media (max-width: 768px)": {
            maxHeight: "500px",
        },
    },
    shinyTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 6vw, 4rem)',
        lineHeight: '1.1',
        color: '#b5b5b5a4',
        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: '$shine 5s linear infinite',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        '&.disabled': {
            animation: 'none',
            color: '#fafafa',
            background: 'none',
        },
    },
    subtitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '500',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        lineHeight: '1.6',
        color: 'rgba(250, 250, 250, 0.9)',
        marginBottom: '2rem',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'flex-start', // Alignement à gauche
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: '2rem',
        "@media (max-width: 768px)": {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    primaryButton: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        background: 'rgba(252, 233, 107, 0.9)',
        color: '#2f2f2e',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: '#fce96b',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(252, 233, 107, 0.3)',
        },
    },
    secondaryButton: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#fafafa',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)',
        },
    },
    linkButton: {
        background: 'none',
        border: 'none',
        color: 'rgba(250, 250, 250, 0.8)',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        '&:hover': {
            color: '#fafafa',
        },
        "@media (max-width: 768px)": {
            fontSize: '0.85rem',
        },
    },
    '@keyframes shine': {
        '0%': {
            backgroundPosition: '-200% 0',
        },
        '100%': {
            backgroundPosition: '200% 0',
        },
    },
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="lg">
            <div className={classes.contentWrapper}>
                <Typography variant="h2" component="h1" gutterBottom className={classes.shinyTitle}>
                    Make AI agents your{'\n'}competitive advantage
                </Typography>
                <Typography variant="h5" component="h2" className={classes.subtitle}>
                    Securely connect AI to your company's knowledge{'\n'}with agents that plan, act, and empower every team with trusted
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button className={classes.primaryButton}>
                        Start building
                    </Button>
                    <button className={classes.linkButton}>
                        → More about our Lab and the Nested Orchestrator and Governance project
                    </button>
                </div>
            </div>
            <div className={classes.imageWrapper}>
                <img 
                    src="/Site web NOG.png" 
                    alt="N.O.G. Platform Interface" 
                    className={classes.heroImage}
                />
            </div>
        </Container>
    );
};

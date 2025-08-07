import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        alignItems: "center",
        gap: "4rem", // Augmenté pour plus d'espace entre texte et image
        width: "100%",
        maxWidth: "1600px", // Encore plus large pour utiliser plus la largeur de page
        padding: "0 1rem", // Padding réduit pour utiliser plus d'espace
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "3rem",
            padding: "0 1rem",
        },
    },
    contentWrapper: {
        flex: "1 1 45%", // Réduit à 45% pour laisser plus d'espace à l'image
        minWidth: "0",
        paddingLeft: "6rem", // Légèrement réduit pour décaler le texte un peu plus à gauche
        paddingRight: "3rem", // Augmenté pour plus d'espace avec l'image
        "@media (max-width: 1200px)": {
            paddingLeft: "4rem", // Réduit aussi pour mobile
        },
        "@media (max-width: 768px)": {
            paddingLeft: "0",
            paddingRight: "0",
            flex: "1 1 auto",
            textAlign: "center", // Centre le texte sur mobile
        },
    },
    imageWrapper: {
        flex: "1 1 55%", // Augmenté à 55% pour donner plus d'espace à l'image
        display: "flex",
        alignItems: "flex-start", // Aligne l'image vers le haut
        justifyContent: "flex-end", // Aligne l'image vers la droite
        paddingTop: "2rem", // Ajoute un padding en haut pour décaler vers le haut
        paddingLeft: "3rem", // Augmenté pour plus d'espace avec le texte
        paddingRight: "2rem", // Réduit pour rapprocher de la marge droite
        "@media (max-width: 1200px)": {
            paddingRight: "1.5rem",
            paddingTop: "1rem",
        },
        "@media (max-width: 768px)": {
            width: "100%",
            justifyContent: "center",
            alignItems: "center", // Recentre sur mobile
            paddingLeft: "0",
            paddingRight: "0",
            paddingTop: "0",
            flex: "1 1 auto",
        },
    },
    heroImage: {
        height: "auto",
        maxWidth: "100%",
        width: "auto",
        maxHeight: "850px", // Augmenté significativement pour une image plus grosse
        objectFit: "contain",
        "@media (max-width: 1200px)": {
            maxHeight: "750px",
        },
        "@media (max-width: 768px)": {
            maxHeight: "500px",
        },
    },
    shinyTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 5.2vw, 3.6rem)', // Légèrement réduit pour assurer 2 lignes
        lineHeight: '1.1',
        color: '#b5b5b5a4',
        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: '$shine 5s linear infinite',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        textAlign: "left", // Force l'alignement à gauche
        '&.disabled': {
            animation: 'none',
            color: '#fafafa',
            background: 'none',
        },
        "@media (max-width: 768px)": {
            textAlign: "center",
        },
    },
    subtitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '500',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        lineHeight: '1.6',
        color: 'rgba(250, 250, 250, 0.9)',
        marginBottom: '2rem',
        textAlign: "left", // Force l'alignement à gauche
        "@media (max-width: 768px)": {
            textAlign: "center",
        },
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'flex-start',
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
        textAlign: 'left', // Force l'alignement à gauche
        '&:hover': {
            color: '#fafafa',
        },
        "@media (max-width: 768px)": {
            fontSize: '0.85rem',
            textAlign: 'center',
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
        <Container component="main" className={`${classes.main}`} maxWidth={false}>
            <div className={classes.contentWrapper}>
                <Typography variant="h2" component="h1" gutterBottom className={classes.shinyTitle}>
                    Make AI agents your {'\n'}competitive advantage
                </Typography>
                <Typography variant="h5" component="h2" className={classes.subtitle}>
                    Securely connect AI to your company's knowledge{'\n'}with agents that plan, act, and empower every team with trusted.
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button className={classes.primaryButton}>
                        Start building
                    </Button>
                    <button className={classes.linkButton}>
                        → EggOn Lab — The team dedicated to making AI agents fully insurable.
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

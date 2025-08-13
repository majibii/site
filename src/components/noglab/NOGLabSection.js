import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './NOGLabSection.css';

const useStyles = makeStyles((theme) => ({
    heroSection: {
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            minHeight: 'calc(100vh - 70px)',
        },
    },
    main: {
        marginTop: "auto",
        marginBottom: "auto", 
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "4rem",
        width: "100%",
        maxWidth: "1600px",
        padding: "0 1rem",
        marginLeft: "auto",
        marginRight: "auto",
        boxSizing: 'border-box',
        overflow: 'hidden',
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "3rem",
            padding: "0 1rem",
        },
    },
    contentWrapper: {
        flex: "1 1 45%",
        minWidth: "0",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        "@media (max-width: 1200px)": {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
        },
        "@media (max-width: 768px)": {
            paddingLeft: "0",
            paddingRight: "0",  
            flex: "1 1 auto",
            width: "100%",
            maxWidth: "100%",
            textAlign: "center",
        },
    },
    imageWrapper: {
        flex: "1 1 55%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "2rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        "@media (max-width: 1200px)": {
            paddingRight: "1.5rem",
            paddingTop: "1rem",
        },
        "@media (max-width: 768px)": {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "0",
            paddingRight: "0",
            paddingTop: "0",
            flex: "1 1 auto",
        },
    },
    heroImage: {
        height: "auto",
        maxWidth: "100%",
        width: "100%",
        maxHeight: "850px",
        objectFit: "contain",
        "@media (max-width: 1200px)": {
            maxHeight: "750px",
        },
        "@media (max-width: 768px)": {
            maxHeight: "500px",
        },
    },
    interactivePhrase: {
        background: 'none',
        border: 'none',
        color: 'rgba(250, 250, 250, 0.8)',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        textAlign: 'left',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        marginBottom: '1rem',
        display: 'block',
        position: 'relative',
        '&:hover': {
            color: '#fafafa',
        },
        "@media (max-width: 768px)": {
            fontSize: '0.85rem',
            textAlign: 'center',
        },
    },
    shinyTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
        lineHeight: '1.1',
        color: '#b5b5b5a4',
        background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: '$shine 5s linear infinite',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        textAlign: "left",
        marginBottom: '1.5rem',
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
        textAlign: "left",
        "@media (max-width: 768px)": {
            textAlign: "center",
        },
    },
    secondaryTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '600',
        fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
        lineHeight: '1.2',
        color: '#ffffff',
        marginBottom: '1.5rem',
        textAlign: "left",
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
        marginTop: '1rem',
        "@media (max-width: 768px)": {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    primaryButton: {
        padding: '0.6rem 1.5rem',
        fontSize: '0.85rem',
        fontWeight: '700',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        letterSpacing: '0.1em',
        textTransform: 'none',
        background: 'transparent',
        color: '#fce96b',
        border: '1px solid #fce96b',
        borderRadius: '50px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s ease-out',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '180px',
        height: '40px',
        '&:hover': {
            background: '#fce96b',
            color: '#2f2f2e',
        },
        '&:active': {
            transform: 'translateY(-1px)',
        },
        "@media (max-width: 768px)": {
            minWidth: '160px',
            fontSize: '0.8rem',
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
    mainContentTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
        lineHeight: '1.1',
        color: '#ffffff',
        textAlign: "center",
        marginBottom: '3rem',
        "@media (max-width: 768px)": {
            textAlign: "center"
        }
    }
}));

const NOGLabSection = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {/* Hero Section */}
      <section className={classes.heroSection}>
        <div className={classes.main}>
          
          {/* ZONE DE CONTENU (GAUCHE) */}
          <div className={classes.contentWrapper}>
            <Typography variant="h2" component="h1" className={classes.shinyTitle}>
              → EggOn Make your Future AI
            </Typography>

            <Typography variant="h2" component="h1" className={classes.shinyTitle}>
              Rendez vos Agents IA Assurables
            </Typography>
            
            <Typography variant="h5" component="h2" className={classes.subtitle}>
              Nous construisons un avenir où les professionnels, en particulier du droit, de la finance... peuvent déployer des agents IA certifiés conformes, auditables et assurables.
            </Typography>
            
            <div className={classes.buttonContainer}>
              <button className={classes.primaryButton}>
                <div className="button-content">
                  <span className="arrow-left">→</span>
                  <span className="button-text">
                    noglab.cta→
                    <span className="arrow-right">→</span>
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* ZONE IMAGE (DROITE) */}
          <div className={classes.imageWrapper}>
            <img 
              src="/lab2.png" 
              alt="N.O.G. Lab Platform Interface" 
              className={classes.heroImage}
            />
          </div>

        </div>
      </section>

      {/* Content Section */}
      <div className="noglab-section">
        <div className="noglab-container">
          <Typography variant="h1" component="h1" className={classes.mainContentTitle}>
            {t('noglab.title') || 'N.O.G. Lab'}
          </Typography>
          <p className="noglab-body-text">
            {t('noglab.description') || 'Description du N.O.G. Lab'}
          </p>
        </div>
      </div>
    </>
  );
};

export default NOGLabSection;

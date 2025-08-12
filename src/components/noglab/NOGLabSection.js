import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './NOGLabSection.css';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        display: "flex",
        alignItems: "center",
        gap: "4rem",
        width: "100%",
        maxWidth: "1600px",
        padding: "0 1rem",
        marginLeft: "auto",
        marginRight: "auto",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "3rem",
            padding: "0 1rem",
        },
    },
    contentWrapper: {
        flex: "1 1 45%",
        minWidth: "0",
        paddingLeft: "6rem",
        paddingRight: "3rem",
        "@media (max-width: 1200px)": {
            paddingLeft: "4rem",
        },
        "@media (max-width: 768px)": {
            paddingLeft: "0",
            paddingRight: "0",
            flex: "1 1 auto",
            textAlign: "center",
        },
    },
    imageWrapper: {
        flex: "1 1 55%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingTop: "2rem",
        paddingLeft: "3rem",
        paddingRight: "2rem",
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
        width: "auto",
        maxHeight: "850px",
        objectFit: "contain",
        "@media (max-width: 1200px)": {
            maxHeight: "750px",
        },
        "@media (max-width: 768px)": {
            maxHeight: "500px",
        },
    },
    // AJOUTONS LE TITRE HERO (à gauche)
    heroTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
        lineHeight: '1.1',
        color: '#ffffff',
        textAlign: "left",
        marginBottom: '1rem',
        "@media (max-width: 768px)": {
            textAlign: "center",
        },
    },
    // AJOUTONS LA PHRASE INTERACTIVE
    interactivePhrase: {
        background: 'none',
        border: 'none',
        color: 'rgba(250, 250, 250, 0.8)',
        fontSize: '0.9rem',
        fontWeight: '500',
        textAlign: 'left',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        marginBottom: '1.5rem',
        display: 'block',
        "@media (max-width: 768px)": {
            fontSize: '0.85rem',
            textAlign: 'center',
        },
    },
    // TITRE PRINCIPAL DE CONTENU (version simple sans animation pour commencer)
    mainContentTitle: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
        lineHeight: '1.1',
        color: '#ffffff', // Couleur simple pour commencer
        textAlign: "center",
        marginBottom: '3rem',
        "@media (max-width: 768px)": {
            textAlign: "center"
        }
    },
    // BOUTON SIMPLE
    primaryButton: {
        padding: '0.6rem 1.5rem',
        fontSize: '0.85rem',
        fontWeight: '700',
        background: 'transparent',
        color: '#fce96b',
        border: '1px solid #fce96b',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: '#fce96b',
            color: '#2f2f2e',
        }
    }
}));

const NOGLabSection = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
        <Container component="main" className={`${classes.main}`} maxWidth={false} disableGutters>
          <div className={classes.contentWrapper}>
            {/* Phrase interactive simple */}
            <div className={classes.interactivePhrase}>
              → EggOn Make your AI Agents
            </div>

            {/* Titres du hero */}
            <Typography variant="h2" component="h1" gutterBottom className={classes.heroTitle}>
              Make your AI Agents Insurable
            </Typography>
            <Typography variant="h2" component="h1" gutterBottom className={classes.heroTitle}>
              {t('noglab.heroTitle')}
            </Typography>

            {/* Bouton simple */}
            <button className={classes.primaryButton}>
              {t('noglab.heroCta')}
            </button>
          </div>
          <div className={classes.imageWrapper}>
            <img 
              src="/lab2.png" 
              alt="N.O.G. Lab Platform Interface" 
              className={classes.heroImage}
            />
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <div className="noglab-section">
        <div className="noglab-container">
          {/* Titre principal avec couleur simple */}
          <Typography variant="h1" component="h1" className={classes.mainContentTitle}>
            {t('noglab.title')}
          </Typography>

          {/* Sections de contenu de base */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">
              {t('noglab.legitimacy.title')}
            </span>
          </div>

          <p className="noglab-body-text">
            {t('noglab.legitimacy.paragraph1')}
          </p>

          <p className="noglab-body-text">
            Version améliorée - maintenant avec tous les éléments de base ! ✅
          </p>
        </div>
      </div>
    </>
  );
};

export default NOGLabSection;

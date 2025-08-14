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
        paddingLeft: "6rem",
        paddingRight: "3rem",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        "@media (max-width: 1200px)": {
            paddingLeft: "4rem",
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
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingTop: "2rem",
        paddingLeft: "3rem",
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
        marginBottom: '1.5rem',
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
        
        // Conteneur pour le contenu du bouton
        '& .button-content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
            zIndex: 2,
        },
        
        // Texte du bouton
        '& .button-text': {
            position: 'relative',
            transition: 'all 0.4s ease-out',
            transform: 'translateX(0)',
            display: 'flex',
            alignItems: 'center',
        },
        
        // Flèche par défaut (à droite)
        '& .arrow-right': {
            marginLeft: '8px',
            transition: 'all 0.4s ease-out',
            opacity: 1,
            transform: 'translateX(0)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
        },
        
        // Flèche pour le hover (cachée à gauche du texte)
        '& .arrow-left': {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.4s ease-out',
            opacity: 0,
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
        },
        
        '&:hover': {
            background: '#fce96b',
            color: '#2f2f2e',
            
            // Le texte se repositionne plus à droite pour centrer l'ensemble
            '& .button-text': {
                transform: 'translateX(22px)',
            },
            
            // La flèche de droite disparaît
            '& .arrow-right': {
                opacity: 0,
                transform: 'translateX(8px)',
            },
            
            // La flèche de gauche apparaît avec position ajustée pour le centrage
            '& .arrow-left': {
                opacity: 1,
                transform: 'translate(-67px, -50%)',
            },
        },
        
        '&:active': {
            transform: 'translateY(-1px)',
        },
        
        "@media (max-width: 768px)": {
            minWidth: '160px',
            fontSize: '0.8rem',
            
            '&:hover': {
                '& .button-text': {
                    transform: 'translateX(22px)',
                },
            },
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
            <div className={classes.interactivePhrase}>
              {t('noglab.heroPhrase')} {t('noglab.heroDropdownOption')}
            </div>

            <Typography variant="h2" component="h1" className={classes.shinyTitle}>
              {t('noglab.heroTitle')}
            </Typography>
            
            <Typography variant="h5" component="h2" className={classes.subtitle}>
              {t('noglab.heroSubtitle')}
            </Typography>
            
            <div className={classes.buttonContainer}>
              <button className={classes.primaryButton}>
                <div className="button-content">
                  <span className="arrow-left">→</span>
                  <span className="button-text">
                    {t('noglab.heroCta')}
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

      {/* Content Section - Garde le contenu existant du Lab */}
      <div className="noglab-section">
        <div className="noglab-container">
          <Typography variant="h1" component="h1" className={classes.mainContentTitle}>
            {t('noglab.title')}
          </Typography>
          
          <p className="noglab-body-text">
            {t('noglab.intro1')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.intro2')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.intro3')}
          </p>

          {/* Section Legitimacy */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">{t('noglab.legitimacy.title')}</span>
          </div>
          
          <p className="noglab-body-text">
            {t('noglab.legitimacy.paragraph1')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.legitimacy.paragraph2')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.legitimacy.paragraph3')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.legitimacy.paragraph4')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.legitimacy.paragraph5')}
          </p>

          {/* Section AI for Everyone */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">{t('noglab.aiForEveryone.title')}</span>
          </div>
          
          <p className="noglab-body-text">
            {t('noglab.aiForEveryone.paragraph1')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.aiForEveryone.paragraph2')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.aiForEveryone.paragraph3')}
          </p>

          {/* Section Principles */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">{t('noglab.principles.title')}</span>
          </div>
          
          <div className="noglab-principle-title">{t('noglab.principles.explicability.title')}</div>
          <p className="noglab-body-text">
            {t('noglab.principles.explicability.description')}
          </p>
          
          <div className="noglab-principle-title">{t('noglab.principles.accessibility.title')}</div>
          <p className="noglab-body-text">
            {t('noglab.principles.accessibility.description')}
          </p>
          
          <div className="noglab-principle-title">{t('noglab.principles.recall.title')}</div>
          <p className="noglab-body-text">
            {t('noglab.principles.recall.description')}
          </p>
          
          <div className="noglab-principle-title">{t('noglab.principles.speed.title')}</div>
          <p className="noglab-body-text">
            {t('noglab.principles.speed.description')}
          </p>

          {/* Section Growth */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">{t('noglab.growth.title')}</span>
          </div>
          
          <p className="noglab-body-text">
            {t('noglab.growth.paragraph1')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.growth.paragraph2')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.growth.paragraph3')}
          </p>
          
          <p className="noglab-body-text">
            {t('noglab.growth.paragraph4')}
          </p>

          {/* Section Measure */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">{t('noglab.measure.title')}</span>
          </div>
          
          <p className="noglab-body-text">
            {t('noglab.measure.description')}
          </p>

          {/* Section Partners */}
          <div className="noglab-section-subtitle">
            <span className="noglab-section-subtitle-text">{t('noglab.partners.title')}</span>
          </div>
          
          <p className="noglab-body-text">
            {t('noglab.partners.description')}
            <span className="noglab-design-partner-link">{t('noglab.partners.link')}</span>
          </p>

        </div>
      </div>
    </>
  );
};

export default NOGLabSection;

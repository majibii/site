import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import NOGProjectSection from '../components/nog/NOGProjectSection';
import ScrollTransition from '../components/nog/ScrollTransition';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
  },
  homeSection: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
  }
}));

export const Home = () => {
  const classes = useStyles();

  // Contenu de la section d'accueil existante
  const homeContent = (
    <div className={classes.homeSection}>
      <DisplacementSphere />
      <LogoLink />
      <Content />
      <ThemeToggle />
      <Hidden smDown>
        <SocialIcons />
      </Hidden>
      <Hidden mdUp>
        <SpeedDials />
      </Hidden>
      <FooterText />
    </div>
  );

  // Contenu de la section NOG Project avec un wrapper pour l'intégration
  const noProjectContent = (
    <div style={{ 
      minHeight: '100vh',
      position: 'relative'
    }}>
      <NOGProjectSection />
    </div>
  );

  return (
    <ScrollTransition
      homeContent={homeContent}
      noProjectContent={noProjectContent}
      theme="dark" // Changez en "light" si nécessaire selon votre thème
      transitionThreshold={0.15} // Ajustez selon vos préférences (0.1 à 0.3 recommandé)
    />
  );
};

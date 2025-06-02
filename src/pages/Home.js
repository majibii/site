import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import NOGProjectSection from '../components/nog/NOGProjectSection';
import StorySection from '../components/story/StorySection';
import CollectionSection from '../components/collection/CollectionSection';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme/ThemeToggle';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  // Fond de sphères qui couvre tout le contenu
  sphereBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -999,
    pointerEvents: 'none',
  },
  // Section Home - reste en 100vh pour occuper tout l'écran initial
  homeSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  // Sections de contenu - hauteur automatique pour s'enchainer naturellement
  contentSection: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    // Suppression du minHeight: '100vh' pour éviter les grands espaces
  }
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Fond de sphères fixe qui reste visible partout */}
      <div className={classes.sphereBackground}>
        <DisplacementSphere />
      </div>

      {/* Section Home principale - garde sa hauteur plein écran */}
      <motion.div 
        className={classes.homeSection}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <LogoLink />
        <Content />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <FooterText />
      </motion.div>

      {/* Bouton Theme */}
      <ThemeToggle />

      {/* Section NOG Project - s'enchaine directement après Home */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <NOGProjectSection />
      </motion.div>

      {/* Section Story - s'enchaine directement */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <StorySection />
      </motion.div>

      {/* Section Collection - s'enchaine directement */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <CollectionSection />
      </motion.div>
    </div>
  );
};

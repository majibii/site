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
    margin: 0, // Ajout
    padding: 0, // Ajout
  },
  sphereBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -999,
    pointerEvents: 'none',
  },
  homeSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    margin: 0, // Ajout
    padding: 0, // Ajout
  },
  contentSection: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    margin: 0, // Ajout
    padding: 0, // Ajout
  }
}));

export const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {/* Fond de sphères fixe */}
      <div className={classes.sphereBackground}>
        <DisplacementSphere />
      </div>

      {/* Section Home principale */}
      <div className={classes.homeSection}>
        <LogoLink />
        <Content />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <FooterText />
      </div>

      {/* Bouton Theme */}
      <ThemeToggle />

      {/* Sections de contenu qui s'enchainent - SANS MARGIN/PADDING SUPPLÉMENTAIRES */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ marginTop: 0, paddingTop: 0 }} // Force l'absence d'espacement
      >
        <NOGProjectSection />
      </motion.div>

      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ marginTop: 0, paddingTop: 0 }} // Force l'absence d'espacement
      >
        <StorySection />
      </motion.div>

      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ marginTop: 0, paddingTop: 0 }} // Force l'absence d'espacement
      >
        <CollectionSection />
      </motion.div>
    </div>
  );
};

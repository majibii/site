import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
// import NOGProjectSection from '../components/nog/NOGProjectSection';
import StorySection from '../components/story/StorySection';
import CollectionSection from '../components/collection/CollectionSection';
import { motion } from 'framer-motion';

// Composant de test inline
const NOGProjectSection = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'red', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <h1 style={{ color: 'white', fontSize: '3rem' }}>
        TEST NOG INLINE - SI VOUS VOYEZ CECI, LE PROBLÈME EST DANS L'IMPORT
      </h1>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    width: '100%',
  },
  homeSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
  },  
  contentSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
  }
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Section Home principale */}
      <motion.div 
        className={classes.homeSection}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <DisplacementSphere />
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

      {/* Test avec composant inline */}
      <div className={classes.contentSection}>
        <NOGProjectSection />
      </div>

      <div className={classes.contentSection}>
        <StorySection />
      </div>

      <div className={classes.contentSection}>
        <CollectionSection />
      </div>
    </div>
  );
};

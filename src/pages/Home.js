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
    margin: 0,
    padding: 0,
    position: 'relative',
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
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  contentSection: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    margin: 0,
    padding: 0,
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

      {/* Sections de contenu - VERSION DEBUG TEMPORAIRE */}
      <div className={classes.contentSection}>
        <NOGProjectSection />
      </div>

      <div 
        className={classes.contentSection}
        style={{ 
          minHeight: '100vh', 
          backgroundColor: 'rgba(255, 0, 0, 0.1)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem'
        }}
      >
        <div>STORY SECTION - TEST</div>
      </div>

      <div 
        className={classes.contentSection}
        style={{ 
          minHeight: '100vh', 
          backgroundColor: 'rgba(0, 255, 0, 0.1)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem'
        }}
      >
        <div>COLLECTION SECTION - TEST</div>
      </div>
    </div>
  );
};

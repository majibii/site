import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';

// Testez CHACUN de ces imports un par un (commentez les autres)
// import NOGProjectSection from '../components/nog/NOGProjectSection.js'; // Avec .js
import NOGProjectSection from '../components/nog/NOGProjectSection'; // Sans .js (recommandé)
// import { default as NOGProjectSection } from '../components/nog/NOGProjectSection'; // Import explicite
// import * as NOGModule from '../components/nog/NOGProjectSection'; // Import namespace

import StorySection from '../components/story/StorySection';
import CollectionSection from '../components/collection/CollectionSection';
import { motion } from 'framer-motion';

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

  // TEST: Loggez ce que vous importez
  console.log('NOGProjectSection:', NOGProjectSection);
  // console.log('NOGModule:', NOGModule); // Si vous utilisez l'import namespace

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

      {/* Test section */}
      <div className={classes.contentSection}>
        <div style={{ padding: '2rem', backgroundColor: 'yellow', textAlign: 'center' }}>
          <h2>Test d'import NOG Section</h2>
          {NOGProjectSection ? (
            <NOGProjectSection />
          ) : (
            <p style={{ color: 'red', fontSize: '2rem' }}>
              NOGProjectSection est undefined - problème d'import !
            </p>
          )}
        </div>
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

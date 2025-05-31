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
    border: '2px solid red', // DEBUG: bordure rouge pour voir les sections
    margin: '10px 0', // DEBUG: espacement pour voir les sections
  }
}));

export const Home = () => {
  const classes = useStyles();

  // DEBUG: Console logs pour vérifier le rendu
  console.log('Home component rendering');
  console.log('NOGProjectSection:', NOGProjectSection);
  console.log('StorySection:', StorySection);
  console.log('CollectionSection:', CollectionSection);

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

      {/* DEBUG: Texte simple pour tester */}
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'yellow', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        TEST SECTION - Si vous voyez ceci, le problème n'est pas dans Home.js
      </div>

      {/* Section NOG Project */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
          <h2>Avant NOGProjectSection</h2>
        </div>
        <NOGProjectSection />
        <div style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
          <h2>Après NOGProjectSection</h2>
        </div>
      </motion.div>

      {/* Section Story */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div style={{ padding: '20px', backgroundColor: 'pink' }}>
          <h2>Section Story</h2>
        </div>
        <StorySection />
      </motion.div>

      {/* Section Collection */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div style={{ padding: '20px', backgroundColor: 'orange' }}>
          <h2>Section Collection</h2>
        </div>
        <CollectionSection />
      </motion.div>
    </div>
  );
};

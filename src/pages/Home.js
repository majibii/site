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

console.log('Home.js chargé');
console.log('NOGProjectSection importé:', NOGProjectSection);

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
  console.log('Home composant rendu');

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

      {/* TEST: Section NOG Project avec debug */}
      <div style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}>
        <h2>DEBUG: Avant NOGProjectSection</h2>
        <p>Si vous voyez ceci, le problème est dans NOGProjectSection</p>
      </div>

      <motion.div 
        className={classes.contentSection}
        style={{ 
          border: '5px solid red', 
          backgroundColor: 'yellow',
          position: 'relative',
          zIndex: 999
        }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {NOGProjectSection ? <NOGProjectSection /> : <div style={{backgroundColor: 'orange', padding: '20px'}}>NOGProjectSection est undefined!</div>}
      </motion.div>

      <div style={{ backgroundColor: 'blue', padding: '20px', color: 'white' }}>
        <h2>DEBUG: Après NOGProjectSection</h2>
        <p>Si vous voyez ceci, NOGProjectSection s'est rendu</p>
      </div>

      {/* Section Story */}
      <motion.div 
        className={classes.contentSection}
        style={{ 
          border: '5px solid green', 
          backgroundColor: 'lightblue',
          position: 'relative',
          zIndex: 999
        }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StorySection />
      </motion.div>

      {/* Section Collection */}
      <motion.div 
        className={classes.contentSection}
        style={{ 
          border: '5px solid purple', 
          backgroundColor: 'lightgreen',
          position: 'relative',
          zIndex: 999
        }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CollectionSection />
      </motion.div>
    </div>
  );
};

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

      {/* Section NOG Project avec transition */}
      <motion.div 
        className={classes.contentSection}
        style={{
          position: 'relative',
          background: 'linear-gradient(to bottom, rgba(252, 233, 107, 0) 0%, rgba(252, 233, 107, 0.3) 20%, rgba(252, 233, 107, 0.7) 50%, rgba(252, 233, 107, 1) 80%, rgba(252, 233, 107, 1) 100%)',
          zIndex: 2
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Animation 3D en arrière-plan qui continue */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.3
        }}>
          <DisplacementSphere />
        </div>
        
        <NOGProjectSection />
      </motion.div>

      {/* Section Story */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <StorySection />
      </motion.div>

      {/* Section Collection */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <CollectionSection />
      </motion.div>
    </div>
  );
};

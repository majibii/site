import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// CHANGEMENT : Utilisez notre composant Brain personnalisé
import BrainComponent from '../components/background/BrainComponent';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import NOGProjectSection from '../components/nog/NOGProjectSection';
import StorySection from '../components/story/StorySection';
import CollectionSection from '../components/collection/CollectionSection';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme/ThemeToggle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  homeSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
  },
  brainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentLayer: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
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
        {/* Container pour le cerveau 3D en arrière-plan */}
        <div className={classes.brainContainer}>
          <BrainComponent 
            width={800}
            height={600}
            style={{ 
              maxWidth: '100%',
              maxHeight: '100%',
            }} 
          />
        </div>
        
        {/* Contenu par-dessus le cerveau */}
        <div className={classes.contentLayer}>
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
      </motion.div>

      {/* Bouton de basculement de thème */}
      <ThemeToggle />

      {/* Section NOG Project */}
      <motion.div 
        className={classes.contentSection}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
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

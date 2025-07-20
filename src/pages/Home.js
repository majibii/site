import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dither from '../components/background/Dither';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import NOGProjectSection from '../components/nog/NOGProjectSection';
import StorySection from '../components/story/StorySection';
import CollectionSection from '../components/collection/CollectionSection';
import LegalStackSection from '../components/legalStack/LegalStackSection';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import ParallaxSection from '../components/parallax/ParallaxSection';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  ditherBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
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
    padding: 0
  }
}));

export const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.ditherBackground}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className={classes.homeSection}>
        <ParallaxSection offset={30} speed={0.3}>
          <LogoLink />
        </ParallaxSection>
        <ParallaxSection offset={50} speed={0.5}>
          <Content />
        </ParallaxSection>
        <Hidden smDown>
          <ParallaxSection offset={20} speed={0.2}>
            <SocialIcons />
          </ParallaxSection>
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>

      <ThemeToggle />

      <div className={classes.contentSection}>
        <ParallaxSection offset={40} speed={0.4}>
          <NOGProjectSection />
        </ParallaxSection>
      </div>

      <div className={classes.contentSection}>
        <ParallaxSection offset={60} speed={0.6}>
          <StorySection />
        </ParallaxSection>
      </div>

      <div className={classes.contentSection}>
        <ParallaxSection offset={35} speed={0.35}>
          <LegalStackSection />
        </ParallaxSection>
      </div>

      <div className={classes.contentSection}>
        <ParallaxSection offset={45} speed={0.45}>
          <CollectionSection />
        </ParallaxSection>
      </div>
    </div>
  );
};
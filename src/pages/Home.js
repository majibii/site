import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import NOGProjectSection from '../components/nog/NOGProjectSection';
import StorySection from '../components/story/StorySection';
import ScrollTransition from '../components/nog/ScrollTransition';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
  },
  homeSection: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
  }
}));

export const Home = () => {
  const classes = useStyles();

  const homeContent = (
    <div className={classes.homeSection}>
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
    </div>
  );

  return (
    <div className={classes.root}>
      <ScrollTransition
        homeContent={homeContent}
        noProjectContent={<NOGProjectSection />}
        theme="dark"
        transitionThreshold={0.15}
      />
      <StorySection />
    </div>
  );
};
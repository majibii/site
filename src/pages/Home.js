import React from 'react';
import Header from '../components/header/Header';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { makeStyles } from '@material-ui/core/styles';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import NOGProjectSection from '../components/nog/NOGProjectSection';
import CollectionSection from '../components/collection/CollectionSection';
import LegalStackSection from '../components/legalStack/LegalStackSection';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import Footer from '../components/footer/Footer';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  homeSection: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    margin: 0,
    paddingTop: '80px', // CORRIGÉ : Correspond exactement à la hauteur du header
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      paddingTop: '70px', // CORRIGÉ : Correspond à la hauteur mobile du header
    },
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
      <Header />
      <div className={classes.homeSection}>
        <LogoLink />
        <Content />
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>

      <ThemeToggle />

      <div className={classes.contentSection}>
        <NOGProjectSection />
      </div>

      <div className={classes.contentSection}>
        <LegalStackSection />
      </div>

      <div className={classes.contentSection}>
        <CollectionSection />
      </div>

      <Footer />
    </div>
  );
};

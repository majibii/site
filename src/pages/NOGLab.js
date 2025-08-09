import React from 'react';
import Header from '../components/header/Header';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import NOGLabSection from '../components/noglab/NOGLabSection';
import { makeStyles } from '@material-ui/core/styles';

// MODIFICATION Étape 2.1 : Styles identiques à la page eggon pour uniformiser le header
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.foreground.default,
    minHeight: '100vh',
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

export const NOGLab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Header identique à celui de la page eggon */}
      <Header />
      <ThemeToggle />
      
      <div className={classes.contentSection}>
        <NOGLabSection />
      </div>
    </div>
  );
};

export default NOGLab;

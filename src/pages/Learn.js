import React from 'react';
import Header from '../components/header/Header';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import LeranSection from '../components/noglab/LearnSection';
import { makeStyles } from '@material-ui/core/styles';

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

export const Learn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <ThemeToggle />
      
      <div className={classes.contentSection}>
        <LearnSection />
      </div>
    </div>
  );
};

export default Learn;

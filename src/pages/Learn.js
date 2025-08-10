import React from 'react';
import Header from '../components/header/Header';
import LearnSection from '../components/learn/learnsection';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer/Footer';

// CORRECTION : Styles identiques à la page Home pour uniformiser le header
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  contentSection: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    margin: 0,
    padding: 0,
    // AJOUT : Padding top pour compenser la hauteur du header comme sur Home
    paddingTop: '80px',
    '@media (max-width: 768px)': {
      paddingTop: '70px',
    },
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

            <Footer />
        </div>
    );
};

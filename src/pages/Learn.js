import React from 'react';
import Header from '../components/header/Header';
import LearnSection from '../components/learn/learnsection';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer/Footer';

// CORRECTION : Suppression du paddingTop qui causait les conflits
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
    // SUPPRIMÉ: paddingTop car c'est le Hero qui gère maintenant
  }
}));

export const Learn = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Header />
            
            <div className={classes.contentSection}>
                <LearnSection />
            </div>

            <Footer />
        </div>
    );
};

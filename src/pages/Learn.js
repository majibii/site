import React from 'react';
import Header from '../components/header/Header';
import LearnSection from '../components/learn/learnsection';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { makeStyles } from '@material-ui/core/styles';

// MODIFICATION Étape 3 : Ajout des styles pour correspondre à la page eggon
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
            {/* MODIFICATION Étape 3.1 : Utilisation du même Header que la page eggon */}
            <Header />
            <ThemeToggle />
            
            <div className={classes.contentSection}>
                <LearnSection />
            </div>
        </div>
    );
};

import React from 'react';
import Header from '../components/header/Header';
import NOGLabSection from '../components/noglab/NOGLabSection'; // DÉCOMMENTÉ
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer/Footer';

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
    paddingTop: '80px',
    '@media (max-width: 768px)': {
      paddingTop: '70px',
    },
  }
}));

export const NOGLab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      
      <div className={classes.contentSection}>
        <NOGLabSection /> {/* REMIS */}
      </div>

      <Footer />
    </div>
  );
};

export default NOGLab;

import React from 'react';
import Header from '../components/header/Header';
// import NOGLabSection from '../components/noglab/NOGLabSection';
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
  },
  testDiv: {
    padding: '100px 20px',
    textAlign: 'center',
    color: 'white',
    minHeight: '50vh'
  }
}));

export const NOGLab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      
      <div className={classes.contentSection}>
        {/* NOGLabSection temporairement commenté pour tester */}
        {/* <NOGLabSection /> */}
        
        {/* Test simple */}
        <div className={classes.testDiv}>
          <h1>Test NOGLab Page</h1>
          <p>Si vous voyez ceci sans erreur, le problème vient de NOGLabSection</p>
          <p>Vérifiez la console - il ne devrait plus y avoir d'erreur Framer Motion</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NOGLab;

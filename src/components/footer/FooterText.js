import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import ShinyText from '../content/ShinyText';
import { HeartIcon } from '../content/SponsorButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href='https://github.com/sponsors/JoHoop'
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <HeartIcon />
      <ShinyText 
        text=" Sponsor"
        variant="body1"
        speed={3}
      />
    </Link>
  );
};

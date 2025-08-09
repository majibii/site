import React from 'react';
import { Link, Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: 'absolute',
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '1.25rem',
  },
}));

export const SocialIcons = () => {
  const classes = useStyles();

  // Remplacez les données du resume.json par des données statiques
  const socialItems = [
    {
      network: 'GitHub',
      username: 'EggOn Technology',
      url: 'https://github.com/MarinaEgg', // Remplacez par votre URL GitHub
      x_icon: 'fab fa-github' // Icône Font Awesome pour GitHub
    },
    {
      network: 'LinkedIn',
      username: 'EggOn Technology',
      url: 'https://linkedin.com/in/votre-profil', // Remplacez par votre URL LinkedIn
      x_icon: 'fab fa-linkedin'
    },
    {
      network: 'Twitter',
      username: 'EggOn Technology',
      url: 'https://twitter.com/votre-compte', // Remplacez par votre URL Twitter
      x_icon: 'fab fa-twitter'
    }
  ].map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title={socialItem.username}
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label={socialItem.network}
          className={classes.iconButton}
        >
          <i className={`${classes.icon} ${socialItem.x_icon}`}></i>
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return <div className={classes.socialIcons}>{socialItems}</div>;
};

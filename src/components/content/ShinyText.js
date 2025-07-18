import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shinyText: {
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    display: 'inline-block',
    position: 'relative',
    '&::before': {
      content: 'attr(data-text)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      color: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
      zIndex: -1,
      WebkitTextFillColor: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
    },
  },
  shinyTextAnimated: {
    animation: '$shine linear infinite',
  },
  '@keyframes shine': {
    '0%': {
      backgroundPosition: '-200% 0',
    },
    '100%': {
      backgroundPosition: '200% 0',
    },
  },
}));

const ShinyText = ({ 
  text, 
  disabled = false, 
  speed = 3, 
  variant = 'body1', 
  className = '',
  ...props 
}) => {
  const classes = useStyles();
  
  const animationDuration = `${speed}s`;
  
  const combinedClassName = `
    ${classes.shinyText} 
    ${!disabled ? classes.shinyTextAnimated : ''} 
    ${className}
  `.trim();

  return (
    <Typography
      variant={variant}
      className={combinedClassName}
      data-text={text}
      style={{
        animationDuration: !disabled ? animationDuration : undefined,
      }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default ShinyText;
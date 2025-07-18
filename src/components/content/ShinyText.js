import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  shinyText: {
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'inherit',
    animation: '$shine 3s ease-in-out infinite',
    display: 'inline-block',
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
  
  const shinyStyle = disabled ? {} : {
    animationDuration,
  };

  return (
    <Typography
      variant={variant}
      className={`${disabled ? '' : classes.shinyText} ${className}`}
      style={shinyStyle}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default ShinyText;
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    shimmerContainer: {
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
    },
    shimmerText: {
        background: `linear-gradient(90deg, 
            transparent 0%, 
            transparent 40%, 
            ${theme.palette.primary.main} 50%, 
            transparent 60%, 
            transparent 100%)`,
        backgroundSize: '200% 100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        animation: '$shimmer 2s ease-in-out',
        animationFillMode: 'forwards',
    },
    '@keyframes shimmer': {
        '0%': {
            backgroundPosition: '-200% 0',
            color: 'transparent',
        },
        '50%': {
            backgroundPosition: '0% 0',
            color: 'transparent',
        },
        '100%': {
            backgroundPosition: '200% 0',
            color: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
        },
    },
    finalText: {
        color: theme.palette.foreground?.default || (theme.palette.type === 'dark' ? '#fafafa' : '#2f2f2e'),
    }
}));

export const TextDecrypt = (props) => {
    const classes = useStyles();
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 2000); // Match animation duration

        return () => clearTimeout(timer);
    }, [props.text]);

    // Reset animation when text changes
    useEffect(() => {
        setIsAnimating(true);
    }, [props.text]);

    return (
        <p className={classes.shimmerContainer}>
            <span className={isAnimating ? classes.shimmerText : classes.finalText}>
                {props.text || ""}
            </span>
            &nbsp;
        </p>
    );
};
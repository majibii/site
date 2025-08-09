import React from 'react';
import Header from '../components/header/Header';
import DisplacementSphere from '../components/background/DisplacementSphere';
import LearnSection from '../components/learn/learnsection';
import { ThemeToggle } from '../components/theme/ThemeToggle';

export const Learn = () => {
    return (
        <div>
            <DisplacementSphere />
            <Header />
            <LearnSection />
            <ThemeToggle />
        </div>
    );
};

import React from 'react';
import Header from '../components/header/Header';
import LearnSection from '../components/learn/learnsection';
import { ThemeToggle } from '../components/theme/ThemeToggle';

export const Learn = () => {
    return (
        <div>
            <Header />
            <LearnSection />
            <ThemeToggle />
        </div>
    );
};

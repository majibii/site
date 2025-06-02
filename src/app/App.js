import React, { lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import NOGProjectSection from '../components/nog/NOGProjectSection';
import StorySection from '../components/story/StorySection';
import CollectionSection from '../components/collection/CollectionSection';

const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Hook pour gérer le scroll et les sections
const useSectionScroll = () => {
  const [showNOGSection, setShowNOGSection] = useState(false);
  const [showStorySection, setShowStorySection] = useState(false);
  const [showCollectionSection, setShowCollectionSection] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Affiche la section NOG après 30% de scroll
      if (scrollY > windowHeight * 0.3) {
        setShowNOGSection(true);
      } else {
        setShowNOGSection(false);
      }
      
      // Section Story après 80% de scroll
      if (scrollY > windowHeight * 0.8) {
        setShowStorySection(true);
      } else {
        setShowStorySection(false);
      }
      
      // Section Collection après 130% de scroll
      if (scrollY > windowHeight * 1.3) {
        setShowCollectionSection(true);
      } else {
        setShowCollectionSection(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { showNOGSection, showStorySection, showCollectionSection };
};

// Composant Enhanced Home qui inclut toutes les sections
const EnhancedHome = () => {
  const { showNOGSection, showStorySection, showCollectionSection } = useSectionScroll();
  
  return (
    <div>
      {/* Section Home originale */}
      <div style={{ minHeight: '100vh' }}>
        <Home />
      </div>
      
      {/* Section NOG avec animation */}
      <AnimatePresence>
        {showNOGSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            style={{ minHeight: '100vh' }}
          >
            <NOGProjectSection />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Section Story avec animation */}
      <AnimatePresence>
        {showStorySection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            style={{ minHeight: '100vh' }}
          >
            <StorySection />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Section Collection avec animation */}
      <AnimatePresence>
        {showCollectionSection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            style={{ minHeight: '100vh' }}
          >
            <CollectionSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const App = () => {
    logCredits();
    
    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Switch>
                    <Route path="/" exact component={EnhancedHome} />
                    <Route path="/resume" component={Resume} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};
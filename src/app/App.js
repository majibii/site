import React, { lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import NOGProjectSection from '../components/nog/NOGProjectSection';
const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Hook pour gérer le scroll et les sections
const useSectionScroll = () => {
  const [showNOGSection, setShowNOGSection] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Affiche la section NOG après 80% de scroll de la première section
      if (scrollY > windowHeight * 0.8) {
        setShowNOGSection(true);
      } else {
        setShowNOGSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showNOGSection;
};

// Composant Enhanced Home qui inclut la section NOG
const EnhancedHome = () => {
  const showNOGSection = useSectionScroll();

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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <NOGProjectSection />
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

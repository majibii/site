import React, { lazy, useState } from "react";
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

const EnhancedHome = () => {
  return (
    <div>
      {/* Section Home originale */}
      <div style={{ minHeight: '100vh' }}>
        <Home />
      </div>
      
      {/* Section NOG avec animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{ minHeight: '100vh' }}
      >
        <NOGProjectSection />
      </motion.div>
      
      {/* Section Story avec animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{ minHeight: '100vh' }}
      >
        <StorySection />
      </motion.div>
      
      {/* Section Collection avec animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{ minHeight: '100vh' }}
      >
        <CollectionSection />
      </motion.div>
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
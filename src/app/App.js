import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";

const Resume = lazy(() => import("../pages/Resume"));
const NOGLab = lazy(() => import("../pages/NOGLab"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Composant de fallback pour le chargement
const LoadingFallback = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem'
    }}>
        Chargement...
    </div>
);

export const App = () => {
    logCredits();
    
    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Suspense fallback={<LoadingFallback />}>
                    <Switch>
                        {/* Utilise directement Home qui contient déjà toutes les sections */}
                        <Route path="/" exact component={Home} />
                        <Route path="/nog-lab" component={NOGLab} />
                        <Route path="/resume" component={Resume} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </Suspense>
            </Router>
        </ThemeProvider>
    );
};

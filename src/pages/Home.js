import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import Resume from "../pages/Resume";
import NOGLab from "../pages/NOGLab";
import PageNotFound from "../pages/PageNotFound";

export const App = () => {
    logCredits();
    
    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Switch>
                    {/* Utilise directement Home qui contient déjà toutes les sections */}
                    <Route path="/" exact component={Home} />
                    <Route path="/nog-lab" component={NOGLab} />
                    <Route path="/resume" component={Resume} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

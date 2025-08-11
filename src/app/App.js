import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import { NOGLab } from "../pages/NOGLab";
import { Learn } from "../pages/Learn";
import { Contact } from "../pages/Contact";
import { PageNotFound } from "../pages/PageNotFound";

// 🌍 Import i18n pour activer les traductions
import "../i18n/i18n";

export const App = () => {
    logCredits();
    
    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/nog-lab" component={NOGLab} />
                    <Route path="/learn" component={Learn} />
                    <Route path="/contact" component={Contact} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

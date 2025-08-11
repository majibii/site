import React, { createContext } from "react";
import { DarkTheme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Dark mode permanent - pas de state ni de toggle
    const theme = "dark";

    return (
        <ThemeContext.Provider
            value={{
                theme,
                // Pas de toggleTheme - dark mode permanent
            }}
        >
            <MuiThemeProvider theme={DarkTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
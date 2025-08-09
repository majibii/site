import { primary } from "../components/theme/Themes";

export const logCredits = () => {
    const logStyle = [
        `color: ${primary}`,
        "font-size: 2.5em",
        "font-weight: 500",
        "padding: 80px 0px 80px 0px",
        "text-shadow: 2px 2px 4px rgba(0,0,0,0.3)"
    ].join(";");
    
    const infoStyle = [
        `color: rgba(250, 250, 250, 0.8)`,
        "font-size: 1.2em",
        "font-weight: 400",
        "margin-top: 20px"
    ].join(";");
    
    console.log(
        `%c EggOn Technology © ${new Date().getFullYear()}`,
        logStyle
    );
    
    console.log(
        `%c GitHub: github.com/MarinaEgg | AI Agents & Future Tech`,
        infoStyle
    );
    
    console.log(
        `%c Making AI agents your competitive advantage`,
        [
            `color: ${primary}`,
            "font-size: 1em",
            "font-weight: 400",
            "font-style: italic"
        ].join(";")
    );
};

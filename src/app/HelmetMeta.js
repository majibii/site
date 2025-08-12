import React from "react";
import Helmet from "react-helmet";
import Settings from "../settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>EggOn Technology | AI Governance & Traceability</title>
            <meta name="author" content="EggOn Technology" />
            <meta name="description" content="Next-generation AI orchestrator for governance and traceability. Building certified compliant, auditable, and insurable AI agents for professionals in law, finance, and healthcare." />
            <meta name="keywords" content="AI governance, AI traceability, artificial intelligence, compliance, audit, insurance, orchestrator, N.O.G, nested orchestration, explainable AI, law tech, fintech, AI" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="EggOn Technology | AI Governance & Traceability" />
            <meta property="og:description" content="Next-generation AI orchestrator for governance and traceability. Building certified compliant, auditable, and insurable AI agents." />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="EggOn Technology | AI Governance & Traceability" />
            <meta name="twitter:description" content="Next-generation AI orchestrator for governance and traceability. Building certified compliant, auditable, and insurable AI agents." />
        </Helmet>
    );
};

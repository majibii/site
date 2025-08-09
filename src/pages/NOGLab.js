import React from 'react';
import Header from '../components/header/Header';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeToggle } from '../components/theme/ThemeToggle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.foreground.default,
    minHeight: '100vh',
  },
  contentSection: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
    margin: 0,
    padding: '120px 0 80px 0',
    '@media (max-width: 768px)': {
      padding: '100px 0 60px 0',
    },
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    '@media (max-width: 768px)': {
      padding: '0 1rem',
    },
  },
  // Main title with shiny effect
  shinyTitle: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '700',
    fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
    lineHeight: '1.1',
    color: '#b5b5b5a4',
    background: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    animation: '$shine 5s linear infinite',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    marginBottom: '3rem',
    '&.disabled': {
      animation: 'none',
      color: theme.palette.foreground.default,
      background: 'none',
    },
  },
  // Subtitle with horizontal lines (same as "What are agents?")
  sectionSubtitle: {
    position: 'relative',
    textAlign: 'center',
    margin: '4rem 0 3rem 0',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      zIndex: 1,
    },
  },
  sectionSubtitleText: {
    backgroundColor: theme.palette.background.default,
    padding: '0 2rem',
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: theme.palette.foreground.default,
    position: 'relative',
    zIndex: 2,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  // Body text matching site typography
  bodyText: {
    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
    lineHeight: '1.8',
    color: 'rgba(250, 250, 250, 0.85)',
    marginBottom: '1.5rem',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '400',
    textAlign: 'left',
    maxWidth: '100%',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  // Bold text styling
  boldText: {
    fontWeight: '700',
    color: theme.palette.foreground.default,
  },
  // Special styling for principle titles
  principleTitle: {
    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
    lineHeight: '1.8',
    color: theme.palette.foreground.default,
    marginBottom: '0.5rem',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '700',
    textAlign: 'left',
  },
  // Link styling
  designPartnerLink: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  '@keyframes shine': {
    '0%': {
      backgroundPosition: '-200% 0',
    },
    '100%': {
      backgroundPosition: '200% 0',
    },
  },
}));

export const NOGLab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <ThemeToggle />
      
      <div className={classes.contentSection}>
        <div className={classes.container}>
          {/* Main Title */}
          <h1 className={classes.shinyTitle}>
            Working EggOn Lab
          </h1>

          {/* Introduction */}
          <p className={classes.bodyText}>
            EggOn Lab is dedicated to the governance and traceability of artificial intelligence agents through a next-generation orchestrator.
          </p>
          <p className={classes.bodyText}>
            We are building a future where professionals — especially in law, finance, and healthcare — can deploy AI agents that are certified compliant, auditable, and insurable.
          </p>
          <p className={classes.bodyText}>
            We are engineers and builders who have worked for some of the most secure tech companies, including iManage, and for industry leaders as Traceability System Experts and Quality Engineers.
          </p>

          {/* Subtitle 1 */}
          <div className={classes.sectionSubtitle}>
            <span className={classes.sectionSubtitleText}>
              <span className={classes.boldText}>Legitimacy in AI Is About More Than Right or Wrong Answers</span>
            </span>
          </div>

          <p className={classes.bodyText}>
            AI capabilities are advancing at an unprecedented pace, but one major problem remains: opacity.
          </p>

          <p className={classes.bodyText}>
            This opacity is even more concerning as AI enters sectors that are not like any other industries: justice and healthcare. These are the foundations of a free and fair society.
          </p>
          <p className={classes.bodyText}>
            Every day, courts make decisions that change the course of human lives. Such decisions demand empathy, experience, and context — but also a process that feels legitimate to those affected.
          </p>
          <p className={classes.bodyText}>
            No family should ever wonder if they lost custody because of a poorly calibrated algorithm. No patient should ever doubt that their treatment was decided after genuine human evaluation.
          </p>

          <p className={classes.bodyText}>
            The real issue isn't simply whether AI gives the right or wrong answer — it's doubt. And once doubt sets in, it erodes trust and undermines the legitimacy of our systems.
          </p>

          {/* Subtitle 2 */}
          <div className={classes.sectionSubtitle}>
            <span className={classes.sectionSubtitleText}>
              <span className={classes.boldText}>AI That Works for Everyone</span>
            </span>
          </div>

          <p className={classes.bodyText}>
            Knowledge of how AI agents operate and make decisions must not remain concentrated in a few labs.
          </p>
          <p className={classes.bodyText}>
            This lack of transparency slows adoption in high-responsibility professions, and the absence of explainability makes insuring AI-driven processes impossible.
          </p>
          <p className={classes.bodyText}>
            To bridge this gap, we created N.O.G (Nested Orchestration & Governance) — a platform designed to understand, audit, and certify AI agents.
          </p>

          {/* Subtitle 3 */}
          <div className={classes.sectionSubtitle}>
            <span className={classes.sectionSubtitleText}>
              <span className={classes.boldText}>Solid Legitimacy Matters</span>
            </span>
          </div>

          <div className={classes.principleTitle}>
            <span className={classes.boldText}>Explicability</span>
          </div>
          <p className={classes.bodyText}>
            Every task executed by an AI agent must be understandable and explainable. Users must be able to trace the full reasoning and verify its legitimacy.
          </p>

          <div className={classes.principleTitle}>
            <span className={classes.boldText}>Accessibility</span>
          </div>
          <p className={classes.bodyText}>
            Explainability only matters if it's shared. Results and supporting evidence must be easy to access for everyone impacted by a decision.
          </p>

          <div className={classes.principleTitle}>
            <span className={classes.boldText}>Recall</span>
          </div>
          <p className={classes.bodyText}>
            If bias, error, or manipulation is detected, the system must allow for immediate recall — just like product recalls in critical industries. Governed AI should never be irreversible.
          </p>

          <div className={classes.principleTitle}>
            <span className={classes.boldText}>Speed</span>
          </div>
          <p className={classes.bodyText}>
            Compliance must not slow innovation. Explainable AI should be as fast as it is powerful, accelerating adoption while building trust.
          </p>

          {/* Subtitle 4 */}
          <div className={classes.sectionSubtitle}>
            <span className={classes.sectionSubtitleText}>
              <span className={classes.boldText}>Growth Step by Step</span>
            </span>
          </div>

          <p className={classes.bodyText}>
            <span className={classes.boldText}>Engineering and product co-design</span> enable iterative improvement through deployment, while great products and partner feedback strengthen each other. Products keep us grounded in reality and guide us to solve the most impactful problems with our design partners.
          </p>

          <p className={classes.bodyText}>
            <span className={classes.boldText}>Empirical and iterative approach</span> to explainable AI is the most effective and reliable measures come from a combination of proactive development and feedback from careful real-world testing with experienced professionals.
          </p>

          <p className={classes.bodyText}>
            We plan to contribute to AI legitimacy by (1) maintaining a high security bar — preventing attacks, (2) sharing best practices and frameworks for building safe AI systems with our clients, and (3) accelerating new types of certifications on alignment by sharing our new reference standards and agent specifications.
          </p>

          <p className={classes.bodyText}>
            We believe that methods developed for today's systems, such as effective red-teaming and post-deployment monitoring, provide valuable insights that will extend to future, more explainable systems.
          </p>

          {/* Subtitle 5 */}
          <div className={classes.sectionSubtitle}>
            <span className={classes.sectionSubtitleText}>
              <span className={classes.boldText}>Measure what truly matters</span>
            </span>
          </div>

          <p className={classes.bodyText}>
            we will focus on understanding how our systems create genuine value in the real world. The most important breakthroughs often come from rethinking our objectives, not just optimizing existing metrics.
          </p>

          {/* Subtitle 6 */}
          <div className={classes.sectionSubtitle}>
            <span className={classes.sectionSubtitleText}>
              <span className={classes.boldText}>Be Design Partners</span>
            </span>
          </div>

          <p className={classes.bodyText}>
            If you are a law firm or compliance professional interested in becoming a design partner, click here: <span className={classes.designPartnerLink}>Be Design Partners</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NOGLab;
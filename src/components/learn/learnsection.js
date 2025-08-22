import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { LearnHero } from './LearnHero';
import './learnsection.css';

const useStyles = makeStyles((theme) => ({
    heroSection: {
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            minHeight: 'calc(100vh - 70px)',
        },
    },
    academySection: {
        paddingTop: '0',
    },
}));

const LearnSection = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  // Course data structure - EXACTE COPIE de l'ancien qui fonctionnait
  const coursesList = [
    {
      id: 'intro-ia',
      category: t('academie.categories.foundations'),
      title: t('academie.courses.foundations.introIA'),
      status: 'completed'
    },
    {
      id: 'limites-llm',
      category: t('academie.categories.foundations'),
      title: t('academie.courses.foundations.limitesLLM'),
      status: 'completed'
    },
    {
      id: 'depasser-limites',
      category: t('academie.categories.foundations'),
      title: t('academie.courses.foundations.depasserLimites'),
      status: 'completed'
    },
    {
      id: 'prompts-initiation',
      category: t('academie.categories.promptEngineering'),
      title: t('academie.courses.promptEngineering.promptsInitiation'),
      status: 'completed'
    },
    {
      id: 'prompts-juridiques',
      category: t('academie.categories.promptEngineering'),
      title: t('academie.courses.promptEngineering.promptsJuridiques'),
      status: 'completed'
    },
    {
      id: 'prompts-systemes',
      category: t('academie.categories.promptEngineering'),
      title: t('academie.courses.promptEngineering.promptsSystemes'),
      status: 'completed'
    },
    {
      id: 'affaire-weber',
      category: t('academie.categories.caseStudies'),
      title: t('academie.courses.caseStudies.affaireWeber'),
      status: 'completed'
    },
    {
      id: 'ai-risk-management',
      category: t('academie.categories.securityGovernance'),
      title: t('academie.courses.securityGovernance.aiRiskManagement'),
      status: 'ongoing'
    },
    {
      id: 'ai-act-compliance',
      category: t('academie.categories.securityGovernance'),
      title: t('academie.courses.securityGovernance.aiActCompliance'),
      status: 'ongoing'
    },
    {
      id: 'auditability-explainability',
      category: t('academie.categories.securityGovernance'),
      title: t('academie.courses.securityGovernance.auditabilityExplainability'),
      status: 'ongoing'
    }
  ];

  const renderCourseButtons = (status) => {
    if (status === 'completed') {
      return (
        <>
          <button className="course-btn released">
            {t('academie.buttons.completed')}
          </button>
          <button className="course-btn secondary">
            {t('academie.buttons.catchUp')}
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="course-btn in-progress">
            {t('academie.buttons.ongoing')}
          </button>
          <button className="course-btn secondary">
            {t('academie.buttons.enroll')}
          </button>
        </>
      );
    }
  };

  const renderSocialIcons = () => (
    <div className="social-icons">
      {/* Email */}
      <div className="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>

      {/* Instagram */}
      <div className="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </div>

      {/* More options (central button with special styling) */}
      <div className="social-icon more">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="19" cy="12" r="1"/>
          <circle cx="5" cy="12" r="1"/>
        </svg>
      </div>

      {/* Twitter */}
      <div className="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      </div>

      {/* TikTok */}
      <div className="social-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section - Nouveau composant LearnHero */}
      <section className={classes.heroSection}>
        <LearnHero />
      </section>

      {/* Content Section - Section existante avec les cours */}
      <div className={`learn-section ${classes.academySection}`}>
        <div className="learn-container">
          {/* Header Section */}
          <div className="academie-header">
            <div className="academie-small-title">
              {t('academie.sectionLabel')}
            </div>
            <h1 className="academie-main-title">
              {t('academie.mainTitle')}
            </h1>
          </div>

          {/* Two Column Introduction */}
          <div className="academie-intro-container">
            <div className="academie-intro-text">
              {t('academie.intro.left')}
            </div>
            <div className="academie-intro-text">
              {t('academie.intro.right')}
            </div>
          </div>

          {/* Course Roadmap - Liste simple comme l'ancienne version */}
          <div className="academie-roadmap">
            {coursesList.map((course, index) => (
              <div 
                key={course.id} 
                className="course-line"
                style={{ animationDelay: `${(index + 1) * 0.05}s` }}
              >
                <div className="course-left">
                  <div className="course-category-label">
                    {course.category}
                  </div>
                  <h3 className="course-title-main">
                    {course.title}
                  </h3>
                </div>
                
                <div className="course-right">
                  {renderCourseButtons(course.status)}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="academie-social-section">
            {renderSocialIcons()}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnSection;

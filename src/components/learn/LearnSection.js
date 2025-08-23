import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { LearnHero } from './LearnHero';
// CORRECTION : Nom exact du fichier CSS
import './LearnSection.css';

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
  
  // Debug: Vérifier si les traductions se chargent
  console.log('LearnSection - Traductions chargées:', {
    sectionLabel: t('academie.sectionLabel'),
    mainTitle: t('academie.mainTitle'),
    introLeft: t('academie.intro.left')
  });

  // Course data structure
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
          <button className="course-btn completed">
            {t('academie.buttons.completed')}
          </button>
          <button className="course-btn catch-up">
            {t('academie.buttons.catchUp')}
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="course-btn ongoing">
            {t('academie.buttons.ongoing')}
          </button>
          <button className="course-btn enroll">
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

  // Group courses by category
  const groupedCourses = coursesList.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});
  
  // Debug: Vérifier le groupement des cours
  console.log('LearnSection - Cours groupés:', groupedCourses);

  return (
    <>
      {/* Hero Section */}
      <section className={classes.heroSection}>
        <LearnHero />
      </section>

      {/* Content Section */}
      <div className={`learn-section ${classes.academySection}`}>
        <div className="learn-container">
          {/* Debug: Section visible avec fallback CSS inline */}
          <div style={{ 
            background: 'red', 
            color: 'white', 
            padding: '10px', 
            margin: '10px 0',
            fontSize: '14px',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            DEBUG: Section IA Académie chargée - {Object.keys(groupedCourses).length} catégories - CSS: {document.styleSheets.length} stylesheets
          </div>
          
          {/* Header Section */}
          <div className="academie-header" style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div className="academie-small-title" style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#FFFF99',
              marginBottom: '1rem',
              opacity: 0.9
            }}>
              {t('academie.sectionLabel') || 'ACADÉMIE'}
            </div>
            <h1 className="academie-main-title" style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '3rem',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}>
              {t('academie.mainTitle') || 'IA ACADÉMIE'}
            </h1>
          </div>

          {/* Two Column Introduction */}
          <div className="academie-intro-container" style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '3rem',
            marginBottom: '5rem',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <div className="academie-intro-text" style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 400
            }}>
              {t('academie.intro.left') || 'Description de l\'académie IA...'}
            </div>
            <div className="academie-intro-text" style={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 400
            }}>
              {t('academie.intro.right') || 'Suite de la description...'}
            </div>
          </div>

          {/* Course Roadmap */}
          <div className="academie-roadmap" style={{maxWidth: '1000px', margin: '0 auto'}}>
            {Object.entries(groupedCourses).map(([category, courses]) => (
              <div key={category} className="course-category" style={{marginBottom: '3rem'}}>
                <h2 className="category-header" style={{
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: 'clamp(1.3rem, 2.2vw, 1.6rem)',
                  fontWeight: 700,
                  color: '#FFFF99',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {category}
                </h2>
                {courses.map((course, index) => (
                  <div key={course.id} className="course-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.2rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    flexDirection: window.innerWidth > 768 ? 'row' : 'column',
                    alignItems: window.innerWidth > 768 ? 'center' : 'flex-start',
                    gap: window.innerWidth > 768 ? '0' : '1rem'
                  }}>
                    <div className="course-content" style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      width: window.innerWidth > 768 ? 'auto' : '100%'
                    }}>
                      <span className="course-number" style={{
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'rgba(255, 255, 255, 0.6)',
                        minWidth: '40px'
                      }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="course-title" style={{
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                        fontWeight: 600,
                        color: '#ffffff',
                        margin: 0,
                        lineHeight: 1.3
                      }}>
                        {course.title}
                      </h3>
                    </div>
                    <div className="course-actions" style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'center',
                      marginLeft: window.innerWidth > 768 ? '2rem' : '0',
                      width: window.innerWidth > 768 ? 'auto' : '100%',
                      justifyContent: window.innerWidth > 768 ? 'flex-start' : 'flex-end'
                    }}>
                      {renderCourseButtons(course.status)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="academie-social-section" style={{
            marginTop: '4rem',
            textAlign: 'center'
          }}>
            {renderSocialIcons()}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnSection;

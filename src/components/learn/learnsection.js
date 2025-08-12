import React from 'react';
import { useTranslation } from 'react-i18next';
import './learnsection.css';

const LearnSection = () => {
  const { t } = useTranslation();
  return (
    <div className="learn-section">
      <div className="learn-container">
        {/* Main Title */}
        <h1 className="learn-shiny-title">
          {t('learn.title')}
        </h1>

        {/* Introduction */}
        <p className="learn-body-text">
          {t('learn.intro1')}
        </p>
        <p className="learn-body-text">
          {t('learn.intro2')}
        </p>
        <p className="learn-body-text">
          {t('learn.intro3')}
        </p>

        {/* Subtitle 1 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            {t('learn.legitimacy.title')}
          </span>
        </div>

        <p className="learn-body-text">
          {t('learn.legitimacy.paragraph1')}
        </p>

        <p className="learn-body-text">
          {t('learn.legitimacy.paragraph2')}
        </p>
        <p className="learn-body-text">
          {t('learn.legitimacy.paragraph3')}
        </p>
        <p className="learn-body-text">
          {t('learn.legitimacy.paragraph4')}
        </p>

        <p className="learn-body-text">
          {t('learn.legitimacy.paragraph5')}
        </p>

        {/* Subtitle 2 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            {t('learn.aiForEveryone.title')}
          </span>
        </div>

        <p className="learn-body-text">
          {t('learn.aiForEveryone.paragraph1')}
        </p>
        <p className="learn-body-text">
          {t('learn.aiForEveryone.paragraph2')}
        </p>
        <p className="learn-body-text">
          {t('learn.aiForEveryone.paragraph3')}
        </p>

        {/* Subtitle 3 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            {t('learn.principles.title')}
          </span>
        </div>

        <div className="learn-principle-title">
          <span className="learn-bold-text">{t('learn.principles.explicability.title')}</span>
        </div>
        <p className="learn-body-text">
          {t('learn.principles.explicability.description')}
        </p>

        <div className="learn-principle-title">
          <span className="learn-bold-text">{t('learn.principles.accessibility.title')}</span>
        </div>
        <p className="learn-body-text">
          {t('learn.principles.accessibility.description')}
        </p>

        <div className="learn-principle-title">
          <span className="learn-bold-text">{t('learn.principles.recall.title')}</span>
        </div>
        <p className="learn-body-text">
          {t('learn.principles.recall.description')}
        </p>

        <div className="learn-principle-title">
          <span className="learn-bold-text">{t('learn.principles.speed.title')}</span>
        </div>
        <p className="learn-body-text">
          {t('learn.principles.speed.description')}
        </p>

        {/* Subtitle 4 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            {t('learn.growth.title')}
          </span>
        </div>

        <p className="learn-body-text">
          <span className="learn-bold-text">Engineering and product co-design</span> {t('learn.growth.paragraph1')}
        </p>

        <p className="learn-body-text">
          <span className="learn-bold-text">Empirical and iterative approach</span> {t('learn.growth.paragraph2')}
        </p>

        <p className="learn-body-text">
          {t('learn.growth.paragraph3')}
        </p>

        <p className="learn-body-text">
          {t('learn.growth.paragraph4')}
        </p>

        {/* Subtitle 5 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            {t('learn.measure.title')}
          </span>
        </div>

        <p className="learn-body-text">
          {t('learn.measure.description')}
        </p>

        {/* Subtitle 6 */}
        <div className="learn-section-subtitle">
          <span className="learn-section-subtitle-text">
            {t('learn.partners.title')}
          </span>
        </div>

        <p className="learn-body-text">
          {t('learn.partners.description')} <span className="learn-design-partner-link">{t('learn.partners.link')}</span>.
        </p>
      </div>
    </div>
  );
};

export default LearnSection;

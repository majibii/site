import React from 'react';
import { useTranslation } from 'react-i18next';
import './NOGLabSection.css';

const NOGLabSection = () => {
  const { t } = useTranslation();

  return (
    <div className="noglab-section">
      <div className="noglab-container">
        {/* Main Title */}
        <h1 className="noglab-shiny-title">
          {t('noglab.title')}
        </h1>

        {/* Introduction */}
        <p className="noglab-body-text">
          {t('noglab.intro1')}
        </p>
        <p className="noglab-body-text">
          {t('noglab.intro2')}
        </p>
        <p className="noglab-body-text">
          {t('noglab.intro3')}
        </p>

        {/* Subtitle 1 */}
        <div className="noglab-section-subtitle">
          <span className="noglab-section-subtitle-text">
            {t('noglab.legitimacy.title')}
          </span>
        </div>

        <p className="noglab-body-text">
          {t('noglab.legitimacy.paragraph1')}
        </p>

        <p className="noglab-body-text">
          {t('noglab.legitimacy.paragraph2')}
        </p>
        <p className="noglab-body-text">
          {t('noglab.legitimacy.paragraph3')}
        </p>
        <p className="noglab-body-text">
          {t('noglab.legitimacy.paragraph4')}
        </p>

        <p className="noglab-body-text">
          {t('noglab.legitimacy.paragraph5')}
        </p>

        {/* Subtitle 2 */}
        <div className="noglab-section-subtitle">
          <span className="noglab-section-subtitle-text">
            {t('noglab.aiForEveryone.title')}
          </span>
        </div>

        <p className="noglab-body-text">
          {t('noglab.aiForEveryone.paragraph1')}
        </p>
        <p className="noglab-body-text">
          {t('noglab.aiForEveryone.paragraph2')}
        </p>
        <p className="noglab-body-text">
          {t('noglab.aiForEveryone.paragraph3')}
        </p>

        {/* Subtitle 3 */}
        <div className="noglab-section-subtitle">
          <span className="noglab-section-subtitle-text">
            {t('noglab.principles.title')}
          </span>
        </div>

        <div className="noglab-principle-title">
          <span className="noglab-bold-text">{t('noglab.principles.explicability.title')}</span>
        </div>
        <p className="noglab-body-text">
          {t('noglab.principles.explicability.description')}
        </p>

        <div className="noglab-principle-title">
          <span className="noglab-bold-text">{t('noglab.principles.accessibility.title')}</span>
        </div>
        <p className="noglab-body-text">
          {t('noglab.principles.accessibility.description')}
        </p>

        <div className="noglab-principle-title">
          <span className="noglab-bold-text">{t('noglab.principles.recall.title')}</span>
        </div>
        <p className="noglab-body-text">
          {t('noglab.principles.recall.description')}
        </p>

        <div className="noglab-principle-title">
          <span className="noglab-bold-text">{t('noglab.principles.speed.title')}</span>
        </div>
        <p className="noglab-body-text">
          {t('noglab.principles.speed.description')}
        </p>

        {/* Subtitle 4 */}
        <div className="noglab-section-subtitle">
          <span className="noglab-section-subtitle-text">
            {t('noglab.growth.title')}
          </span>
        </div>

        <p className="noglab-body-text">
          <span className="noglab-bold-text">Engineering and product co-design</span> {t('noglab.growth.paragraph1')}
        </p>

        <p className="noglab-body-text">
          <span className="noglab-bold-text">Empirical and iterative approach</span> {t('noglab.growth.paragraph2')}
        </p>

        <p className="noglab-body-text">
          {t('noglab.growth.paragraph3')}
        </p>

        <p className="noglab-body-text">
          {t('noglab.growth.paragraph4')}
        </p>

        {/* Subtitle 5 */}
        <div className="noglab-section-subtitle">
          <span className="noglab-section-subtitle-text">
            {t('noglab.measure.title')}
          </span>
        </div>

        <p className="noglab-body-text">
          {t('noglab.measure.description')}
        </p>

        {/* Subtitle 6 */}
        <div className="noglab-section-subtitle">
          <span className="noglab-section-subtitle-text">
            {t('noglab.partners.title')}
          </span>
        </div>

        <p className="noglab-body-text">
          {t('noglab.partners.description')} <span className="noglab-design-partner-link">{t('noglab.partners.link')}</span>.
        </p>
      </div>
    </div>
  );
};

export default NOGLabSection;

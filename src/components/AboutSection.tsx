import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <h2 className="section-title">{t("about.title")}</h2>
        <p className="about-text">
         {t("about.description")}
        </p>

        <div className="about-stats">
          <div className="stat reveal">
            <strong>4+</strong>
            <span>{t("about.stats.years")}</span>
          </div>
          <div className="stat reveal">
            <strong>10+</strong>
            <span>{t("about.stats.technologies")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

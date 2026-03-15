import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import type { EducationItem } from "../types";

type EducationSectionProps = {
    id: string;
  title?: string;
  education?: EducationItem[];
  Icon?: React.ElementType;
  defaultImage?: string | null;
  className?: string;
};

export default function EducationSection({
  id = "",
  title = "Minha Formação",
  education = [],
  Icon = FaGraduationCap,
  defaultImage = null,
  className = "",
}: EducationSectionProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (defaultImage && e.currentTarget.src !== defaultImage) {
      e.currentTarget.src = defaultImage;
    }
  };

  return (
    <section id={id} className={`experience-section reveal ${className}`}>
      <div className="container">
        <h2 className="section-title resume-title">
          <Icon aria-hidden="true" /> {title}
        </h2>

        <div className="education-grid">
          {education.map((item) => (
            <article key={`${item.title}-${item.period}`} className="education-card reveal">
              <p className="education-period">{item.period}</p>

              {item.certificateImage && (
                <img
                  className="education-certificate"
                  src={item.certificateImage}
                  alt={item.certificateAlt ?? `Certificado do curso ${item.title}`}
                  loading="lazy"
                  onError={handleImageError}
                />
              )}

              <h3>{item.title}</h3>
              <p>{item.org}</p>
              <p className="education-learned">{item.learned}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
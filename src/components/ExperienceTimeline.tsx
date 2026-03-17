import { FaBriefcase, FaReact, FaPython, FaPhp } from "react-icons/fa";
import { 
  SiPostgresql, 
  SiTypescript, 
  SiDocker, 
  SiGithubactions, 
  SiRedis,
  SiMysql,
  SiCpanel,
  SiHtml5,
  SiCss,
  SiJavascript,


} from "react-icons/si";
import { useTranslation } from "react-i18next";




const EXPERIENCES = [
  {
    title: "experience.freelancer.role",
    org: "experience.freelancer.type",
    period: "experience.freelancer.period",
    description:
      `experience.freelancer.description`,
    technologies: [
      {name: "Python", icon:FaPython},
      { name: "PostgreSQL", icon: SiPostgresql },
      {name: "Redis", icon:SiRedis},
      { name: "Docker", icon: SiDocker },
      { name: "Github Actions", icon: SiGithubactions },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    title: "experience.daoster.role",
    org: "experience.daoster.company",
    period: "experience.daoster.period",
    description:
      `experience.daoster.description`,
    technologies: [
      {name: "PHP", icon:FaPhp},
      { name: "MySQL", icon: SiMysql },
      { name: "cPanel", icon: SiCpanel },
      { name: "Smarty" , icon: null},
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    title: "experience.teaching.role",
    org: "experience.teaching.company",
    period: "experience.teaching.period",
    description:
      `experience.teaching.description`,
    technologies: [
      { name: "experience.teaching.techs.didacticCommunication", icon: null },
      { name: "experience.teaching.techs.leadershipGroup", icon: null },
      { name: "experience.teaching.techs.lessonPlanning", icon: null }
    ]
  }
];


export default function ExperienceTimeline() {
  const { t } = useTranslation();
  return (
    <>
      <section id="experience" className="experience-section reveal">
        <div className="container">
          <h2 className="section-title resume-title">
            <FaBriefcase aria-hidden="true" /> {t("experience.title")}
          </h2>

          <div className="experience-timeline">
            {EXPERIENCES.map((item) => (
              <article key={`${item.title}-${item.period}`} className="experience-item reveal">
                <span className="experience-dot" aria-hidden="true" />
                <div className="experience-content">
                  <p className="experience-period">{t(item.period as any)}</p>
                  <h3>{t(item.title as any)}</h3>
                  <p className="experience-org">{t(item.org as any)}</p>
                  <p className="experience-description">{t(item.description as any)}</p>

                  <div className="experience-tech" aria-label={`Tecnologias usadas em ${item.title}`}>
                    {item.technologies.map((tech) => {
                      const Icon = tech.icon;

                      return (
                        <span key={tech.name} className="experience-tech-item" title={tech.name}>
                          {Icon && <Icon aria-hidden="true" />}
                          <small>{t(tech.name as any)}</small>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

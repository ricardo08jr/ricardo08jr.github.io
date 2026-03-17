import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import FavIcon from "../assets/favicon.png"
import { useTranslation } from "react-i18next";
export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("pj_theme") as "dark" | "light") ?? "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pj_theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <header className={`topbar ${isScrolled ? "topbar--stuck" : ""}`}>
        <div className="topbar-inner">
          <div className="brand">
            <img src={FavIcon} alt="logo" className="brand-logo" />
            <span className="brand-name">Ricardo Júnior</span>
          </div>

          <nav className={`navlinks ${open ? "open" : ""}`}>
            <a href="#intro">{t("menu.start")}</a>
            <a href="#about">{t("menu.about")}</a>
            <a href="#projects">{t("menu.projects")}</a>
            <a href="#experience">{t("menu.experience")}</a>
            <a href="#certification">{t("menu.certifications")}</a>
            <a href="#education">{t("menu.education")}</a>
            <a href="#skills">{t("menu.skills")}</a>
            <a href="#contact">{t("menu.contact")}</a>
          </nav>

          <div className="controls">
            <LanguageSwitcher/>
            <button className="menu-btn" onClick={() => setOpen((s) => !s)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <button
        className="theme-float"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title="Alternar tema"
        aria-label="Alternar tema"
      >
        <span className="theme-float-icon">{theme === "dark" ? <FaSun /> : <FaMoon />}</span>
        <span className="theme-float-label">{theme === "dark" ? "Tema claro" : "Tema escuro"}</span>
      </button>
    </>
  );
}

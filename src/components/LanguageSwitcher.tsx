
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const current = i18n.resolvedLanguage || "pt";
    const next = current === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <button onClick={toggle} className="lang-btn">
      <FaGlobe size={20} />
    </button>
  );
}
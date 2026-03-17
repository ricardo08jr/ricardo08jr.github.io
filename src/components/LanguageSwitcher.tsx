
import { useTranslation } from "react-i18next";

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
      🌍
    </button>
  );
}
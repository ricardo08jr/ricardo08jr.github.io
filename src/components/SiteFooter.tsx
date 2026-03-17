
import { useTranslation } from "react-i18next";
export default function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer reveal">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ricardo Matos de Jesus Júnior. {t("footer.rights")} {t("footer.madeWith")}</p>
      </div>
    </footer>
  );
}

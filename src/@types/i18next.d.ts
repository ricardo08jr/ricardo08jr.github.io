import "i18next";
import pt from "../locales/pt.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: typeof pt;
    };
  }
}
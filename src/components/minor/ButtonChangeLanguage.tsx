import { useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useIsVisible } from "../../utils/scrollState";

import en from "../../assets/iconLang/en.svg";
import pl from "../../assets/iconLang/pl.svg";

const ButtonChangeLanguage: FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language);
  const isVisible = useIsVisible();

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div
      className={`cursor-pointer duration-300 relative ${
        isVisible ? "left-0" : "left-12"
      }`}
    >
      {language === "en" ? (
        <img
          src={pl}
          onClick={() => handleLanguageChange("pl")}
          alt="Polish flag"
          className="h-4 w-auto md:h-6"
        />
      ) : (
        <img
          src={en}
          onClick={() => handleLanguageChange("en")}
          alt="English flag"
          className="h-4 w-auto md:h-6"
        />
      )}
    </div>
  );
};

export default ButtonChangeLanguage;

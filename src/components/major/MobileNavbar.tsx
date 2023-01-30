import React from "react";
import { navRouter } from "../../utils/navRouter";
import { socialMediaIcon } from "../../utils/socialMediaIcon";
import { handleClickIcon } from "../../utils/handleClickIcon";
import { useTranslation } from "react-i18next";
import IonIcon from "@reacticons/ionicons";

interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

const MobileNavbar: React.FC<Props> = ({ handleClick, isOpen }) => {
  const { t } = useTranslation();

  return (
    <nav
      className={`z-40 md:hidden fixed top-0 bottom-0 w-full flex flex-col items-center justify-center text-Navy px-7 py-2 bg-white font-medium duration-300 
      ${isOpen ? "right-0" : "right-[-100%]"} 
      `}
      onClick={handleClick}
    >
      <ul className="py-2 flex flex-col justify-center gap-10 text-lg text-center">
        {navRouter.map((el, i) => (
          <li key={i} className="px-6 [word-spacing:-5px] hover:text-sky-500">
            <a href={el.link}>{t(el.name)}</a>
          </li>
        ))}
        <li className="border border-solid border-sky-500 rounded text-sky-500 hover:bg-sky-100 duration-300">
          <a
            href="https://drive.google.com/file/d/1kBHrOZg_ak9yFX1rxk4w55NJBhzrBt5N/view"
            target="_blank"
            className="block px-6 py-2"
          >
            RESUME
          </a>
        </li>
      </ul>
      <ul className="absolute text-center bottom-3">
        {socialMediaIcon.map((el) => (
          <li
            key={el.name}
            onClick={handleClickIcon(el.link)}
            className="cursor-pointer px-2 inline text-Space-Cadet hover:text-sky-500 text-4xl duration-300"
          >
            <IonIcon name={el.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;

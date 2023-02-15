import { useEffect, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { store } from "../../store/Store";
import { navRouter } from "../../utils/navRouter";
import NavbarIcon from "../minor/NavbarIcon";
import { useIsVisible } from "../../utils/scrollState";
import { handleClick } from "../../utils/handleClick";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../../assets/images/logo.svg";

const HeaderNavbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(store.getState().isOpen);
  const isVisible = useIsVisible();

  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsOpen(store.getState().isOpen);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("touchmove", handleClick);
      return () => {
        document.removeEventListener("touchmove", handleClick);
      };
    }
  }, [isOpen]);

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="3000"
      data-aos-duration="2000"
      className="relative z-50 left-0 top-0"
    >
      <nav
        className={`z-50 p-2 md:p-0 absolute w-full left-0 font-RobotoMono font-medium text-white duration-300 
       ${isVisible ? "top-0" : "-top-20"}`}
      >
        <div className="flex items-center justify-between">
          <div
            className={`md:p-2 duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            <img src={logo} alt="Site logo" className="h-12" />
          </div>
          <div className="md:block hidden px-7 py-2 rounded-bl-full text-Navy bg-white duration-300">
            <ul className="flex items-center gap-1 py-2 text-sm">
              {navRouter.map((el, i) => (
                <li
                  key={i}
                  className="px-4 hover:-translate-y-1 hover:text-sky-500 [word-spacing:-5px] duration-300"
                >
                  <a href={el.link}>{t(el.name)}</a>
                </li>
              ))}
              <li className="ml-3 border rounded border-sky-500 text-sky-500 hover:bg-sky-100 duration-300">
                <a
                  href="https://drive.google.com/file/d/1kBHrOZg_ak9yFX1rxk4w55NJBhzrBt5N/view"
                  target="_blank"
                  className="block px-6 py-2"
                >
                  {t("resumeNav")}
                </a>
              </li>
            </ul>
          </div>
          <NavbarIcon handleClick={handleClick} isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;

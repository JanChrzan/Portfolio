import { useEffect, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { store } from "../../store/Store";
import { navRouter } from "../../utils/navRouter";
import MobileNavbar from "./MobileNavbar";
import NavbarIcon from "../minor/NavbarIcon";
import { useScrollBlock } from "../../utils/useScrollBlock";
import { handleClick } from "../../utils/handleClick";
import Scrollspy from "react-scrollspy";

import logo from "../../assets/images/logo.svg";

const StickyNavbar: FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(store.getState().isOpen);
  const [blockScroll, allowScroll] = useScrollBlock();

  const { t } = useTranslation();

  useEffect(() => {
    isOpen ? blockScroll() : allowScroll();

    const unsubscribe = store.subscribe(() => {
      setIsOpen(store.getState().isOpen);
    });
    return () => unsubscribe();
  }, [isOpen]);

  let prevScrollY = 0;

  useEffect(() => {
    const homePage = document.getElementById("home");
    if (!homePage) return;
    const rect = homePage.getBoundingClientRect();

    window.addEventListener("scroll", () => {
      if (window.scrollY >= rect.height - 10 && window.scrollY >= prevScrollY) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      prevScrollY = window.scrollY;
    });
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`z-40 fixed w-full left-0 md:rounded-bl-full md:rounded-br-full md:backdrop-blur-md 
      md:bg-Navy/80 bg-Navy font-RobotoMono font-normal md:shadow-2xl duration-300
      ${isSticky ? "top-0 p-2" : "-top-20"}`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`md:pl-7 duration-300 ${
            isOpen ? "opacity-0 md:opacity-100" : "opacity-100"
          }`}
        >
          <img src={logo} alt="Site logo" className="h-12 w-auto" />
        </div>
        <div className="md:pr-11 py-1 md:block hidden text-white duration-300">
          <ul>
            <Scrollspy
              items={["home", "about", "skills", "projects", "contact"]}
              currentClassName="is-active"
              className="flex items-center gap-1 py-1 text-sm"
            >
              {navRouter.map((el, i) => (
                <li
                  key={i}
                  className={`px-4 hover:-translate-y-1 hover:text-Aquamarine [word-spacing:-5px] duration-300 ${
                    i && "current"
                  }`}
                >
                  <a href={el.link}>{t(el.name)}</a>
                </li>
              ))}
              <li className="ml-3 border rounded border-Aquamarine text-Aquamarine hover:bg-Aquamarine/[.10] duration-300">
                <a
                  href="https://drive.google.com/file/d/1kBHrOZg_ak9yFX1rxk4w55NJBhzrBt5N/view"
                  target="_blank"
                  className="block px-6 py-2"
                >
                  {t("resumeNav")}
                </a>
              </li>
            </Scrollspy>
          </ul>
        </div>
        <NavbarIcon handleClick={handleClick} isOpen={isOpen} />
        <MobileNavbar handleClick={handleClick} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default StickyNavbar;

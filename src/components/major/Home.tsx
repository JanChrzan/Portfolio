import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ButtonChangeLanguage from "../minor/ButtonChangeLanguage";
import SideSocialMediaIcon from "../minor/SideSocialMediaIcon";
import Button from "../minor/Button";
import AOS from "aos";
import "aos/dist/aos.css";

import mainImg from "../../assets/images/hero.png";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative md:min-h-screen h-[100svh] flex py-10 md:flex-row flex-col items-center justify-center overflow-hidden"
    >
      <div
        data-aos="fade-right"
        data-aos-delay="3000"
        data-aos-duration="2000"
        className="hidden md:block rounded-r-full bg-white"
      >
        <SideSocialMediaIcon />
      </div>
      <div
        data-aos="fade-down"
        data-aos-delay="3000"
        data-aos-duration="2000"
        className="z-30 block absolute top-16 md:top-20 right-0 mr-2"
      >
        <ButtonChangeLanguage />
      </div>
      <div
        data-aos="fade-down"
        data-aos-delay="3000"
        data-aos-duration="2000"
        className="md:flex-1 flex items-center justify-center"
      >
        <img
          src={mainImg}
          alt="The picture depicts the owner of the website"
          className="md:w-11/12 w-[80wv] object-cover"
        />
      </div>
      <div className="md:flex-1 flex items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="3000"
          data-aos-duration="2000"
          className="md:text-left text-center"
        >
          <h1 className="text-5xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-sky-500 text-2xl font-RobotoMono [word-spacing:-5px]">
              {t("hiMessage")}
              <br />
            </span>
            Jan Chrzan
          </h1>
          <h4 className="text-2xl md:leading-normal leading-5 mt-4 font-bold text-Cool-Grey md:hidden">
            Fullstack Developer
          </h4>
          <h4 className="md:leading-normal mt-4 text-sm text-Cool-Grey hidden md:block w-2/3">
            {t("description")}
          </h4>
          <Button
            className={"mt-8"}
            onClick={() => {
              window.location.href = "mailto:jan.chrzan@icloud.com";
            }}
            text={t("contactButton")}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

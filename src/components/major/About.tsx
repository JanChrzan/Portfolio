import { FC } from "react";
import { useTranslation } from "react-i18next";
import Canvas from "../minor/Canvas";
import Counter from "../minor/Counter";
import SectionTitle from "../minor/SectionTitle";

const About: FC = () => {
  const { t } = useTranslation();
  const sectionTitle = t("about").split(" ");

  return (
    <section
      id="about"
      className="flex items-center justify-center py-20 min-h-screen overflow-hidden"
    >
      <div>
        <SectionTitle
          firstPartTitle={sectionTitle[0]}
          secondPartTitle={sectionTitle[1]}
          subTitle={t("aboutAdditional")}
        />
        <div className="mt-10 flex lg:flex-row flex-col items-center md:gap-6 gap-12 max-w-6xl mx-auto">
          <div className="pl-2 pr-2 pb-2">
            <div className="text-white">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {t("aboutDescriptionFirst")}
                <span> </span>
                <a
                  href="https://nauka-polska.pl/#/profile/research?id=355697&_k=co4xlu"
                  className="text-Aquamarine"
                >
                  „Development and verification of simulation models of
                  reversible gate”
                </a>
                . {t("aboutDescriptionSecond")}
              </p>
              <div>
                <Counter />
              </div>
            </div>
          </div>
          <div className="flex-1 mt-5 md:mt-5 lg:mt-0 flex justify-center items-center">
            <div className="lg:w-96 h-full sm:w-10/12 w-9/12 max-w-sm">
              <div className="border-2 rotate-12 rounded-xl border-Aquamarine">
                <div className="bg-Oxford-Blue rounded-xl rotate-12">
                  <Canvas />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { FC } from "react";
import SkillSquareElement from "../minor/SkillSquareElement";
import SectionTitle from "../minor/SectionTitle";
import { useTranslation } from "react-i18next";

import teamWork from "../../assets/images/teamWork.svg";
import analyticalThinking from "../../assets/images/analyticalThinking.svg";
import book from "../../assets/iconSkills/book.svg";
import innovation from "../../assets/iconSkills/innovation.svg";
import target from "../../assets/iconSkills/target.svg";
import questionMark from "../../assets/iconSkills/question-mark.svg";
import learning from "../../assets/iconSkills/learning.svg";
import people from "../../assets/iconSkills/people.svg";

const Skills: FC = () => {
  const { t } = useTranslation();
  const sectionTitle = t("skills").split(" ");
  return (
    <section
      id="skills"
      className="flex relative min-h-screen justify-center items-center pt-20 md:pb-20"
    >
      <div className="flex flex-col items-center text-center">
        <SectionTitle
          firstPartTitle={sectionTitle[0]}
          secondPartTitle={sectionTitle[1]}
          subTitle={t("skillsAdditional")}
        />
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 xl:grid-cols-4 md:grid-rows-4 xl:grid-rows-2 gap-5 w-[90vw] md:w-[73vw] text-Navy">
          <SkillSquareElement
            img={book}
            alt={"Book"}
            title={t("learning")}
            description={t("learningDescription")}
            background={"bg-Alice-Blue md:bg-Alice-Blue"}
          />
          <div className="box rounded-xl bg-Periwinkle-Crayola md:bg-Cool-Grey md:hover:scale-y-105 md:hover:scale-x-110 border-Aquamarine duration-300 md:row-span-2">
            <img
              src={teamWork}
              alt="An image of people working as a team"
              className="hidden md:block xl:w-full h-1/2"
            />
            <div className="flex flex-col items-center justify-center md:h-1/2">
              <img src={people} alt="People" className="mt-2" />
              <h2 className="text-lg m-2 font-RobotoMono [word-spacing:-5px] font-bold">
                {t("teamWork")}
              </h2>
              <p className="text-sm px-6 xl:px-3 mb-4 xl:h-1/3 2xl:h-1/4">
                {t("teamWorkDescription")}
              </p>
            </div>
          </div>
          <SkillSquareElement
            img={innovation}
            alt={"Innovation"}
            title={t("creativity")}
            description={t("creativityDescription")}
            background={"bg-Alice-Blue md:bg-Alice-Blue"}
          />
          <SkillSquareElement
            img={target}
            alt={"Target"}
            title={t("accuracy")}
            description={t("accuracyDescription")}
            background={"bg-Periwinkle-Crayola md:bg-Periwinkle-Crayola"}
          />
          <SkillSquareElement
            img={questionMark}
            alt={"Question mark"}
            title={t("troubleshooting")}
            description={t("troubleshootingDescription")}
            background={"bg-Alice-Blue md:bg-Periwinkle-Crayola"}
          />
          <div className="box rounded-xl bg-Periwinkle-Crayola md:bg-Wild-Blue-Yonder md:hover:scale-y-110 md:hover:scale-x-105 border-Aquamarine duration-300 md:col-span-2">
            <div className="md:flex h-full w-full">
              <img
                src={analyticalThinking}
                alt="The image shows people doing analytical work"
                className="hidden md:block xl:h-full w-1/2 py-6 lg:py-0 xl:py-8"
              />
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <img
                  src={learning}
                  alt="Analytical Thinking"
                  className="mt-2"
                />
                <h2 className="text-lg m-2 font-RobotoMono [word-spacing:-5px] font-bold">
                  {t("analyticalThinking")}
                </h2>
                <p className="text-sm px-6 xl:px-3 mb-4 xl:h-1/3 2xl:h-1/4">
                  {t("analyticalThinkingDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

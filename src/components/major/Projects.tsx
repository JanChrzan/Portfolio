import { FC } from "react";
import { useTranslation } from "react-i18next";
import { projectsTable } from "../../utils/projectsTable";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../minor/SectionTitle";
import IonIcon from "@reacticons/ionicons";

const Projects: FC = () => {
  const { t } = useTranslation();
  const sectionTitle = t("projects").split(" ");
  return (
    <section id="projects" className="pt-20 md:pb-20 text-white">
      <SectionTitle
        firstPartTitle={sectionTitle[0]}
        secondPartTitle={sectionTitle[1]}
        subTitle={t("projectsAdditional")}
      />
      <div className="flex mt-10 max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-full w-full">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {projectsTable.map((projectInfo, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center h-fit w-full p-4 bg-Oxford-Blue rounded-xl">
                  <img src={projectInfo.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-2 text-center">
                    {projectInfo.name}
                  </h3>
                  <div className="w-fit py-1 px-2 mt-2 mb-4 top-44 right-8 text-Aquamarine border border-Aquamarine rounded text-xs">
                    {projectInfo.technologies}
                  </div>
                  <div className="flex w-full justify-between gap-3">
                    <a
                      href={projectInfo.githubLink}
                      target="_blank"
                      className="text-3xl hover:text-Aquamarine cursor-pointer hover:-translate-y-1 duration-300"
                      rel="noopener noreferrer"
                    >
                      <IonIcon name="logo-github" />
                    </a>
                    <a
                      href={projectInfo.liveLink}
                      target="_blank"
                      className="text-3xl hover:text-Aquamarine cursor-pointer hover:-translate-y-1 duration-300"
                      rel="noopener noreferrer"
                    >
                      <IonIcon name="pulse-outline" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;

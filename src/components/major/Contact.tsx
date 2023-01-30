import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useScrollBlock } from "../../utils/useScrollBlock";
import IonIcon from "@reacticons/ionicons";
import FormModal from "../minor/FormModal";
import SectionTitle from "../minor/SectionTitle";
import Button from "../minor/Button";
import axios from "axios";

import map from "../../assets/images/map.png";

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [blockScroll, allowScroll] = useScrollBlock();

  const { t } = useTranslation();
  const sectionTitle = t("contact").split(" ");

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setIsModalOpen(true);
      setModalTitle(t("modalErrorTitle").toString());
      setModalMessage(t("modalErrorEmpty").toString());
      return;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(formData.email)) {
      setIsModalOpen(true);
      setModalTitle(t("modalErrorTitle").toString());
      setModalMessage(t("modalErrorEmail").toString());
      return;
    }

    axios
      .post("https://serverportfolio.herokuapp.com/api/form", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setIsModalOpen(true);
        setModalTitle(t("modalTitle").toString());
        setModalMessage(t("modalMessage").toString());
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setIsModalOpen(true);
        setModalTitle(t("modalErrorTitle").toString());
        setModalMessage(t("modalErrorMessage").toString());
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    isModalOpen ? blockScroll() : allowScroll();
  }, [isModalOpen]);

  return (
    <section
      id="contact"
      className="flex items-center justify-center pt-20 md:pb-20 text-white"
    >
      {isModalOpen && (
        <FormModal
          handleClose={handleCloseModal}
          title={modalTitle}
          message={modalMessage}
        />
      )}
      <div className="text-center w-full">
        <SectionTitle
          firstPartTitle={sectionTitle[0]}
          secondPartTitle={sectionTitle[1]}
          subTitle={t("contactAdditional")}
        />
        <div
          className="mt-10 flex md:flex-row flex-col
         gap-6 bg-Oxford-Blue md:p-6 p-2 rounded-lg mx-auto w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[70vw]"
        >
          <form
            className="flex flex-col md:w-1/2"
            onSubmit={handleSubmit}
            noValidate={true}
          >
            <label
              htmlFor="name"
              className="flex ml-px pl-4 text-sm font-medium text-white"
            >
              {t("nameLabel")}
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-Space-Cadet shadow-sm focus:ring-Aquamarine focus:border-Aquamarine block w-full sm:text-sm px-4 rounded border-none"
                placeholder={t("namePlaceholder").toString()}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <label
              htmlFor="email"
              className="flex ml-px mt-1 pl-4 text-sm font-medium text-white"
            >
              {t("mailLabel")}
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-Space-Cadet shadow-sm focus:ring-Aquamarine focus:border-Aquamarine block w-full sm:text-sm px-4 rounded border-none"
                placeholder={t("mailPlaceholder").toString()}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <label
              htmlFor="message"
              className="flex ml-px mt-1 pl-4 text-sm font-medium text-white"
            >
              {t("messageLabel")}
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                className="bg-Space-Cadet shadow-sm focus:ring-Aquamarine focus:border-Aquamarine block w-full sm:text-sm px-4 rounded border-none"
                placeholder={t("messagePlaceholder").toString()}
                rows={10}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              className={"md:w-fit mt-5"}
              type={"submit"}
              text={t("sendButton")}
            />
          </form>
          <div className="md:w-1/2 text-xs lg:text-sm xl:text-base">
            <div className="flex flex-col items-start absolute bg-Oxford-Blue/90 rounded-2xl md:mt-7 mt-3 md:ml-7 ml-3 px-8 py-2 border-Aquamarine border">
              <div className="text-Aquamarine flex gap-1 md:translate-y-0.5">
                <IonIcon name="location-outline" />
                <p className="text-white md:-translate-y-0.5">
                  {t("location")}
                </p>
              </div>
              <div className="text-Aquamarine flex gap-1 md:translate-y-1 translate-y-0.5">
                <IonIcon name="mail-open-outline" />
                <p className="text-white md:-translate-y-1 -translate-y-0.5">
                  jan.chrzan@icloud.com
                </p>
              </div>
              <div className="text-Aquamarine flex gap-1 md:translate-y-0.5">
                <IonIcon name="logo-whatsapp" />
                <p className="text-white md:-translate-y-0.5">123456789</p>
              </div>
            </div>
            <img
              src={map}
              alt="Logo"
              className="rounded-xl object-cover min-w-full min-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

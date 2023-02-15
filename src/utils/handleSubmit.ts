import { Dispatch, FormEvent, SetStateAction } from "react";
import { FormData } from "./TypeFormData";
import axios from "axios";

type HandleSubmitProps = {
  e: FormEvent<HTMLFormElement>;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  t: (key: string) => string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalTitle: Dispatch<SetStateAction<string>>;
  setModalMessage: Dispatch<SetStateAction<string>>;
};

export const handleSubmit = ({
  e,
  formData,
  setFormData,
  t,
  setIsModalOpen,
  setModalTitle,
  setModalMessage,
}: HandleSubmitProps) => {
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

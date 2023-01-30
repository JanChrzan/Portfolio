import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";

interface FormModalProps {
  title: string;
  message: string;
  handleClose?: () => void | undefined;
}

const FormModal: React.FC<FormModalProps> = ({
  title,
  message,
  handleClose,
}) => {
  const { t } = useTranslation();
  return (
    <div className={`z-50`}>
      <div className="fixed inset-0 bg-Navy backdrop-blur bg-opacity-70" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-Navy rounded-md text-center text-white px-8 py-6 space-y-5 drop-shadow-lg">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="py-5 border-t border-b border-gray-300">
          <p>{message}</p>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleClose} text={t("modalButton")} />
        </div>
      </div>
    </div>
  );
};

export default FormModal;

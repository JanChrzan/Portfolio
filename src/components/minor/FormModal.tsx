import { FC, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { handleCloseModal } from "../../utils/handleCloseModal";

type FormModalProps = {
  title: string;
  message: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const FormModal: FC<FormModalProps> = ({ title, message, setIsModalOpen }) => {
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
          <Button
            onClick={() => handleCloseModal(setIsModalOpen)}
            text={t("modalButton")}
          />
        </div>
      </div>
    </div>
  );
};

export default FormModal;

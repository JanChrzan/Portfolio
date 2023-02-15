import { Dispatch, SetStateAction } from "react";

export const handleCloseModal = (
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => {
  setIsModalOpen(false);
};

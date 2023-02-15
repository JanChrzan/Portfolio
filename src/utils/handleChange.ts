import { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";
import { FormData } from "./TypeFormData";

type HandleChangeProps = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
};

export const handleChange = ({ formData, setFormData }: HandleChangeProps) =>
  useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

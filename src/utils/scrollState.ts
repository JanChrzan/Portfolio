import { useEffect, useState } from "react";

export const useIsVisible = (): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsVisible(false) : setIsVisible(true);
    });
  }, []);
  return isVisible;
};

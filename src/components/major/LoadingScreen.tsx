import React, { useEffect, useState, FC } from "react";
import { useScrollBlock } from "../../utils/useScrollBlock";

import logo from "../../assets/images/logo.svg";

type LoadingScreenProps = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const LoadingScreen: FC<LoadingScreenProps> = ({ isLoading, setIsLoading }) => {
  const [isLoadingDelay, setIsLoadingDelay] = useState<boolean>(true);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    isLoadingDelay ? blockScroll() : allowScroll();
  }, [isLoadingDelay]);

  useEffect(() => {
    if (localStorage.getItem("reload") === "true" && isLoading) {
      localStorage.removeItem("reload");
      window.location.reload();
    }
  }, []);

  const start = Date.now();

  useEffect(() => {
    const handlePageLoad = () => {
      const end = Date.now();
      const loadingTime = end - start;
      const timeout = Math.max(3500 - loadingTime, 0);

      setTimeout(() => {
        setIsLoading(false);
      }, timeout);

      setTimeout(() => {
        localStorage.setItem("reload", "true");
        setIsLoadingDelay(false);
      }, timeout + 300);
    };

    document.addEventListener("load", handlePageLoad, true);
    return () => {
      document.removeEventListener("load", handlePageLoad, true);
    };
  }, []);

  return (
    <div>
      {isLoadingDelay && (
        <div
          className={`z-50 absolute top-0 left-0 flex justify-center items-center min-w-full min-h-full bg-Navy duration-500
                   ${isLoading ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={logo}
            alt="Loading screen as site logo"
            className="animate-ping w-10 h-10"
          />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;

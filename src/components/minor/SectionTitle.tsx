import React from "react";

interface SectionTitleProps {
  firstPartTitle: string;
  secondPartTitle: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  firstPartTitle,
  secondPartTitle,
  subTitle,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-white">
        {firstPartTitle}
        <span className="text-sky-500"> {secondPartTitle}</span>
      </h2>
      <h3 className="text-Cool-Grey mt-3 text-lg font-RobotoMono [word-spacing:-5px]">
        {subTitle}
      </h3>
    </div>
  );
};

export default SectionTitle;

import React from "react";

interface SkillSquareElementProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  background: string;
}

const SkillSquareElement: React.FC<SkillSquareElementProps> = ({
  img,
  alt,
  title,
  description,
  background,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center box rounded-xl md:hover:scale-110 ${background} duration-300`}
    >
      <img src={img} alt={alt} className="mt-2" />
      <h2 className="text-lg m-2 font-RobotoMono [word-spacing:-5px] font-bold">
        {title}
      </h2>
      <p className="text-sm px-6 xl:px-3 mb-4 xl:h-1/3 2xl:h-1/4">
        {description}
      </p>
    </div>
  );
};

export default SkillSquareElement;

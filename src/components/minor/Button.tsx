import React from "react";

type ButtonProps = {
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ className, type, onClick, text }) => {
  return (
    <button
      className={` ${className} px-6 py-2 border border-Aquamarine rounded text-Aquamarine hover:bg-Aquamarine/[.10] font-RobotoMono [word-spacing:-5px] duration-300`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

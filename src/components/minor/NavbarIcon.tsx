import React from "react";

interface NavbarIconProps {
  handleClick: () => void;
  isOpen: boolean;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ handleClick, isOpen }) => {
  return (
    <div
      id="nav-icon"
      data-testid="nav-icon"
      onClick={handleClick}
      className={`z-[999] md:hidden ${isOpen ? "open" : ""}`}
    >
      <span className={`${isOpen ? "bg-Navy" : "bg-white"}`}></span>
      <span className={`${isOpen ? "bg-Navy" : "bg-white"}`}></span>
      <span className={`${isOpen ? "bg-Navy" : "bg-white"}`}></span>
      <span className={`${isOpen ? "bg-Navy" : "bg-white"}`}></span>
    </div>
  );
};

export default NavbarIcon;

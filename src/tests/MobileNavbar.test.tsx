import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MobileNavbar from "../components/major/MobileNavbar";

describe("MobileNavbar", () => {
  it("Displays without errors", () => {
    const { getByText } = render(
      <MobileNavbar handleClick={() => {}} isOpen={false} />
    );
    const homeNavLink = getByText("homeNav");
    const aboutNavLink = getByText("aboutNav");
    const skillsNavLink = getByText("skillsNav");
    const projectsNavLink = getByText("projectsNav");
    const contactNavLink = getByText("contactNav");
    const resumeLink = getByText("RESUME");

    expect(homeNavLink).toBeInTheDocument();
    expect(aboutNavLink).toBeInTheDocument();
    expect(skillsNavLink).toBeInTheDocument();
    expect(projectsNavLink).toBeInTheDocument();
    expect(contactNavLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
  });

  it("Calls handleClick on li click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <MobileNavbar handleClick={handleClick} isOpen={false} />
    );
    const homeNavLink = getByText("homeNav");

    fireEvent.click(homeNavLink);
    expect(handleClick).toHaveBeenCalled();
  });

  it("Adds and removes CSS classes correctly", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <MobileNavbar handleClick={handleClick} isOpen={true} />
    );
    expect(container.firstChild).toHaveClass("right-0");

    const { container: container2 } = render(
      <MobileNavbar handleClick={handleClick} isOpen={false} />
    );
    expect(container2.firstChild).toHaveClass("right-[-100%]");
  });

  it("Calls handleClick function after clicking an item", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <MobileNavbar handleClick={handleClick} isOpen={true} />
    );
    fireEvent.click(getByText("homeNav"));
    expect(handleClick).toHaveBeenCalled();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../components/major/About";
describe("About", () => {
  it("Displays without errors", () => {
    render(<About />);
  });

  it("Displays title and subtitle", () => {
    const { container } = render(<About />);
    expect(container.querySelector("h2")).toBeInTheDocument();
    expect(container.querySelector("h3")).toBeInTheDocument();
  });

  it("Displays the paragraphs", () => {
    const { container } = render(<About />);
    expect(container.querySelector("p")).toBeInTheDocument();
  });

  it("Displays the Canvas element", () => {
    const { container } = render(<About />);
    const canvas = container.querySelector("Canvas");
    expect(canvas).toBeInTheDocument();
  });
});

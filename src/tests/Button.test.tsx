import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import Button from "../components/minor/Button";

describe("Button", () => {
  it("Renders text passed as prop", () => {
    const { queryByText } = render(<Button text="Click me" />);
    expect(queryByText("Click me")).toBeInTheDocument();
  });

  it("Calls onClick function as prop", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={onClick} />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("Has className as prop", () => {
    const { container } = render(
      <Button text="Click me" className="test-class" />
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("test-class");
  });

  it("Has type as prop", () => {
    const { container } = render(<Button text="Click me" type="submit" />);
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});

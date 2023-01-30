import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormModal from "../components/minor/FormModal";

describe("FormModal", () => {
  it("Render title as props", () => {
    const title = "Modal Title";
    const { getByText } = render(
      <FormModal title={title} message="Modal message" />
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  it("Render message as props", () => {
    const message = "Modal message";
    const { getByText } = render(
      <FormModal title="Modal Title" message={message} />
    );
    expect(getByText(message)).toBeInTheDocument();
  });

  it("Render button with correct text", () => {
    const { getByText } = render(
      <FormModal title="Modal Title" message="Modal message" />
    );
    expect(getByText("modalButton")).toBeInTheDocument();
  });

  it("Call handleClose function on button click", () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <FormModal
        title="Modal Title"
        message="Modal message"
        handleClose={handleClose}
      />
    );
    fireEvent.click(getByText("modalButton"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("Button not call handleClose function", () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <FormModal title="Modal Title" message="Modal message" />
    );
    fireEvent.click(getByText("modalButton"));
    expect(handleClose).not.toHaveBeenCalled();
  });
});

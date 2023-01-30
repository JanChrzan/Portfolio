import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "../components/major/Contact";

const setup = () => {
  const utils = render(<Contact />);
  const nameInput = utils.getByPlaceholderText("namePlaceholder");
  const emailInput = utils.getByPlaceholderText("mailPlaceholder");
  const messageInput = utils.getByPlaceholderText("messagePlaceholder");
  const submitButton = utils.getByText("sendButton");
  return { ...utils, nameInput, emailInput, messageInput, submitButton };
};

describe("Contact", () => {
  it("Displays without errors", () => {
    const { nameInput, emailInput, messageInput, submitButton } = setup();

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Displays error message when inputs are empty", async () => {
    const { submitButton, getByText } = setup();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("modalErrorTitle")).toBeInTheDocument();
      expect(getByText("modalErrorEmpty")).toBeInTheDocument();
    });
  });

  it("Displays error message when email is invalid", async () => {
    const { nameInput, emailInput, messageInput, submitButton, getByText } =
      setup();

    fireEvent.change(nameInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "test" } });
    fireEvent.change(messageInput, { target: { value: "test" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("modalErrorTitle")).toBeInTheDocument();
      expect(getByText("modalErrorEmail")).toBeInTheDocument();
    });
  });

  it("Displays error message when server is down", async () => {
    const { nameInput, emailInput, messageInput, submitButton, getByText } =
      setup();

    fireEvent.change(nameInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "test" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("modalErrorTitle")).toBeInTheDocument();
      expect(getByText("modalErrorMessage")).toBeInTheDocument();
    });
  });
});

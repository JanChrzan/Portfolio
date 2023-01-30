import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonChangeLanguage from "../components/minor/ButtonChangeLanguage";
describe("ButtonChangeLanguage", () => {
  test("Displays without errors", () => {
    const { getByAltText } = render(<ButtonChangeLanguage />);

    expect(getByAltText("English flag")).toBeInTheDocument();
  });
});

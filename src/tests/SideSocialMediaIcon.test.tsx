import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SideSocialMediaIcon from "../components/minor/SideSocialMediaIcon";
import { socialMediaIcon } from "../utils/socialMediaIcon";

describe("SideSocialMediaIcon", () => {
  it("Display social media icons", () => {
    const { getByTestId } = render(<SideSocialMediaIcon />);

    socialMediaIcon.forEach((el) => {
      expect(getByTestId(`${el.name}`)).toBeInTheDocument();
    });
  });
});

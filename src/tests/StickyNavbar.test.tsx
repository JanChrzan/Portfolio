import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StickyNavbar from "../components/major/StickyNavbar";
import { store } from "../store/Store";

describe("StickyNavbar", () => {
  beforeEach(() => {
    jest.spyOn(store, "dispatch");
    jest.spyOn(store, "subscribe").mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    if (store.getState().isOpen) {
      store.dispatch({ type: "TOGGLE_IS_OPEN" });
    }
  });

  it("Displays without crashing", () => {
    render(<StickyNavbar />);
  });

  it("Displays logo", () => {
    const { getByAltText } = render(<StickyNavbar />);
    const logo = getByAltText("Site logo");

    expect(logo).toBeInTheDocument();
  });

  it("Dispatches toggle action when NavbarIcon is clicked", () => {
    const { getByTestId } = render(<StickyNavbar />);
    const icon = getByTestId("nav-icon");

    fireEvent.click(icon);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "TOGGLE_IS_OPEN",
    });
  });

  it("Changes isOpen state when toggle action is dispatched", () => {
    const { getByTestId, rerender } = render(<StickyNavbar />);
    const icon = getByTestId("nav-icon");

    fireEvent.click(icon);

    const newIsOpen = store.getState().isOpen;
    expect(newIsOpen).toBe(true);

    rerender(<StickyNavbar />);

    const updatedIsOpen = store.getState().isOpen;
    expect(updatedIsOpen).toBe(true);
  });

  it("Subscribes to store updates and updates isOpen state", () => {
    const { rerender } = render(<StickyNavbar />);

    store.dispatch({ type: "TOGGLE_IS_OPEN" });

    rerender(<StickyNavbar />);

    expect(store.subscribe).toHaveBeenCalled();

    const newIsOpen = store.getState().isOpen;
    expect(newIsOpen).toBe(true);
  });

  it("Toggles the isOpen state on handleClick", () => {
    const { getByTestId } = render(<StickyNavbar />);
    const navbarIcon = getByTestId("nav-icon");
    fireEvent.click(navbarIcon);
    waitFor(() => {
      expect(store.getState().isOpen).toBe(true);
    });
    fireEvent.click(navbarIcon);
    waitFor(() => {
      expect(store.getState().isOpen).toBe(false);
    });
  });
});

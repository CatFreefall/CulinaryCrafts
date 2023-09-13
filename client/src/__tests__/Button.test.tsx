import { render, screen, fireEvent } from "@testing-library/react";

import NavBarButton from "../components/common/NavBarModalButton";

//TODO: a simple test consists of 3 parts:
// Rendering a component (render(<Component />))
// select a specific HTML element (getByLabelText, getByText, getByTestId, etc.)
// expect something about the selected element (expect(element).toBeSomething())

//TODO: What to test: (Behaviour, not implementation)
// test that the component renders without error
// test that the component renders with props
// test if the component renders in different states (conditional rendering)
// test that the component reacts to user interaction (click, hover, etc.)
// in general, make sure to test code that is relevant to user experience
describe("Button", () => {
  it("should render a button with the given label", () => {
    render(<NavBarButton label={"Button"} />);
    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
  });

  it("should print out 'This is a test' when clicked", () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    render(<NavBarButton label={"Button"} />);

    const button = screen.getByText("Button");
    fireEvent.click(button);

    expect(consoleLogSpy).toHaveBeenCalledWith("This is a test");

    consoleLogSpy.mockRestore();
  });
});

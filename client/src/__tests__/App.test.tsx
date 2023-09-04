import { render, screen } from "@testing-library/react";
import App from "../App";

describe("The app component should be rendered", () => {
  it("should render the app component", () => {
    render(<App />);
    const app = screen.getByText("This is the main page");
    expect(app).toBeInTheDocument();
  });
});

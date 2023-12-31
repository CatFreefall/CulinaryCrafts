import { render, screen } from "@testing-library/react";
import HomeLink from "../../../components/common/NavBar/HomeLink";

describe("HomeLink", () => {
  it("should render the HomeLink component", () => {
    render(<HomeLink />);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
  it("should navigate to the home page when clicked", () => {
    render(<HomeLink />);

    const homeLink = screen.getByText("Home");
    homeLink.click();
    expect(window.location.pathname).toBe("/");
  });
});

import { useLocation } from "react-router-dom";

import SecondaryNavBarLink from "./SecondaryNavBarLink";

//TODO: To be conditionally rendered once auth is implemented!
import DarkModeToggle from "./DarkModeToggle";

const SecondaryNavBar = () => {
  const location = useLocation().pathname;

  return (
    <section className="font-header font-medium text-lg w-screen bg-grey border-b-default border-darkgrey tracking-tight pl-16 pt-1">
      <ul className="flex">
        <SecondaryNavBarLink
          location={location}
          desiredLocation={"/"}
          children={
            <a href="/" className="link-hover-animation-2">
              Home
            </a>
          }
        />
        <SecondaryNavBarLink
          location={location}
          desiredLocation={"/recipes"}
          children={
            <a href="/recipes" className="link-hover-animation-2">
              Recipes
            </a>
          }
        />
        <SecondaryNavBarLink
          location={location}
          desiredLocation={"/nutritional-values"}
          children={
            <a href="/nutritional-values" className="link-hover-animation-2">
              Nutritional Values
            </a>
          }
        />
      </ul>
    </section>
  );
};

export default SecondaryNavBar;

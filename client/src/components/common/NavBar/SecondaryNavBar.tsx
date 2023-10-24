import { useLocation } from "react-router-dom";

import HomeLink from "./HomeLink";
import RecipesLink from "./RecipesLink";
import NutriValuesLink from "./NutriValuesLink";

import SecondaryNavBarLink from "./SecondaryNavBarLink";
import DarkModeToggle from "./DarkModeToggle";

const SecondaryNavBar = () => {
  const location = useLocation().pathname;

  return (
    <section className="font-header font-medium text-lg w-screen bg-grey border-b-default border-darkgrey tracking-tight pl-16 pt-1">
      <ul className="flex">
        <SecondaryNavBarLink
          location={location}
          desiredLocation={"/"}
          children={<HomeLink />}
        />
        <SecondaryNavBarLink
          location={location}
          desiredLocation={"/recipes"}
          children={<RecipesLink />}
        />
        <SecondaryNavBarLink
          location={location}
          desiredLocation={"/nutritional-values"}
          children={<NutriValuesLink />}
        />
      </ul>
    </section>
  );
};

export default SecondaryNavBar;

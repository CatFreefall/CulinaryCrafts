import SecondaryNavBar from "./SecondaryNavBar";
import PrimaryNavBar from "./PrimaryNavBar";

//TODO: conditionally render Upgrade or Upgraded
//TODO: conditionally render login/register link and user settings dropdown

const NavBar = () => {
  return (
    <>
      <PrimaryNavBar />
      <SecondaryNavBar />
    </>
  );
};

export default NavBar;
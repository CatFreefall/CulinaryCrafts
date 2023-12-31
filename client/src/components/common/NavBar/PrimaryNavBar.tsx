import NavBarButton from "./NavBarButton";
import Button from "../Button";

//TODO: conditionally render Upgrade or Upgraded
//TODO: conditionally render login/register or user settings dropdown

const PrimaryNavBar = () => {
  return (
    <section className="w-screen bg-primary opacity-95 font-header font-bold py-3 px-7 text-white shadow-md">
      <ul className="flex items-center">
        <li>
          <img
            alt=""
            src="/assets/icons/website-icons/website-icon.png"
            className="w-8"
          ></img>
        </li>
        <li className="text-3xl ml-1 mr-7">CulinaryCrafts</li>
        <li>
          <Button
            bgColor="white"
            textColor="black"
            action={<a href="/upgrade">Upgrade</a>}
            size="default"
          />
        </li>
        <li className="ml-auto text-lg">
          <NavBarButton text="Login" />|<NavBarButton text="Register" />
        </li>
      </ul>
    </section>
  );
};

export default PrimaryNavBar;

import LoginButton from "./LoginButton";
import Upgrade from "./Upgrade";
import RegisterButton from "./RegisterButton";

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
          <Upgrade />
        </li>
        <li className="ml-auto text-lg">
          <LoginButton />|<RegisterButton />
        </li>
      </ul>
    </section>
  );
};

export default PrimaryNavBar;

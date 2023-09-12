import Upgrade from "./Upgrade";
import Upgraded from "./Upgraded";
import LoginLink from "./LoginLink";
import RegisterButton from "./RegisterLink";

//TODO: conditionally render Upgrade or Upgraded

const NavBar = () => {
  return (
    <section className="w-screen bg-primary opacity-95 font-header font-bold py-3 px-7 text-white tracking-tighter">
      <ul className="flex items-center">
        <li>
          <img
            alt=""
            src="/assets/icons/website-icons/website-icon.png"
            className="w-8 h-auto"
          ></img>
        </li>
        <li className="text-3xl pl-1 pr-7">CulinaryCrafts</li>
        <li>
          <Upgraded />
        </li>
        <li className="ml-auto text-lg">
          <LoginLink />|<RegisterButton />
        </li>
      </ul>
    </section>
  );
};

export default NavBar;

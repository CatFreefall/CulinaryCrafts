import { useAppDispatch } from "../../../hooks/ReduxHooks";
import {
  showLoginModal,
  showRegisterModal,
} from "../../../redux/features/modalSlice";

const NavBarButton = ({ text }: { text: string }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="link-hover-animation"
      onClick={() =>
        text === "Login"
          ? dispatch(showLoginModal())
          : dispatch(showRegisterModal())
      }
    >
      <span className="relative px-1">{text}</span>
    </button>
  );
};

export default NavBarButton;

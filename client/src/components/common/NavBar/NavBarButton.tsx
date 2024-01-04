import { useAppDispatch } from "../../../hooks/ReduxHooks";
import {
  showLoginModal,
  showRegisterModal,
} from "../../../redux/features/modalSlice";

const NavBarButton = (props: { text: string }) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="link-hover-animation"
      onClick={() =>
        props.text === "Login"
          ? dispatch(showLoginModal())
          : dispatch(showRegisterModal())
      }
    >
      <span className="relative px-1">{props.text}</span>
    </button>
  );
};

export default NavBarButton;

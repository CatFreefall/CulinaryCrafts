import { hideModal } from "../../redux/features/modalSlice";
import { useAppDispatch } from "../../hooks/ReduxHooks";

const ModalBackdrop = () => {
  const dispatch = useAppDispatch();

  return (
    <section
      className="absolute top-0 left-0 w-full h-full bg-black2 opacity-70 transition-opacity duration-300 ease-in"
      onClick={() => dispatch(hideModal())}
    ></section>
  );
};

export default ModalBackdrop;

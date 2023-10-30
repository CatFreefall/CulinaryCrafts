import { hideModal } from "../../redux/features/modalSlice";
import { useAppDispatch } from "../../hooks/ReduxHooks";

const ModalBackdrop = () => {
  const dispatch = useAppDispatch();

  const toggleYScroll = () => {
    document.body.classList.toggle("overflow-y-hidden");
  };
  document.body.classList.add("overflow-y-hidden");

  return (
    <section
      className="absolute top-0 left-0 w-full h-full bg-black2 opacity-70 z-10"
      onClick={() => {
        dispatch(hideModal());
        toggleYScroll();
      }}
    ></section>
  );
};

export default ModalBackdrop;

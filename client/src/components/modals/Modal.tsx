import { hideModal } from "../../redux/features/modalSlice";
import { useAppDispatch } from "../../hooks/ReduxHooks";

const Modal = (props: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();

  const toggleYScroll = () => {
    document.body.classList.toggle("overflow-y-hidden");
  };
  document.body.classList.add("overflow-y-hidden");

  return (
    <section className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
      <div
        className="bg-black2 w-full h-full opacity-70"
        onClick={() => {
          dispatch(hideModal());
          toggleYScroll();
        }}
      ></div>
      <div className="bg-lightgrey w-7/12 h-4/6 absolute rounded-md border-t-large border-primary">
        {props.children}
      </div>
    </section>
  );
};

export default Modal;

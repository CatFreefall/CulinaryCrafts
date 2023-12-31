import ModalBackdrop from "./ModalBackdrop";

type ModalProps = {
  children: JSX.Element;
  sideImage: JSX.Element;
  modalFooter: JSX.Element;
};

const Modal = ({ children, sideImage, modalFooter}: ModalProps) => {
  return (
    <section className="absolute flex justify-center items-center w-screen h-screen top-0 left-0">
      <ModalBackdrop />
      <div className="w-160 h-104 z-10">
        <div className="fixed bg-white h-104 w-[88] rounded-l-md border-t-large border-secondary2">
          <div className="flex flex-col justify-center items-center h-88">
            {children}
          </div>
          <div className="font-header font-medium text-sm flex justify-center items-center">
            {modalFooter}
          </div>
        </div>
        {sideImage}
      </div>
    </section>
  );
};

export default Modal;

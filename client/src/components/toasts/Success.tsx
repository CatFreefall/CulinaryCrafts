import Toast from "./Toast";

const Success = ({ message }: { message: string }) => {
  return <Toast message={message} toastType={"success"} />;
};

export default Success;

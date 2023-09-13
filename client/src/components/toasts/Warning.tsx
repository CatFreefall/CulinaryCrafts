import Toast from "./Toast";

const Warning = ({ message }: { message: string }) => {
  return <Toast message={message} toastType={"warning"} />;
};

export default Warning;

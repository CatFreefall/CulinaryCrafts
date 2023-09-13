import Toast from "./Toast";

const Error = ({ message }: { message: string }) => {
  return <Toast message={message} toastType={"error"} />;
};

export default Error;

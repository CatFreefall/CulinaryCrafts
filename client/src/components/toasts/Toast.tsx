const Toast = ({ message, toastType }: { message: string, toastType: string }) => {
  return (
    <section className="absolute bg-white shadow-md flex px-3 py-2 m-2 text-sm">
      <img
        alt=""
        src={`/assets/icons/toast-icons/${toastType}-toast.png`}
        className="w-6 h-6"
      ></img>
      <h1 className="ml-2 mr-6 w-60">{message}</h1>
      <button className="self-start mt-1">
        <img
          alt=""
          src="/assets/icons/toast-icons/x-icon.png"
          className="w-3 h-3"
        ></img>
      </button>
    </section>
  );
};

export default Toast;
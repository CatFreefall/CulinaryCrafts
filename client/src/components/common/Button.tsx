const Button = ({
  styles,
  label,
  action,
}: {
  styles: string;
  label: string;
  action: () => void;
}) => {
  return (
    <button
      className={`py-1 px-2 text-white border-default border-black rounded-tl-md rounded-br-md hover:brightness-75 ${styles}`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;

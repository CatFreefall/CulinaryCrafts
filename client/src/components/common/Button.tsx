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
      className={`py-1 px-4 text-white rounded-tl-md rounded-br-md hover:brightness-90 transition-opacity ${styles}`}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;

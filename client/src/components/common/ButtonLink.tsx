const ButtonLink = ({
  color,
  label,
  destination,
}: {
  color: string;
  label: string;
  destination: string;
}) => {
  return (
    <button
      className={`bg-${color} rounded-sm text-black text-xs py-1 px-3 hover:bg-opacity-40 hover:text-white transition-all duration-300`}
    >
      <a href={destination}>{label}</a>
    </button>
  );
};

export default ButtonLink;

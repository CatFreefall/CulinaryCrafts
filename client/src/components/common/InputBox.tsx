const InputBox = ({ placeholder }: {placeholder: string}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-sm border-default -outline-offset-2 mt-2 h-7 w-52"
    />
  );
};

export default InputBox;

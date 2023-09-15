const InputBox = ({ placeholder }: {placeholder: string}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-sm border-default -outline-offset-2 mt-2"
    />
  );
};

export default InputBox;

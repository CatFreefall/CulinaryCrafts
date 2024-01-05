import { useState, useEffect } from "react";

import { TextBoxProps } from "../../types";
import isValidTextBox from "../../util/isValidTextBox";

// TODO: Do password - confirm password validation externally

const TextBox = (props: TextBoxProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    isValidTextBox(props) ? setError(false) : setError(true);
  }, [props.type]);
  return (
    <input
      type="text"
      className={`rounded-sm border-default opacity-80 outline-none hover:bg-white text-xs py-[0.15rem] px-1 transition-colors duration-700 shadow-sm ${
        error ? "border-error" : "border-black"
      }`}
      placeholder={props.type}
      onChange={(e) => props.state(e.target.value)}
    />
  );
};

export default TextBox;

import { useState, useEffect } from "react";

import { TextBoxProps } from "../../types";
import isValidTextBox from "../../util/isValidTextBox";

// TODO: Do password - confirm password validation externally

const TextBox = (props: TextBoxProps) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!isValidTextBox(props, value)) {
      if (value) setError(true);
      else setError(false);
    } else setError(false);

    // The textbox's state is only updated if an error DNE. Otherwise an empty string is passed
    props.state(error ? "" : value);
  }, [value, error]);

  return (
    <input
      type="text"
      className={`rounded-sm border-default opacity-80 outline-none hover:bg-white text-xs py-[0.15rem] px-1 transition-colors duration-500 shadow-sm ${
        error ? "border-error" : "border-black"
      }`}
      placeholder={props.type}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextBox;

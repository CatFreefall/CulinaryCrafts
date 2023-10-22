import { useState } from "react";

import { useAppDispatch } from "../../../hooks/ReduxHooks";
import { toggleMode } from "../../../redux/features/darkModeSlice";

const DarkModeToggle = () => {
  const dispatch = useAppDispatch();

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleMode());
  };

  return (
    <label className="relative inline-flex items-center">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
      />
      <span className="flex justify-between text-sm rounded-sm shadow-lg border-default border-darkgrey">
        <div className={`px-3 m-0.5 rounded-sm transition-colors duration-200 cursor-pointer ${darkMode ? "bg-secondary1 text-white" : "bg-grey"}`} onClick={toggleDarkMode}>
          Dark
        </div>
        <div className={`px-3 m-0.5 rounded-sm transition-colors duration-200 cursor-pointer ${darkMode ? "bg-grey" : "bg-secondary1 text-white"}`} onClick={toggleDarkMode}>
          Light
        </div>
      </span>
    </label>
  );
};

export default DarkModeToggle;

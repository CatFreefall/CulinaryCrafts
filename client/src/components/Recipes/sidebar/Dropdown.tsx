import { useState } from "react";

import DropdownContents from "./DropdownContents";

interface DropdownType {
  type: "Category" | "Cook Time" | "Date Posted" | "Calories";
}

const Dropdown = ({ type }: DropdownType) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDropddown = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div
        className={`flex items-center py-2 px-4 mr-1 mt-1 cursor-pointer hover:bg-grey border-l-default ${
          expanded ? "border-secondary2" : "border-grey"
        }`}
        onClick={toggleDropddown}
      >
        <img
          src={`/assets/icons/sidebar-icons/${
            type === "Category"
              ? "category"
              : type === "Cook Time"
              ? "cook-time"
              : type === "Date Posted"
              ? "date-posted"
              : type === "Calories"
              ? "calories"
              : ""
          }-icon.png`}
          className="w-6"
        />
        <h6 className="ml-2 mr-8">{type}</h6>
        <img
          src={`${
            expanded
              ? "/assets/icons/sidebar-icons/minimize-dropdown-icon.png"
              : "/assets/icons/sidebar-icons/expand-dropdown-icon.png"
          }`}
          className="w-4 h-4 ml-auto"
        />
      </div>
      <div>
        <DropdownContents expandedState={expanded} />
      </div>
    </>
  );
};

export default Dropdown;

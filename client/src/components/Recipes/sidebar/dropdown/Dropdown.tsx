import { useState } from "react";

import DropdownContents from "./DropdownContents";
import ContentComponent from "./ContentComponent";

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
          expanded ? "border-secondary1" : "border-grey"
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
        <h6 className="mx-2">{type}</h6>
        <img
          src={`${
            expanded
              ? "/assets/icons/sidebar-icons/minimize-dropdown-icon.png"
              : "/assets/icons/sidebar-icons/expand-dropdown-icon.png"
          }`}
          className="w-4 h-4 ml-auto"
        />
      </div>
      <DropdownContents
        expandedState={expanded}
        children={
          type === "Category" ? (
            <ContentComponent />
          ) : type === "Cook Time" ? (
            <ContentComponent />
          ) : type === "Date Posted" ? (
            <ContentComponent />
          ) : type === "Calories" ? (
            <ContentComponent />
          ) : (
            <></>
          )
        }
      />
    </>
  );
};

export default Dropdown;

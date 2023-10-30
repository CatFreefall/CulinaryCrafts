import { useState } from "react";

import SideBarExpanded from "./SideBarExpanded";
import SideBarCollapsed from "./SideBarCollapsed";

const SideBarContainer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <aside className={`duration-300 ease-out ${expanded ? "w-54" : "w-16"}`}>
      {expanded ? (
        <SideBarExpanded toggleSidebar={toggleSidebar} />
      ) : (
        <SideBarCollapsed toggleSidebar={toggleSidebar} />
      )}
    </aside>
  );
};

export default SideBarContainer;

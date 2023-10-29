import { useState } from "react";

import SidebarExpanded from "./SidebarExpanded";
import SidebarCollapsed from "./SidebarCollapsed";

const SidebarContainer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <aside
      className={`relative whitespace-nowrap transition-all duration-200 ease-out ${
        expanded ? "w-54" : "w-16"
      }`}
    >
      {expanded ? (
        <SidebarExpanded toggleSidebar={toggleSidebar} />
      ) : (
        <SidebarCollapsed toggleSidebar={toggleSidebar} />
      )}
    </aside>
  );
};

export default SidebarContainer;

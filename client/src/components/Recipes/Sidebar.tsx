import { useState } from "react";

import SidebarExpanded from "./SidebarExpanded";
import SidebarCollapsed from "./SidebarCollapsed";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <aside
      className={`relative whitespace-nowrap ${expanded ? "w-48" : "w-15"}`}
    >
      <>
        {expanded ? (
          <SidebarExpanded toggleSidebar={toggleSidebar} />
        ) : (
          <SidebarCollapsed toggleSidebar={toggleSidebar} />
        )}
      </>
    </aside>
  );
};

export default Sidebar;

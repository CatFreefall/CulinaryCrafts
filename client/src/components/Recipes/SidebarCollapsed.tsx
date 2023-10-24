import DropdownIcon from "./DropdownIcon";

const SidebarCollapsed = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <section className="h-screen fixed border-r-grey border-r-default shadow-md font-header font-medium pt-1">
      <div
        className="flex items-center pr-4 pl-5 py-2 cursor-pointer hover:bg-grey"
        onClick={toggleSidebar}
      >
        <img
          src="/assets/icons/sidebar-icons/expand-sidebar-icon.png"
          className="w-4 h-4 ml-auto my-1"
        />
      </div>
      <div className="w-full h-0.5 bg-grey rounded-full mt-1" />
      <div className="w-full">
        <DropdownIcon />
        <DropdownIcon />
        <DropdownIcon />
        <DropdownIcon />
      </div>
    </section>
  );
};

export default SidebarCollapsed;

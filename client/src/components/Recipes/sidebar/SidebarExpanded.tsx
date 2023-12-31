import Dropdown from "./dropdown/Dropdown";

const SideBarExpanded = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <section className="sticky top-24 h-136 border-r-grey border-r-default shadow-md font-header font-medium pt-1 overflow-y-auto">
      <div
        className="flex items-center mr-1 pr-4 pl-5 py-2 cursor-pointer hover:bg-grey"
        onClick={toggleSidebar}
      >
        <h2>Filter By:</h2>
        <img
          src="/assets/icons/sidebar-icons/minimize-sidebar-icon.png"
          className="w-4 h-4 ml-auto"
        />
      </div>
      <div className="w-full h-0.5 bg-grey mt-1" />
      <Dropdown type="Category" />
      <Dropdown type="Cook Time" />
      <Dropdown type="Date Posted" />
      <Dropdown type="Calories" />
    </section>
  );
};

export default SideBarExpanded;

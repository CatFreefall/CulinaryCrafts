import Category from "./Category";
import CookTime from "./CookTime";
import DatePosted from "./DatePosted";
import Calories from "./Calories";

const SidebarExpanded = () => {
  return (
    <section className="h-screen fixed border-r-grey border-r-default shadow-md font-header font-medium pt-1">
      <div className="flex items-center mr-1 pr-4 pl-5 py-2 cursor-pointer hover:bg-grey">
        <h2>Filter By:</h2>
        <img
          src="/assets/icons/sidebar-icons/minimize-sidebar-icon.png"
          className="w-4 h-4 ml-auto"
        />
      </div>
      <div className="w-full h-0.5 bg-grey rounded-full mt-1" />
      <Category />
      <CookTime />
      <DatePosted />
      <Calories />
    </section>
  );
};

export default SidebarExpanded;

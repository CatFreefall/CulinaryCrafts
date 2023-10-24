const Dropdown = () => {
  return (
    <div className="flex items-center py-2 pl-5 pr-4 mr-1 mt-1 cursor-pointer hover:bg-grey">
      <img
        src="/assets/icons/sidebar-icons/category-icon.png"
        className="w-6"
      />
      <h6 className="ml-2 mr-8">Category</h6>
      <img
        src="/assets/icons/sidebar-icons/expand-dropdown-icon.png"
        className="w-4 h-4"
      ></img>
    </div>
  );
};

export default Dropdown;

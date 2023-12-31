const DropdownIcon = ({ type }: { type: string }) => {
  return (
    <div className="cursor-pointer hover:bg-grey mt-1 w-full flex justify-center">
      <img
        src={`/assets/icons/sidebar-icons/${type}-icon.png`}
        className="w-6 py-2"
      />
    </div>
  );
};

export default DropdownIcon;

type ListItemProps = {
  content: string;
  type: "free" | "paid";
};

const ListItem = ({ content, type }: ListItemProps) => {
  return (
    <li className="flex items-center">
      <img
        alt=""
        src={`${
          type === "free"
            ? "/assets/icons/checkmark-1.png"
            : "/assets/icons/checkmark-2.png"
        }`}
        className="w-5"
      ></img>
      <p className="text-sm m-1">{content}</p>
    </li>
  );
};

export default ListItem;

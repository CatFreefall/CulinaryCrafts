import ListItem from "./ListItem";
import PlanContainer from "./PlanContainer";

const Free = () => {
  return (
    <PlanContainer
      children={
        <>
          <h4 className="font-header font-medium text-darkgrey text-md">
            Standard
          </h4>
          <h2 className="font-header font-bold text-black text-3xl pl-3 mb-3">
            Free
          </h2>
          <ul>
            <ListItem
              content="Access to thousands of free recipes"
              type="free"
            />
            <ListItem
              content="View recipe details like calories and cooking time"
              type="free"
            />
            <ListItem content="Save your favourite recipes " type="free" />
          </ul>
        </>
      }
      type="free"
    />
  );
};

export default Free;

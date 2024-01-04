import { PlanContainerProps } from "../../types";

const PlanContainer = (props: PlanContainerProps) => {
  return (
    <div
      className={`bg-white w-56 px-7 py-6 border-t-large rounded-tl-md shadow-lg mx-6 ${
        props.type === "free" ? "border-primary" : "border-secondary1"
      }`}
    >
      {props.children}
    </div>
  );
};

export default PlanContainer;

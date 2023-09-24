import { ReactNode } from "react";

type PlanContainerProps = {
  children: ReactNode;
  type: "free" | "paid";
};

const PlanContainer = ({ children, type }: PlanContainerProps) => {
  return (
    <div
      className={`bg-white w-56 px-7 py-6 border-t-large rounded-tl-md rounded-br-md shadow-lg mx-6 ${
        type === "free" ? "border-primary" : "border-secondary1"
      }`}
    >
      {children}
    </div>
  );
};

export default PlanContainer;

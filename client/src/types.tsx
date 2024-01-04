export type ButtonProps = {
  bgColor: string;
  textColor: string;
  action: JSX.Element;
  size: "small" | "default" | "large";
}

// navbar types
export type SecondNavBarProps = {
  location: string;
  desiredLocation: string;
  children: JSX.Element;
}

// upgrade page types
type PlanType = "free" | "paid";

export type PlanContainerProps = {
  children: JSX.Element;
  type: PlanType;
};

export type ListItemProps = {
  content: string;
  type: PlanType;
};
export type SecondNavBarProps = {
  location: string;
  desiredLocation: string;
  children: JSX.Element;
}

export type ButtonProps = {
  bgColor: string;
  textColor: string;
  action: JSX.Element;
  size: "small" | "default" | "large";
}
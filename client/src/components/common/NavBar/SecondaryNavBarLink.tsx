import { SecondNavBarProps } from "../../../types";

const SecondaryNavBarLink = (props: SecondNavBarProps) => {
  return (
    <li
      className={`mx-5 border-b-default ${
        props.location === `${props.desiredLocation}`
          ? "border-primary"
          : "border-grey"
      }`}
    >
      {props.children}
    </li>
  );
};

export default SecondaryNavBarLink;

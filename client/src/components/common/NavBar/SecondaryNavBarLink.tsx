import { ReactNode } from "react";

const SecondaryNavBarLink = ({
  location,
  desiredLocation,
  children,
}: {
  location: string;
  desiredLocation: string;
  children: ReactNode;
}) => {
  return (
    <li
      className={`mx-5 border-b-default ${
        location === `${desiredLocation}` ? "border-primary" : "border-grey"
      }`}
    >
      {children}
    </li>
  );
};

export default SecondaryNavBarLink;

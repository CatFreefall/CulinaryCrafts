import { TextBoxProps } from "../types";

const isValidTextBox = (props: TextBoxProps): Boolean => {
  switch (props.type) {
    case "Email":
      return false;
    case "Password" || "Confirm Password":
      return true;
    case "Card Number":
      return false;
    case "Exp. Date":
      return false;
    case "CVV/CVC":
      return false;
    case "Full Name":
      return false;
    case "Street Address":
      return false;
    case "Country":
      return false;
    case "City":
      return false;
    case "Zip Code":
      return false;
    default:
      return true;
  }
};

export default isValidTextBox;

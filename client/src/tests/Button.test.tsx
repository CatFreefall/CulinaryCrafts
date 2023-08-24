import { render } from "@testing-library/react";
import Button from "../components/common/Button";

describe(Button, () => {
  it("should render a button with the given label", () => {
    const label = "I am a button label";
    const {queryByLabelText} = render(<Button label={label} />);
    
  })
})
import Button from "../common/Button";
import ListItem from "./ListItem";
import PlanContainer from "./PlanContainer";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { showPaymentModal } from "../../redux/features/modalSlice";

const Paid = () => {
  const dispatch = useAppDispatch();

  return (
    <PlanContainer
      children={
        <>
          <h4 className="font-header font-medium text-darkgrey text-md">
            Paid
          </h4>
          <h2 className="font-header font-bold text-black text-3xl pl-3">
            $20
          </h2>
          <h4 className="font-header font-medium text-darkgrey">
            One Time Payment
          </h4>
          <ul>
            <ListItem content="All Free Benefits" type="paid" />
            <ListItem content="Access to Premium Recipes" type="paid" />
            <ListItem
              content="Access to nutritional facts of all recipes"
              type="paid"
            />
          </ul>
          <div className="flex justify-center mt-6">
            <Button
              bgColor="secondary1"
              textColor="white"
              action={<a onClick={() => dispatch(showPaymentModal())}>Upgrade</a>}
              size="large"
            />
          </div>
        </>
      }
      type="paid"
    />
  );
};

export default Paid;

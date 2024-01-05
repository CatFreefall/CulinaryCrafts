import { useState } from "react";

import TextBox from "../common/TextBox";
import Modal from "./Modal";

const PaymentModal = () => {
  const [cardNumber, setCardNumber] = useState("");

  return (
    <section>
      <Modal
        children={
          <div className="flex flex-row h-full">
            <div>
              <TextBox type="Email" state={setCardNumber}/>
            </div>
            <img
              src="/assets/images/food-background-3.png"
              className="ml-auto rounded-br-md"
            />
          </div>
        }
      />
    </section>
  );
};

export default PaymentModal;

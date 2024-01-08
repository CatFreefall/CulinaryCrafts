import { useState } from "react";

import TextBox from "../common/TextBox";
import Modal from "./Modal";

const PaymentModal = () => {
  //TODO: consider using a useReducer hook instead
  const [cardNumber, setCardNumber] = useState("");

  return (
    <section>
      <Modal
        children={
          <div className="flex flex-row h-full">
            <div>
              <TextBox type="Email" state={setCardNumber} />
              <TextBox type="Password" state={setCardNumber} />
              <TextBox type="Card Number" state={setCardNumber} />
              <TextBox type="Exp. Date" state={setCardNumber} />
              <TextBox type="CVV/CVC" state={setCardNumber} />
              <TextBox type="Full Name" state={setCardNumber} />
              <TextBox type="Street Address" state={setCardNumber} />
              <TextBox type="Country" state={setCardNumber} />
              <TextBox type="City" state={setCardNumber} />
              <TextBox type="Postal Code" state={setCardNumber} />
              <button onClick={() => console.log(cardNumber)}>Click</button>
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

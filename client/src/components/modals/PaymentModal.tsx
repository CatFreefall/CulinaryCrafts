import Modal from "./Modal";

const PaymentModal = () => {
  return (
    <section>
      <Modal
        children={
          <div className="flex flex-row h-full">
            <div>Payment Modal</div>
            <img src="/assets/images/food-background-3.png" className="ml-auto rounded-br-md"/>
          </div>
        }
      />
    </section>
  );
};

export default PaymentModal;

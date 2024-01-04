import Button from "../common/Button";
import InputBox from "../common/InputBox";
import Modal from "./Modal";

const LoginModal = () => {
  return (
    <section>
      {/* className="absolute flex justify-center items-center w-screen h-screen top-0 left-0" */}
      <Modal children={<></>} />
      {/* <div className="w-160 h-104 z-10 bg-white rounded-md grid grid-cols-13 grid-rows-9 border-t-large border-secondary1">
        <h1 className="text-4xl font-header font-medium text-black mb-6 col-start-3 col-end-6 row-start-2 flex justify-center">
          Log in
        </h1>
        <div className="col-start-2 col-end-7 row-start-4 flex justify-center items-end">
          <InputBox placeholder={"Email"} />
        </div>
        <div className="col-start-2 col-end-7 row-start-5 flex flex-col items-center">
          <InputBox placeholder={"Password"} />
          <button className="text-darkgrey text-xs w-fit h-fit italic">
            Forgot Password?
          </button>
        </div>
        <div className="col-start-3 col-end-6 row-start-6 flex justify-center items-end">
          <Button
            styles="bg-secondary2 h-9 w-16"
            label="Login"
            action={() => {}}
          />
        </div>
        <div className="col-start-2 col-end-7 row-start-9 flex justify-center items-center text-sm h-1/2">
          <h6 className="mr-2">Not Registered?</h6>
          <Button
            styles="bg-secondary1 h-8 w-14"
            label="Login"
            action={() => {}}
          />
        </div>
        <img
          alt=""
          src="/assets/images/food-background-3.png"
          className="col-start-8 col-end-13"
        ></img>
      </div> */}
    </section>
  );
};

export default LoginModal;

import Button from "../common/Button";
import InputBox from "../common/InputBox";
import ModalBackdrop from "./ModalBackdrop";

const LoginModal = () => {
  return (
    <section className="absolute flex justify-center items-center w-screen h-screen top-0 left-0">
      <ModalBackdrop />
      <div className="w-160 h-104 z-10">
        <div className="fixed bg-white h-104 w-88 rounded-l-md border-t-large border-secondary2">
          <div className="flex flex-col justify-center items-center h-88">
            <h1 className="text-4xl font-header font-medium text-black mb-6">
              Log in
            </h1>
            <InputBox placeholder={"Email"} />
            <InputBox placeholder={"Password"} />
            <a href="/">
              <h6 className="text-darkgrey text-xs">Forgot Password?</h6>
            </a>
            <Button
              styles={"bg-primary my-3"}
              label={"Log in"}
              action={() => {}}
            />
          </div>
          <div className="font-header font-medium text-sm flex justify-center items-center">
            <h4 className="mr-2">Not Registered?</h4>
            <Button
              styles={"bg-secondary2"}
              label={"Sign Up"}
              action={() => {}}
            />
          </div>
        </div>
        <img
          alt=""
          src="/assets/images/food-background-3.png"
          className="h-full ml-auto rounded-r-md border-t-large border-secondary2"
        />
      </div>
    </section>
  );
};

export default LoginModal;

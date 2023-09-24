import Free from "../components/upgrade/Free";
import Paid from "../components/upgrade/Paid";

const Upgrade = () => {
  return (
    <section className="flex flex-col items-center font-header font-medium">
      <div className="flex items-center mt-6">
        <h1 className="text-4xl">Upgrade</h1>
        <img
          alt=""
          src="/assets/icons/upgraded-true-icon.png"
          className="w-8 h-8 mx-2"
        ></img>
      </div>
      <h4 className="">
        Uprade your account and gain access to exclusive premium benefits!
      </h4>
      <div className="flex mt-6">
        <Free />
        <Paid />
      </div>
    </section>
  );
};

export default Upgrade;

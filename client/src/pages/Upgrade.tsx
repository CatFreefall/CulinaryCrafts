import Free from "../components/upgrade/Free";
import Paid from "../components/upgrade/Paid";

const Upgrade = () => {
  return (
    <main className="absolute h-screen w-screen top-0 flex justify-center items-center">
      <section className="flex">
        <Free />
        <Paid />
      </section>
    </main>
  );
};

export default Upgrade;

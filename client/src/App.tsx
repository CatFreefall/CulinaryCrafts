import { BrowserRouter } from "react-router-dom";

import Router from "./Router";

import { useAppSelector } from "./hooks/ReduxHooks";
import { selectModal } from "./redux/features/modalSlice";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import PaymentModal from "./components/modals/PaymentModal";
import Footer from "./components/common/Footer";
import PrimaryNavBar from "./components/common/NavBar/PrimaryNavBar";
import SecondaryNavBar from "./components/common/NavBar/SecondaryNavBar";

const App = () => {
  const modal = useAppSelector(selectModal);

  return (
    <BrowserRouter>
      <section className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10">
          <PrimaryNavBar />
          <SecondaryNavBar />
        </header>
        <main className="grow">
          <Router />
        </main>
        <Footer />
      </section>
      {modal.type === "login" && <LoginModal />}
      {modal.type === "register" && <RegisterModal />}
      {modal.type === "payment" && <PaymentModal />}
    </BrowserRouter>
  );
};

export default App;

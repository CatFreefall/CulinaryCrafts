import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/common/NavBar/NavBar";
import Router from "./Router";

import { useAppSelector } from "./hooks/ReduxHooks";
import { selectModal } from "./redux/features/modalSlice";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import PaymentModal from "./components/modals/PaymentModal";
import Footer from "./components/common/Footer";

const App = () => {
  const modal = useAppSelector(selectModal);

  return (
    <BrowserRouter>
      <section className="flex flex-col h-screen">
        <NavBar />
        <section className="flex-1 overflow-y-auto">
          <Router />
        </section>
        <Footer />
      </section>
      {modal.type === "login" && <LoginModal />}
      {modal.type === "register" && <RegisterModal />}
      {modal.type === "payment" && <PaymentModal />}
    </BrowserRouter>
  );
};

export default App;

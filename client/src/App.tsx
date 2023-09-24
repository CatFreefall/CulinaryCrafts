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
      <section className="flex flex-col min-h-screen">
        <section className="sticky top-0">
          <NavBar />
        </section>
        <main className="flex-grow">
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

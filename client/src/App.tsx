import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/common/NavBar/NavBar";
import Router from "./Router";

import { useAppSelector } from "./hooks/ReduxHooks";
import { selectModal } from "./redux/features/modalSlice";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import PaymentModal from "./components/modals/PaymentModal";

const App = () => {
  const modal = useAppSelector(selectModal);

  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      {modal.type === "login" && <LoginModal />}
      {modal.type === "register" && <RegisterModal />}
      {modal.type === "payment" && <PaymentModal />}
    </BrowserRouter>
  );
};

export default App;

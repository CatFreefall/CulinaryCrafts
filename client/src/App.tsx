import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/common/NavBar/NavBar";
import Router from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
};

export default App;

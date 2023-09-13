import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./components/common/NavBar/NavBar";
import Router from "./Router";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

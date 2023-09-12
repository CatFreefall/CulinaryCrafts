import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Recipes from "./pages/Recipes";
import NutriValues from "./pages/NutriValues";

import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/nutritional-values" element={<NutriValues />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;

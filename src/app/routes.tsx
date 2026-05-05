import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CalculationPage from "./pages/CalculationPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "calculo/:tipo", Component: CalculationPage },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/cadastro",
    Component: Signup,
  },
]);

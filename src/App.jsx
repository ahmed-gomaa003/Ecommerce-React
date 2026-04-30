import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { NotFound } from "./components/NotFound/NotFound";
import { Products } from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Categories/Categories";
import { Home } from "./components/Home/Home";
import Auth from "./context/Auth";
import Guard from "./components/Guard/Guard";
import { Navigate } from "react-router-dom";
import Brands from "./components/Brands/Brands";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: (
          <Guard>
            <Products />
          </Guard>
        ),
      },
      {
        path: "cart",
        element: (
          <Guard>
            <Cart />
          </Guard>
        ),
      },
      {
        path: "brands",
        element: (
          <Guard>
            <Brands />
          </Guard>
        ),
      },
      {
        path: "categories",
        element: (
          <Guard>
            <Categories />
          </Guard>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      { path: "register", element: <Register /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </>
  );
}

export default App;

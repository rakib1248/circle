import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Admin from "../Components/Admin/Admin";
import AdminSingle from "../Components/Admin/AdminSingle";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/:id",
        element: <AdminSingle />,
      },
    ],
  },
]);

export default Router;

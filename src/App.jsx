import { RouterProvider } from "react-router-dom";
import "./App.scss";


import "swiper/css";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;

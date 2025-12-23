import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import Login from "./components/Login";
import Doctor from "./components/Doctor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/appointment",
      element: (
        <>
          <Navbar />
          <Appointment />
        </>
      ),
    },
    {
      path: "/doctors",
      element: (
        <>
          <Navbar />
          <Doctor />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Roots from "../Roots/Roots";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/sign-in",
          element: <Login/>,
        },
      ]
    },
  ]);

  export default router
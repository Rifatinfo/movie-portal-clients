import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Roots from "../Roots/Roots";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddMovie from "../Pages/AddMovie/AddMovie";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";


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
        {
          path : "/add-movie",
          element : <AddMovie/>
        },
        {
          path : "/update-movie",
          element : <UpdateMovie/>
        }
      ]
    },
  ]);

  export default router
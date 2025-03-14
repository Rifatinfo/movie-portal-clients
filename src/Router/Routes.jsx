import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Roots from "../Roots/Roots";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddMovie from "../Pages/AddMovie/AddMovie";
import UpdateMovie from "../Pages/UpdateMovie/UpdateMovie";
import MovieDetails from "../Components/MovieDetails/MovieDetails";
// import FeatureMovie from "../Components/featureMovie/featureMovie";
import FeatureDetails from "../Components/FeatureDetails/FeatureDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader : () => fetch('http://localhost:5000/movies')
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
          path : "/feature-movie/:id",
          element : <FeatureDetails/>,
          loader : ({params}) => fetch(`http://localhost:5000/feature-movie/${params.id}`)
        },
        {
          path : "/update-movie/:id",
          element : <UpdateMovie/>,
          loader : ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
        },
        {
          path : "/details-movie/:id",
          element : <MovieDetails/>,
          loader : ({params}) => fetch(`http://localhost:5000/movies/${params.id}`)
        }
      ]
    },
  ]);

  export default router
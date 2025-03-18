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
import FeatureDetails from "../Components/FeatureDetails/FeatureDetails";
import AllMovie from "../Pages/AllMovie/AllMovie";
import AllMovieDetails from "../Components/AllMovieDetails/AllMovieDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyFavorite from "../Pages/MyFavorite/MyFavorite";
// import ErrorPage from "../Components/ErrorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader : () => fetch('https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/movies')
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
          loader : ({params}) => fetch(`https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/feature-movie/${params.id}`)
        },
        {
          path : "/update-movie/:id",
          element : <UpdateMovie/>,
          loader : ({params}) => fetch(`https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/movies/${params.id}`)
        },
        {
          path : "/details-movie/:id",
          element : <MovieDetails/>,
          loader : ({params}) => fetch(`https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/movies/${params.id}`)
        },
        {
          path : '/all-movies',
          element : <AllMovie/>,
          loader : () => fetch('https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/all-movie')
        },
        {
          path : '/all-movies/:id',
          element : <PrivateRoute><AllMovieDetails/></PrivateRoute>,
          loader : ({params}) => fetch(`https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/all-movie/${params.id}`)
        },
        {
          path : '/my-favorite',
          element : <MyFavorite/>,
          loader : () => fetch('https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/my-favourite')
        }
      ]
    },
  ]);

  export default router
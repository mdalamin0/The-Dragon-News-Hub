import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loader/Loading";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "category/:categoryId",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
        hydrateFallbackElement: <Loading />
      }
    ]
  },
  {
    path: "about",
    Component: About
  },
  {
    path: "career",
    Component: Career
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  },
  {
    path: "/news-details/:newsId",
    loader: () => fetch("/news.json"),
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    hydrateFallbackElement: <Loading />
  },
  {
    path: "/*",
    element: <Error />
  }
])


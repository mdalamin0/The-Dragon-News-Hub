import { createBrowserRouter } from "react-router";
import { lazy } from "react";
// import HomeLayout from "../layouts/HomeLayout";
// import Home from "../pages/Home/Home";
// import CategoryNews from "../pages/CategoryNews/CategoryNews";
// import AuthLayout from "../layouts/AuthLayout";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// // import NewsDetails from "../pages/NewsDetails/NewsDetails";
// import PrivateRoute from "./PrivateRoute";
// import Error from "../pages/Error/Error";
// import About from "../pages/About/About";
// import Career from "../pages/Career/Career";

const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Home = lazy(() => import("../pages/Home/Home"));
const CategoryNews = lazy(() => import("../pages/CategoryNews/CategoryNews"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const About = lazy(() => import("../pages/About/About"));
const Career = lazy(() => import("../pages/Career/Career"));
const Error = lazy(() => import("../pages/Error/Error"));
import Loading from "../components/Loader/Loading";
const NewsDetails = lazy(() => import("../pages/NewsDetails/NewsDetails"));

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


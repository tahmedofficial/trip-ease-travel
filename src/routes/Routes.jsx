import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ResortsDetails from "../pages/ResortDetails/ResortsDetails";
import Location from "../pages/Location/Location";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/resort/:id",
                element: <ResortsDetails></ResortsDetails>
            },
            {
                path: "/location",
                element: <Location></Location>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;
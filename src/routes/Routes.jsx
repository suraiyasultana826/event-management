import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Gallery from "../pages/Home/Gallery";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/public/celebrations.json')

            },
            {
                path:'/public/celebrations.json/:id',
                element: <PrivateRoute><About></About></PrivateRoute>

            },
            {
                path:'/gallery',
            element:<Gallery></Gallery>
            },
            {
                path:'/login',
            element:<Login></Login>
            },
            {
                path:'/register',
            element:<Register></Register>
            },
        ]
    }
]);
export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Gallery from "../pages/Home/Gallery";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Home/Services";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/celebrations.json')

            },
            {
                path:'/public/celebrations.json/:id',
                element: <PrivateRoute><About></About></PrivateRoute>,
                
            },
            {
                path:'/gallery',
            element:<Services></Services>,
            loader: () => fetch('/celebrations.json')
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
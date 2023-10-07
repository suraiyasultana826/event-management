import {  useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);


    if(loading){
        return <span className="loading loading-spinner loading-lg m-60 mr-48 ml-96"></span>
    }


    if(user){
        return children ;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
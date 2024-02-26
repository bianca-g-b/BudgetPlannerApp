import { useSelector } from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({children}) {
    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state) => state.authenticated.isAuthenticated);

    return (
        <>
            {user && isAuthenticated ? <Outlet>{children}</Outlet> : <Navigate to = "/login" />}   
        </> 
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;
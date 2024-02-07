import { useSelector } from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({children}) {
    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state) => state.authenticated.isAuthenticated);

    console.log("user and auth state in private route:", user, isAuthenticated);

    return (
        <Outlet>
            {user && isAuthenticated ? children : <Navigate to = "/login" />}   
        </Outlet> 
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;
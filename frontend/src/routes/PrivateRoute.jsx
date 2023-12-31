import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({children}) {
    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state) => state.authenticated.isAuthenticated);

    console.log("user and auth state in private route:", user, isAuthenticated);

    return (
        user && isAuthenticated ? children : <Navigate to = "/login" />
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;
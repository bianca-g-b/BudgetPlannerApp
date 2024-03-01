import "../../styles/auth/Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { fetchCSRFToken, loginUser, fetchUser} from "../../actions/authActions.js";
import { setUser} from "../../redux/userSlice.js";
import { setIsAuthenticated } from "../../redux/authenticatedSlice.js";
import { handleLogin } from "../../helpers/authHelpers.js";
import { useRedirect } from "../../hooks/authHooks";
import { errorAlertStyle } from "../../styles/budget/alertsStyles.js";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [openFail, setOpenFail] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state)=> state.authenticated.isAuthenticated);
    const theme = useSelector((state) => state.theme.theme);

    // Hook to redirect to dashboard, if user is logged in
    useRedirect({user, isAuthenticated, navigate});

    return (
        <div className = "login-form-container">
            <div className = {`login-main ${theme==='dark' ? 'login-main-dark' : ''}`}>
                <h1 className = {`login-form-title ${theme==='dark' ? 'login-form-title-dark' : ''}`}>Login</h1>
                <form className = "login-form"
                    onSubmit = {(e) => handleLogin(e, {username, password, fetchCSRFToken, loginUser,
                    dispatch,  fetchUser, setUser, setIsAuthenticated, 
                    navigate, isAuthenticated, setOpenFail})}
                >
                    <div className="login-username-container">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            className={`login-username-input ${theme==='dark' ? 'login-username-input-dark' : ''}`}
                            placeholder="Enter username"
                            autoComplete="username"
                            onChange = {(e) => {setUsername(e.target.value)}}
                        />
                    </div>

                    <div className="login-password-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                            className={`login-password-input ${theme==='dark' ? 'login-password-input-dark' : ''}`}
                            placeholder="Enter password"
                            autoComplete="current-password"
                            onChange = {(e) => {setPassword(e.target.value)}}
                        />
                    </div>

                    <Button 
                        type="submit" 
                        color="primary"
                        variant={theme==='dark' ? "outlined" : "contained"}
                        >Login
                    </Button>

                    <div className="forgot-password-div">
                        <NavLink
                        className={`forgot-password-link ${theme==='dark' ? 'forgot-password-link-dark' : ''}`}
                            to="/reset">
                            Forgot password?
                        </NavLink>
                    </div>
                </form>


                <Snackbar open={openFail} autoHideDuration={2500} onClose={() => setOpenFail(false)}>
                    <MuiAlert variant="outlined" onClose={() => setOpenFail(false)} severity="error" sx={errorAlertStyle(theme)}>
                        Login failed! Please try again.
                    </MuiAlert>
                </Snackbar>
            </div>
            <p className="register-redirect-message">Don&#39;t have an account?</p>
            <NavLink 
                to="/register"
                className={`register-redirect-link ${theme==='dark' ? 'register-redirect-link-dark' : ''}`}>Register here
            </NavLink>
        </div>
    )
}

export default Login;
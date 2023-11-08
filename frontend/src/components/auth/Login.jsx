import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCSRFToken, loginUser, fetchUser} from "./authActions";
import {useNavigate } from "react-router-dom";
import {setUser} from "../../redux/userSlice.js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()


    async function handleLogin(e) {
        e.preventDefault();
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await loginUser(username, password, csrfToken);
        if (response.status === 202)  {
            console.log("Login successful.");
            const user = await fetchUser(dispatch, csrfToken);
            dispatch(setUser(user));
            console.log("user in login:", user);
            navigate("/dashboard");   
        } else {
            alert ("Login failed.Please try again.")
        }
    }
    return(
        <div className = "login-main">
            <h1 className = "login-form-title">Login here</h1>
            <form className = "login-form"
                onSubmit = {handleLogin}
            >
                <div className="login-username-container">
                    <label htmlFor="username">Username</label>
                    <input type="username" 
                    className="login-username" 
                    placeholder="Enter username"
                    onChange = {(e) => {setUsername(e.target.value)}}
                     />
                </div>

                <div className="login-password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="login-password" 
                    placeholder="Enter password"
                    onChange = {(e) => {setPassword(e.target.value)}}
                     />
                </div>

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}

export default Login;
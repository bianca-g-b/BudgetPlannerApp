import { useState } from "react";
import { useDispatch} from "react-redux";
import { registerUser, fetchCSRFToken } from "./authActions";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    // create user account    
    async function handleRegister(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            const csrfToken = await fetchCSRFToken(dispatch);
            const response = await registerUser(username, password, confirmPassword, csrfToken);
            console.log(response);
            console.log(csrfToken, "registration csrf token first")
            if (response.status === 202) {
                alert("You have successfully registered!")
            } else {
                console.log(response.message);
                console.log(csrfToken, "registration csrf token")
                alert("Registration failed. Please try again.")
            } 
        } else {
            alert("Passwords do not match. Please try again.")
        }
    }
    
    return (
        <div className = "register-main">
        <h1 className = "register-form-title">Create an account</h1>
        <form className = "register-container"
            onSubmit = {handleRegister}
            >
            <div className="reg-username-container">
                <label htmlFor="username">Username</label>
                <input type="username" 
                    className="reg-username" 
                    placeholder="Create username"
                    onChange = { (e) => setUsername(e.target.value)}
                     />
            </div>

            <div className="reg-password-container">
                <label htmlFor="password">Password</label>
                <input type="password" 
                    className="reg-password" 
                    placeholder="Create password"
                    onChange = { (e) => setPassword(e.target.value)}
                     />
            </div>

            <div className="reg-password-container">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" 
                    className="reg-password" 
                    placeholder="Confirm password"
                    onChange = { (e) => setConfirmPassword(e.target.value)}
                     />
            </div>

            <button type="submit" className="register-button">Register</button>
        </form>

        </div>
    )
}

export default Register;
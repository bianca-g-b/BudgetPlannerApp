import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { registerUser, fetchCSRFToken } from "../../actions/authActions";
import { useNavigate } from "react-router-dom"

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email,setEmail] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state) => state.authenticated.isAuthenticated);

    // create user account    
    async function handleRegister(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            const csrfToken = await fetchCSRFToken(dispatch);
            const response = await registerUser(username, password, confirmPassword, email, csrfToken);
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

    // if user is logged in already, redirect to dashboard
    useEffect(()=>{
        if (user && isAuthenticated) {
            navigate("/dashboard")
        }
    },[user, isAuthenticated, navigate])
    
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

            <div className="reg-email-container">
                <label htmlFor="email">Username</label>
                <input type="email" 
                    className="reg-email" 
                    placeholder="Add email (optional)"
                    onChange = { (e) => setEmail(e.target.value)}
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
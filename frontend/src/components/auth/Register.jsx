import "../../styles/auth/Register.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { registerUser, fetchCSRFToken } from "../../actions/authActions";
import { useNavigate, NavLink } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import PasswordChecklist from 'react-password-checklist';
import validator from 'validator';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email,setEmail] = useState(null);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [openPasswordWarning, setOpenPasswordWarning] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.username);
    const isAuthenticated = useSelector((state) => state.authenticated.isAuthenticated);
    const theme = useSelector((state) => state.theme.theme);

    // password validation
    function validatePassword(password) {
        if (validator.isStrongPassword(password, {
            minLength:8,
            minSymbols:0,
            minUppercase:0,
            minNumbers:1,
        })) {
            return true;
        } else {
            return false;
    }}

    // create user account    
    async function handleRegister(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            if (validatePassword(password)=== true) {
                const csrfToken = await fetchCSRFToken(dispatch);
                const response = await registerUser(username, password, confirmPassword, email, csrfToken);
                if (response.status === 202) {
                    setOpenSuccess(true);
                    setTimeout(()=> {
                        navigate("/login")
                    }, 1500)
                } else {
                    setOpenFail(true);
                }
            } else {
                setOpenWarning(true);
            }
        } else {
            setOpenWarning(true);
        }
    }

    // if user is logged in already, redirect to dashboard
    useEffect(()=>{
        if (user && isAuthenticated) {
            navigate("/dashboard")
        }
    },[user, isAuthenticated, navigate])
    
    return (
        <div className = "register-form-container">
            <div className = {`register-main ${theme==='dark' ? 'register-main-dark' : ''}`}>
            <h1 className = {`register-form-title ${theme==='dark' ? 'register-form-title-dark' : ''}`}>Create account</h1>
            <form className = "register-container"
                onSubmit = {handleRegister}
                >
                <div className="reg-username-container">
                    <label htmlFor="username">Username</label>
                    <input type="username" 
                        className={`reg-username-input ${theme==='dark' ? 'reg-username-input-dark' : ''}`} 
                        placeholder="Create username"
                        autoComplete="username"
                        onChange = { (e) => setUsername(e.target.value)}
                        />
                </div>

                <div className="reg-email-container">
                    <label htmlFor="email">Email (optional)</label>
                    <input type="email" 
                        className={`reg-email-input ${theme==='dark' ? 'reg-email-input-dark' : ''}`} 
                        placeholder="Add email (optional)"
                        autoComplete="email"
                        onChange = { (e) => setEmail(e.target.value)}
                        />
                </div>

                <div className="reg-password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        className={`reg-password-input ${theme==='dark' ? 'reg-password-input-dark' : ''}`}
                        placeholder="Create password"
                        autoComplete="new-password"
                        onChange = { (e) => setPassword(e.target.value)}
                        />
                </div>

                <div className="reg-new-password-container">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" 
                        className={`reg-password-input ${theme==='dark' ? 'reg-password-input-dark' : ''}`} 
                        placeholder="Confirm password"
                        autoComplete="new-password"
                        onChange = { (e) => setConfirmPassword(e.target.value)}
                        />
                </div>

                <PasswordChecklist
                        className= "password-checklist"
                        rules={["minLength","lowercase", "specialChar", "number", "match"]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        validTextColor= {theme === "dark" ? 'rgba(5,815,313,0.8)' : '#017371'}
                        invalidTextColor= {theme === "dark" ? 'rgba(5,815,313,0.8)' : '#017371'}
                        messages = {{
                            minLength: "Password must be at least 8 characters long",
                            lowercase: "Password must contain at least one lowercase letter",
                            specialChar: "Password must contain at least one special character",
                            number: "Password must contain at least one number",
                            match: "Passwords must match",
                        }}
                        onChange={(isValid) => console.log("Is valid?", isValid)}
                    />
                    <Button 
                    sx={{ marginTop: "4%", }}
                        type="submit" 
                        color="primary"
                        variant={theme === "dark" ? "outlined" : "contained"}
                        >Register
                    </Button>
            </form>

            <Snackbar open={openSuccess} autoHideDuration={1500} onClose={() => setOpenSuccess(false)}>
                    <MuiAlert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Account created successfully!
                    </MuiAlert>
                </Snackbar>

                <Snackbar open={openFail} autoHideDuration={2000} onClose={() => setOpenFail(false)}>
                    <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                        Failed to create account. Please try again.
                    </MuiAlert>
                </Snackbar>

                <Snackbar open={openPasswordWarning} autoHideDuration={1500} onClose={() => setOpenPasswordWarning(false)}>
                    <MuiAlert onClose={() => setOpenPasswordWarning(false)} severity="warning" sx={{ width: '100%' }}>
                        Password does not meet minimum requirements. Please try again.
                    </MuiAlert>
                </Snackbar>

                <Snackbar open={openWarning} autoHideDuration={1500} onClose={() => setOpenWarning(false)}>
                    <MuiAlert onClose={() => setOpenWarning(false)} severity="warning" sx={{ width: '100%' }}>
                        Passwords do not match. Please try again.
                    </MuiAlert>
                </Snackbar>

            </div>
            <p className="login-redirect-message">Already have an account?</p>
            <NavLink 
                to="/login"
                className={`login-redirect-link ${theme==='dark' ? 'login-redirect-link-dark' : ''}`}>Login here
            </NavLink>
        </div>
    )
}

export default Register;
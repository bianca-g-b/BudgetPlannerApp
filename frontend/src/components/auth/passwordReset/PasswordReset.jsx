import "../../../styles/auth/resetPassword/PasswordReset.css";
import { passwordReset, fetchCSRFToken } from '../../../actions/authActions';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function PasswordReset() {   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openFail, setOpenFail] = useState(false);

    async function handlePasswordReset(e) {
        e.preventDefault();
        const email = e.target[0].value;
        console.log(email);
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await passwordReset(email, csrfToken);
        if (response.ok) {
            console.log("Password reset email sent");
            navigate("/reset/sent");
        } else {
            setOpenFail(true);
        }
    }

    return (
        <div className="password-reset-request-div">
            <div className="password-reset-page-info">
                <p className="password-reset-page-title">Password Reset</p>
                <p className="password-reset-page-message">Please enter the email address associated with your account. 
                    We will send you an email with a link to reset your password.
                </p>
            </div>
            <form 
                className="password-reset-request-form"
                onSubmit={handlePasswordReset} >

                <div className="password-reset-email-container">
                    <label htmlFor="email">Email</label>
                    <input
                        className="password-reset-email-input"
                        type="email" 
                        placeholder="Your email address" />
                </div>

                <Button 
                    type="submit"
                    variant="contained" 
                    color="primary">
                    Reset Password
                </Button>
            </form>
            <Snackbar open={openFail} autoHideDuration={2000} onClose={() => setOpenFail(false)}>
                <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                        Login failed! Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default PasswordReset;
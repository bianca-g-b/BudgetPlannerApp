import "../../../styles/auth/resetPassword/PasswordReset.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { passwordReset, fetchCSRFToken } from '../../../actions/authActions';
import { handlePasswordReset } from "../../../helpers/authHelpers";
import { errorAlertStyle } from "../../../styles/budget/alertsStyles";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function PasswordReset() {   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openFail, setOpenFail] = useState(false);
    const theme = useSelector((state) => state.theme.theme);


    return (
        <div className={`password-reset-request-div ${theme==='dark' ? 'password-reset-request-div-dark' : ''}`}>
            <div className="password-reset-page-info">
                <p className={`password-reset-page-title ${theme==='dark' ? 'password-reset-page-title-dark' : ''}`}>Password Reset</p>
                <p className="password-reset-page-message">Please enter the email address associated with your account. <br className="new-line"/>
                    We will send you an email with a link to reset your password.</p>
            </div>
            <form 
                className="password-reset-request-form"
                onSubmit={(e) => handlePasswordReset(e, {fetchCSRFToken, dispatch, navigate,
                    passwordReset, setOpenFail})} >

                <div className="password-reset-email-container">
                    <label htmlFor="email">Email</label>
                    <input
                        className={`password-reset-email-input ${theme==='dark' ? 'password-reset-email-input-dark' : ''}`}
                        type="email"
                        autoComplete="email"
                        placeholder="Your email address" />
                </div>

                <Button 
                    type="submit"
                    variant={theme === "dark" ? "outlined" : "contained"} 
                    color="primary">
                    Reset Password
                </Button>
            </form>
            <Snackbar open={openFail} autoHideDuration={2500} onClose={() => setOpenFail(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenFail(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Password reset request failed! Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default PasswordReset;
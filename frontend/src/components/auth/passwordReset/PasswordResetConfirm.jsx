import '../../../styles/auth/resetPassword/PasswordResetConfirm.css';
import { passwordResetConfirm, fetchCSRFToken } from '../../../actions/authActions';
import { warningAlertStyle, errorAlertStyle } from '../../../styles/budget/alertsStyles';
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import PasswordChecklist from 'react-password-checklist';
import validator from 'validator';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function PasswordResetConfirm() {
    const theme = useSelector((state) => state.theme.theme);
    const { uidb64, token } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [openFail, setOpenFail] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [openPasswordWarning, setOpenPasswordWarning] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
    },[uidb64, token])

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

    async function handlePasswordReset(event) {
        event.preventDefault();
        if (password === confirmPassword) {
            if (validatePassword(password)=== true) {
                const csrfToken = await fetchCSRFToken(dispatch);
                const response = await passwordResetConfirm(uidb64, token, password, confirmPassword, csrfToken);
                if (response.ok) {
                    console.log(response);
                    navigate('/reset/success')
                } else {
                    console.log("Password reset failed. Please try again.");
                    setOpenFail(true);
                } 
            } else {
                console.log("Password is not strong enough");
                setOpenPasswordWarning(true);
            }
        } else {
            console.log("Passwords do not match");
            setOpenWarning(true);
        }
    }

    return (
        <div className="reset-password-main-div" >
            <div className={`reset-password-container ${theme==='dark' ? 'reset-password-container-dark' : '' }`}>
                <p className={`reset-password-title ${theme==='dark' ? 'reset-password-title-dark' : '' }`}>Reset your password</p>
                <form className="reset-password-form"
                    onSubmit={handlePasswordReset}
                >
                    <div className="reset-password-input-container">
                        <label htmlFor="password">New Password</label>
                        <input type="password" 
                            className={`reset-password-input ${theme==='dark' ? 'reset-password-input-dark' : ''}`}
                            placeholder="Create new password"
                            onChange = { (e) => setPassword(e.target.value)}
                            />
                    </div>

                    <div className="reset-password-input-container">
                        <label htmlFor="password">Confirm New Password</label>
                        <input type="password" 
                            className={`reset-psw-confirm reset-password-input ${theme==='dark' ? 'reset-password-input-dark' : ''}`} 
                            placeholder="Confirm new password"
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
                        sx={{ marginTop: "5%"}}
                        type="submit" 
                        color="primary"
                        variant={theme==='dark' ? "outlined" : "contained"}
                        >Reset Password
                    </Button>
                </form>
            </div>
            <Snackbar open={openFail} autoHideDuration={2500} onClose={() => setOpenFail(false)}>
                <MuiAlert variant='outlined' onClose={() => setOpenFail(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Failed to reset password. Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openPasswordWarning} autoHideDuration={2500} onClose={() => setOpenPasswordWarning(false)}>
                <MuiAlert variant='outlined' onClose={() => setOpenPasswordWarning(false)} severity="warning" sx={warningAlertStyle(theme)}>
                    Password does not meet minimum requirements. Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openWarning} autoHideDuration={2500} onClose={() => setOpenWarning(false)}>
                <MuiAlert variant='outlined' onClose={() => setOpenWarning(false)} severity="warning" sx={warningAlertStyle(theme)}>
                    Passwords do not match. Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default PasswordResetConfirm;
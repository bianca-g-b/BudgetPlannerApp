import "../../../styles/auth/ChangePassword.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changePassword, fetchCSRFToken, logoutUser } from "../../../actions/authActions";
import { handleValidatePassword, handleUpdatePassword } from "../../../helpers/authHelpers";
import { successAlertStyle, warningAlertStyle, errorAlertStyle } from "../../../styles/budget/alertsStyles";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PasswordChecklist from "react-password-checklist";
import validator from 'validator';


function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);
    const [openPasswordWarning, setOpenPasswordWarning] = useState(false);
    const theme = useSelector((state) => state.theme.theme);

    const dispatch = useDispatch();

    // Password validation helper function
    const validatePassword =(password) => handleValidatePassword(password, {validator});


    return (
        <div className="change-psw-main-container">
            <NavLink to="/account" className={`back-to-account ${theme==="dark" ? "back-to-account-dark" : ""}`}>&#11164; &nbsp;back to &nbsp; <span>MY ACCOUNT</span></NavLink>
            <div className="change-psw-container">
                <div className="change-psw-info-container">
                    <p className={`psw-form-information ${theme==='dark' ? 'psw-form-information-dark' : '' }`}>Change password</p>
                </div>
                
                <form className="change-psw-form"
                    onSubmit={(e) => handleUpdatePassword(e, {password, confirmPassword, oldPassword,
                        validatePassword, fetchCSRFToken, dispatch, changePassword, logoutUser,
                        setOpenSuccess, setOpenFail, setOpenWarning, setOpenPasswordWarning})}>

                    <div className="new-password-container">
                        <label htmlFor="password">Current password</label>
                        <input type="password"
                            autoComplete="off"
                            className={`change-psw-input ${theme==='dark' ? 'change-psw-input-dark' : '' }`}
                            placeholder="Enter current password"
                            onChange = {(e)=> setOldPassword(e.target.value)}
                        />
                    </div>   

                    <div className="new-password-container">
                        <label htmlFor="password">New password</label>
                        <input type="password"
                            autoComplete="off" 
                            className={`change-psw-input ${theme==='dark' ? 'change-psw-input-dark' : '' }`}
                            placeholder="Enter new password"
                            onChange = {(e)=> setPassword(e.target.value)}
                        />
                    </div>

                    <div className="new-password-container">
                        <label htmlFor="password">Confirm password</label>
                        <input type="password"
                            autoComplete="off" 
                            className={`change-psw-input ${theme==='dark' ? 'change-psw-input-dark' : '' }`} 
                            placeholder="Confirm new password"
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <PasswordChecklist
                        className="password-checklist"
                        rules={["minLength", "lowercase", "specialChar", "number", "match", ]}
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
                        onChange={(isValid) => {return isValid}}
                    />

                    <div className="submit-container new-psw-button-div">
                        <Button type="submit" 
                                className="submit-button"
                                variant={theme === "dark" ? "outlined" : "contained"}
                                >Submit
                        </Button>
                    </div>

                </form>

            </div>

            <Snackbar open={openSuccess} autoHideDuration={2500} onClose={() => setOpenSuccess(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenSuccess(false)} severity="success" sx={successAlertStyle(theme)}>
                    Password changed successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={2500} onClose={() => setOpenFail(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenFail(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Failed to change password. Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openPasswordWarning} autoHideDuration={2500} onClose={() => setOpenPasswordWarning(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenPasswordWarning(false)} severity="warning" sx={warningAlertStyle(theme)}>
                    Password does not meet minimum requirements. Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openWarning} autoHideDuration={2500} onClose={() => setOpenWarning(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenWarning(false)} severity="warning" sx={warningAlertStyle(theme)}>
                    Passwords do not match. Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default ChangePassword;
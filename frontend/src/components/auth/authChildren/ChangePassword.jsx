import "../../../styles/auth/ChangePassword.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword, fetchCSRFToken, logoutUser } from "../../../actions/authActions";
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

    const dispatch = useDispatch();

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
    
    async function updatePassword(e) {
        e.preventDefault();
        if (password === confirmPassword) {
            if (validatePassword(password)=== true) {
                const csrfToken = await fetchCSRFToken(dispatch);
                const response = await changePassword(oldPassword, password, confirmPassword, csrfToken);
                if (response.status === 202) {
                    setOpenSuccess(true);
                    console.log("Password changed successfully");
                    setTimeout(() => {
                        logoutUser(dispatch, csrfToken);
                    }, 1000);                  
                } else {
                    console.log("Failed to change password");
                    setOpenFail(true);
                }
            } else {
                console.log("Password does not meet requirements");
                setOpenPasswordWarning(true);
            }
        } else {
            console.log("Passwords do not match");
            setOpenWarning(true);
        }
    }

    return (
        <div className="change-psw-main-container">
            <div className="change-psw-container">
                <div className="change-psw-info-container">
                    <p className="psw-form-information">Change password</p>
                </div>
                
                <form className="change-psw-form"
                    onSubmit={updatePassword}>

                    <div className="new-password-container">
                        <label htmlFor="password">Current password</label>
                        <input type="password" 
                            className="change-psw-input" 
                            placeholder="Enter current password"
                            onChange = {(e)=> setOldPassword(e.target.value)}
                        />
                    </div>   

                    <div className="new-password-container">
                        <label htmlFor="password">New password</label>
                        <input type="password" 
                            className="change-psw-input" 
                            placeholder="Enter new password"
                            onChange = {(e)=> setPassword(e.target.value)}
                        />
                    </div>

                    <div className="new-password-container">
                        <label htmlFor="password">Confirm password</label>
                        <input type="password" 
                            className="change-psw-input" 
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
                        validTextColor= '#017371'
                        invalidTextColor= '#017371'
                        messages = {{
                            minLength: "Password must be at least 8 characters long",
                            lowercase: "Password must contain at least one lowercase letter",
                            specialChar: "Password must contain at least one special character",
                            number: "Password must contain at least one number",
                            match: "Passwords must match",
                        }}
                        onChange={(isValid) => console.log("Is valid?", isValid)}
                    />

                    <div className="submit-container new-psw-button-div">
                        <Button type="submit" className="submit-button"
                                variant="contained">Submit
                        </Button>
                    </div>

                </form>

            </div>

            <Snackbar open={openSuccess} autoHideDuration={1000} onClose={() => setOpenSuccess(false)}>
                <MuiAlert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Password changed successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={1500} onClose={() => setOpenFail(false)}>
                <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to change password. Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openPasswordWarning} autoHideDuration={2000} onClose={() => setOpenPasswordWarning(false)}>
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
    )
}

export default ChangePassword;
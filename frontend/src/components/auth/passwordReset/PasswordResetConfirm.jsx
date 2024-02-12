import '../../../styles/auth/resetPassword/PasswordResetConfirm.css';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import  { useState,useEffect} from "react";
import Button from '@mui/material/Button';
import PasswordChecklist from 'react-password-checklist';
// import validator from 'validator';

function PasswordResetConfirm() {
    const theme = useSelector((state) => state.theme.theme);
    const { uid, token } = useParams();
    const [resetPassword, setResetPassword] = useState("");
    const [resetConfirmPassword, setResetConfirmPassword] = useState("");

    useEffect(() => {
        console.log('useEffect');
    },[uid, token])

    // password validation
    // function validatePassword(password) {
    //     if (validator.isStrongPassword(password, {
    //         minLength:8,
    //         minSymbols:0,
    //         minUppercase:0,
    //         minNumbers:1,
    //     })) {
    //         return true;
    //     } else {
    //         return false;
    // }}

    return (
        <div className="reset-password-main-div" >
            <div className={`reset-password-container ${theme==='dark' ? 'reset-password-container-dark' : '' }`}>
                <p className={`reset-password-title ${theme==='dark' ? 'reset-password-title-dark' : '' }`}>Reset your password</p>
                <form className="reset-password-form">

                    <div className="reset-password-input-container">
                        <label htmlFor="password">New Password</label>
                        <input type="password" 
                            className={`reset-password-input ${theme==='dark' ? 'reset-password-input-dark' : ''}`}
                            placeholder="Create new password"
                            onChange = { (e) => setResetPassword(e.target.value)}
                            />
                    </div>

                    <div className="reset-password-input-container">
                        <label htmlFor="password">Confirm New Password</label>
                        <input type="password" 
                            className={`reset-psw-confirm reset-password-input ${theme==='dark' ? 'reset-password-input-dark' : ''}`} 
                            placeholder="Confirm new password"
                            onChange = { (e) => setResetConfirmPassword(e.target.value)}
                            />
                    </div>

                    <PasswordChecklist
                        className= "password-checklist"
                        rules={["minLength","lowercase", "specialChar", "number", "match"]}
                        minLength={8}
                        value={resetPassword}
                        valueAgain={resetConfirmPassword}
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
            
        </div>
    )
}

export default PasswordResetConfirm;
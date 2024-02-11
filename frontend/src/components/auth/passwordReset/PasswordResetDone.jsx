import "../../../styles/auth/resetPassword/PasswordResetDone.css";
import { useSelector } from "react-redux";

function PasswordResetDone() {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div className={`reset-sent-div ${theme==='dark' ? 'reset-sent-div-dark' : ''}`}>
            <p className={`password-reset-send-title ${theme==='dark' ? 'password-reset-send-title-dark' : ''}`}>Password Reset Email Sent</p>
            <p className="password-reset-sent-message">We have sent you an email with a link to reset your password. 
            Please check your email and follow the instructions.
            </p>
        </div>
    )
}

export default PasswordResetDone;
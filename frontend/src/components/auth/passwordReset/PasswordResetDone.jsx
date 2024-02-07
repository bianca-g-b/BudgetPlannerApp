import "../../../styles/auth/resetPassword/PasswordResetDone.css";
function PasswordResetDone() {
    return (
        <div className="reset-sent-div">
            <p className="password-reset-send-title">Password Reset Email Sent</p>
            <p className="password-reset-sent-message">We have sent you an email with a link to reset your password. 
            Please check your email and follow the instructions.
            </p>
        </div>
    )
}

export default PasswordResetDone;
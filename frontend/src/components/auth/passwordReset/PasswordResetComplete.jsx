import "../../../styles/auth/resetPassword/PasswordResetComplete.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function PasswordResetComplete() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`password-reset-complete-div ${theme==='dark' ? 'password-reset-complete-div-dark' : ''}`}>
      <div className="password-reset-messages-div">
        <p className={`password-reset-complete-title ${theme==='dark' ? 'password-reset-complete-title-dark' : ''}`}>Password Reset Complete</p>
        <p className="password-reset-complete-message">Your password has been successfully reset.</p>
      </div>
      <NavLink to="/login" className={`password-reset-complete-link ${theme==='dark' ? 'password-reset-complete-link-dark' : ''}`}>Login here</NavLink>

    </div>
  );
}

export default PasswordResetComplete;
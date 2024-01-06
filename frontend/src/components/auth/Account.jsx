import "../../styles/Account.css";
import { NavLink } from "react-router-dom";

function Account() {
    return (
        <div className="main-account-container">
            
            <div className="account-options-container">
                <div className="account-title">MY ACCOUNT</div>
                <NavLink className="account-link">Change email</NavLink>
                <NavLink className="account-link">Change password</NavLink>
                <NavLink className="account-link">Delete account</NavLink>
            </div>

        </div>
    )
}

export default Account;
import "../../styles/Account.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Account() {
    const user = useSelector((state) => state.user.username);
    const email = useSelector((state) => state.user.email);

    return (
        <div className = "main-account-container">
            <div className="account-container">    
                <div className= "intro-container">
                    <div className="intro-title">Welcome, </div>
                    <div className="intro-user">{user}</div>
                    {email && <div className="intro-email">{email}</div>}
                    <div className="intro-message">Here you can manage your account details.</div>
                </div>
                
                <div className="account-options-container">
                    <div className="account-title">MY ACCOUNT</div>
                    {!email && <NavLink 
                        className="account-link"
                        to="/account/email"
                        >Add email</NavLink>}
                    {email && <NavLink 
                        className="account-link"
                        to="/account/email"
                        >Change email</NavLink>}
                    <NavLink 
                        className="account-link"
                        to="/account/password"
                        >Change password</NavLink>
                    <NavLink 
                        className="account-link"
                        to="/account/delete"
                        >Delete account</NavLink>
                </div>
               
            </div>

            <Outlet /> 
        </div>


    )
}

export default Account;
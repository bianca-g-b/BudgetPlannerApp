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
                    <NavLink 
                        className="account-link"
                        to="/account/email"
                        >Email</NavLink>
                    <NavLink 
                        className="account-link"
                        to="/account/password"
                        >Password</NavLink>
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
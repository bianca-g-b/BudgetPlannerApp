import "../../styles/Account.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import DeleteAccountModal from "./authChildren/DeleteAccountModal";

function Account() {
    const user = useSelector((state) => state.user.username);
    const email = useSelector((state) => state.user.email);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // open modal
    function openModal() {
        setIsModalOpen(true);
    }
    
    // close modal
    function closeModal() {
        setIsModalOpen(false);
    }

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
                    <button 
                        className="delete-account-button account-link"
                        onClick={openModal}
                        >Delete account</button>
                </div>
                <DeleteAccountModal 
                    isModalOpen = {isModalOpen}
                    // handleDelete={handleDeleteAccount}
                    closeModal={closeModal}
                />
               
            </div>

            <Outlet /> 
        </div>


    )
}

export default Account;
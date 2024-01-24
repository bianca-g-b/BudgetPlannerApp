import "../../styles/Account.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DeleteAccountModal from "./authChildren/DeleteAccountModal";
import { deleteAccount, fetchCSRFToken } from "../../actions/authActions";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Account() {
    const user = useSelector((state) => state.user.username);
    const email = useSelector((state) => state.user.email);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFail, setOpenFail] = useState(false);

    const dispatch = useDispatch();

    // open modal
    function openModal() {
        setIsModalOpen(true);
    }
    
    // close modal
    function closeModal() {
        setIsModalOpen(false);
    }

    // handle delete account
    async function handleDeleteAccount(e) {
        e.preventDefault();
        const csrfToken = fetchCSRFToken(dispatch);
        const response = await deleteAccount(dispatch, csrfToken);
        if (response.status === 202) {
            console.log("Account deleted successfully")
        } else {
            setOpenFail(true);
        }
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
                    handleDelete={handleDeleteAccount}
                    closeModal={closeModal}
                />

                <Snackbar open={openFail} autoHideDuration={1500} onClose={() => setOpenFail(false)}>
                    <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                        Failed to delete account! Please try again.
                    </MuiAlert>
                </Snackbar>
               
            </div>

            <Outlet /> 
        </div>


    )
}

export default Account;
import "../../../styles/auth/EmailForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateEmail, deleteEmail,fetchCSRFToken } from "../../../actions/authActions";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { successAlertStyle, errorAlertStyle } from "../../../styles/budget/alertsStyles";

function EmailForm() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);
    const [newEmail, setNewEmail] = useState("");
    const [openSuccessUpdate, setOpenSuccessUpdate] = useState(false);
    const [openFailUpdate, setOpenFailUpdate] = useState(false);
    const [openSuccessDelete, setOpenSuccessDelete] = useState(false);
    const [openFailDelete, setOpenFailDelete] = useState(false);
    const theme = useSelector((state) => state.theme.theme);


    async function handleUpdateEmail(e) {
        e.preventDefault();
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await updateEmail(dispatch, newEmail, csrfToken);
        if (response.status === 202) {
            setOpenSuccessUpdate(true);
        } else {
            setOpenFailUpdate(true);
        }
    }

    async function handleDeleteEmail(e) {
        e.preventDefault();
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await deleteEmail(dispatch, csrfToken);
        if (response.status === 202) {
            setOpenSuccessDelete(true);
        } else {
            setOpenFailDelete(true);
        }
    }

    return (
        <div className="all-email-container">
            <NavLink to="/account" className={`back-to-account ${theme==="dark" ? "back-to-account-dark" : ""}`}>&#11164; &nbsp;back to  &nbsp; <span> MY ACCOUNT</span></NavLink>
            <div className={`update-email-container ${ email ? "" : "add-email-container"}`}>
                <div className="form-information">
                    {email && <p className={`update-title ${theme==="dark" ? "update-title-dark" : "" }`}>Update email address</p>}
                    {!email && <p className={`update-title ${theme==="dark" ? "update-title-dark" : "" }`}>Add email address</p>}
                </div>

                <form className="email-form"
                    onSubmit = {handleUpdateEmail}
                >
                    <div className="email-container">
                        <label htmlFor="email">Email (must be unique)</label>
                        <input type="email" 
                            className={`email-input ${theme==="dark" ? "email-input-dark" : "" }`}
                            placeholder="Enter email address"
                            autoComplete="email"
                            onChange = { (e) => setNewEmail(e.target.value)}
                            />
                    </div>
                   {email && <div className="submit-container">
                        <Button type="submit" className="submit-button"
                            variant={theme === "dark" ? "outlined" : "contained"}
                        >Update</Button>
                    </div>}
                    {!email && <div className="submit-container">
                        <Button type="submit" className="submit-button"
                        variant={theme === "dark" ? "outlined" : "contained"}
                        >Add</Button>
                    </div>}

                </form>
            </div>

            {email && <div className="delete-email-container">
                <div className="delete-information">    
                    <p className={`delete-title ${theme==="dark" ? "delete-title-dark" : "" }`}>Delete email address</p>
                </div>
                <div className="delete-message-container">
                    <p className="delete-message">Please note that deleting your email address will prevent you from recovering your account if you forget your password.</p>
                </div>
                <div className="submit-delete-container">
                     <Button className="delete-email-button"
                        color="error"
                        variant={theme === "dark" ? "outlined" : "contained"}
                        onClick = {handleDeleteEmail}
                    >Delete</Button>
                </div>
            </div>}          

            <Snackbar open={openSuccessUpdate} autoHideDuration={2500} onClose={() => setOpenSuccessUpdate(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenSuccessUpdate(false)} severity="success" sx={successAlertStyle(theme)}>
                    Email updated successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFailUpdate} autoHideDuration={2500} onClose={() => setOpenFailUpdate(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenFailUpdate(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Failed to update email! Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openSuccessDelete} autoHideDuration={2500} onClose={() => setOpenSuccessDelete(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenSuccessDelete(false)} severity="success" sx={successAlertStyle(theme)}>
                    Email deleted successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFailDelete} autoHideDuration={2500} onClose={() => setOpenFailDelete(false)}>
                <MuiAlert variant="outlined" onClose={() => setOpenFailDelete(false)} severity="error" sx={errorAlertStyle(theme)}>
                    Failed to delete email! Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default EmailForm;
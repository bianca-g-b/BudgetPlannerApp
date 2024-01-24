import "../../../styles/EmailForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail, deleteEmail,fetchCSRFToken } from "../../../actions/authActions";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function EmailForm() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);
    const [newEmail, setNewEmail] = useState("");
    const [openSuccessUpdate, setOpenSuccessUpdate] = useState(false);
    const [openFailUpdate, setOpenFailUpdate] = useState(false);
    const [openSuccessDelete, setOpenSuccessDelete] = useState(false);
    const [openFailDelete, setOpenFailDelete] = useState(false);


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

            <div className={`update-email-container ${ email ? "" : "add-email-container"}`}>
                <div className="form-information">
                    {email && <p className="update-title">Update email address</p>}
                    {!email && <p className="update-title">Add email address</p>}
                </div>

                <form className="email-form"
                    onSubmit = {handleUpdateEmail}
                >
                    <div className="email-container">
                        <label htmlFor="email">Email (must be unique)</label>
                        <input type="email" 
                            className="email-input" 
                            placeholder="Enter email address"
                            onChange = { (e) => setNewEmail(e.target.value)}
                            />
                    </div>
                   {email && <div className="submit-container">
                        <Button type="submit" className="submit-button"
                        variant="contained"
                        >Update</Button>
                    </div>}
                    {!email && <div className="submit-container">
                        <Button type="submit" className="submit-button"
                        variant="contained"
                        >Add</Button>
                    </div>}

                </form>
            </div>

            {email && <div className="delete-email-container">
                <div className="delete-information">    
                    <p className="delete-title">Delete email address</p>
                </div>
                <div className="delete-message-container">
                    <p className="delete-message">Please note that deleting your email address will prevent you from recovering your account if you forget your password.</p>
                </div>
                <div className="submit-container">
                     <Button className="delete-email-button"
                        variant="contained"
                        onClick = {handleDeleteEmail}
                    >Delete</Button>
                </div>
            </div>}          

            <Snackbar open={openSuccessUpdate} autoHideDuration={1500} onClose={() => setOpenSuccessUpdate(false)}>
                <MuiAlert onClose={() => setOpenSuccessUpdate(false)} severity="success" sx={{ width: '100%' }}>
                    Email updated successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFailUpdate} autoHideDuration={1500} onClose={() => setOpenFailUpdate(false)}>
                <MuiAlert onClose={() => setOpenFailUpdate(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to update email! Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openSuccessDelete} autoHideDuration={1500} onClose={() => setOpenSuccessDelete(false)}>
                <MuiAlert onClose={() => setOpenSuccessDelete(false)} severity="success" sx={{ width: '100%' }}>
                    Email deleted successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFailDelete} autoHideDuration={1500} onClose={() => setOpenFailDelete(false)}>
                <MuiAlert onClose={() => setOpenFailDelete(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to delete email! Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default EmailForm;
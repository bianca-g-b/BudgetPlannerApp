import "../../../styles/EmailForm.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updateEmail, deleteEmail } from "../../../actions/authActions";
import { fetchCSRFToken } from "../../../actions/authActions";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

function EmailForm() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);
    const [newEmail, setNewEmail] = useState("");

    async function handleUpdateEmail(e) {
        e.preventDefault();
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await updateEmail(dispatch, newEmail, csrfToken);
        if (response.status === 202) {
            alert("You have successfully updated your email address!")
        } else {
            alert("Update failed. Please try again.")
        }
    }

    async function handleDeleteEmail(e) {
        e.preventDefault();
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await deleteEmail(dispatch, csrfToken);
        if (response.status === 202) {
            alert("You have successfully deleted your email address!")
        } else {
            alert("Delete failed. Please try again.")
        }
    }

    return (
        <div className="all-email-container">

            <div className="update-email-container">
                <div className="form-information">
                    <p className="update-title">Update email address</p>
                </div>

                <form className="email-form"
                    onSubmit = {handleUpdateEmail}
                >
                    <div className="email-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                            className="email-input" 
                            placeholder="Enter email address"
                            onChange = { (e) => setNewEmail(e.target.value)}
                            />
                    </div>
                    <div className="submit-container">
                        <Button type="submit" className="submit-button"
                        variant="contained"
                        >Update</Button>
                    </div>

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
                </div>
}
        </div>
    )
}

export default EmailForm;
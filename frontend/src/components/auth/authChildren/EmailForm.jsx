import "../../../styles/EmailForm.css";
import { useState } from "react";
import { updateEmail } from "../../../actions/authActions";
import { fetchCSRFToken } from "../../../actions/authActions";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

function EmailForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(null);

    async function handleUpdateEmail(e) {
        e.preventDefault();
        const csrfToken = await fetchCSRFToken(dispatch);
        const response = await updateEmail(dispatch, email, csrfToken);
        if (response.status === 202) {
            alert("You have successfully updated your email address!")
        } else {
            alert("Update failed. Please try again.")
        }
    }
    return (
        <div className="update-email-container">
            <div className="form-information">
                <p className="info-message">Please update your email address</p>
            </div>

            <form className="email-form"
                onSubmit = {handleUpdateEmail}
            >
                <div className="email-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                        className="email-input" 
                        placeholder="Enter email address"
                        onChange = { (e) => setEmail(e.target.value)}
                        />
                </div>
                <div className="submit-container">
                    <Button type="submit" className="submit-button"
                    variant="contained"
                    >Update</Button>
                </div>

            </form>
        </div>
    )
}

export default EmailForm;
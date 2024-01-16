import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../actions/authActions";
import { fetchCSRFToken } from "../../../actions/authActions";
import { Button } from "@mui/material";

function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    
        async function updatePassword(e) {
            e.preventDefault();
            if (password === confirmPassword) {
                const csrfToken = await fetchCSRFToken(dispatch);
                const response = await changePassword(password, confirmPassword, csrfToken);
                if (response.status === 202) {
                    console.log("Password changed successfully")
                } else {
                    console.log("Failed to change password")
                }
            } else {
                console.log("Passwords do not match")
            }
        }

        return (

        <div>
            <form onSubmit={updatePassword}>
                <div className="password-container">
                    <label htmlFor="password">New password</label>
                    <input type="password" 
                        className="password-input" 
                        placeholder="Enter new password"
                        onChange = {(e)=> setPassword(e.target.value)}
                    />
                </div>

                <div className="password-container">
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" 
                        className="password-input" 
                        placeholder="Confirm new password"
                        onChange = {(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <Button type="submit" className="submit-button"
                        variant="contained">Submit</Button>

            </form>
        </div>
    )
}

export default ChangePassword;
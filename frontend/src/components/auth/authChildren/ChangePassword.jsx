import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword, fetchCSRFToken, logoutUser } from "../../../actions/authActions";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFail, setOpenFail] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);

    const dispatch = useDispatch();
    
        async function updatePassword(e) {
            e.preventDefault();
            if (password === confirmPassword) {
                const csrfToken = await fetchCSRFToken(dispatch);
                const response = await changePassword(password, confirmPassword, csrfToken);
                if (response.status === 202) {
                    setOpenSuccess(true);
                    console.log("Password changed successfully")
                    setTimeout(() => {
                        logoutUser(dispatch, csrfToken);
                    }, 1000);
                    
                } else {
                    console.log("Failed to change password")
                    setOpenFail(true);
                }
            } else {
                console.log("Passwords do not match")
                setOpenWarning(true);
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

            <Snackbar open={openSuccess} autoHideDuration={1000} onClose={() => setOpenSuccess(false)}>
                <MuiAlert onClose={() => setOpenSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Password changed successfully!
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openFail} autoHideDuration={1500} onClose={() => setOpenFail(false)}>
                <MuiAlert onClose={() => setOpenFail(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to change password. Please try again.
                </MuiAlert>
            </Snackbar>

            <Snackbar open={openWarning} autoHideDuration={1500} onClose={() => setOpenWarning(false)}>
                <MuiAlert onClose={() => setOpenWarning(false)} severity="warning" sx={{ width: '100%' }}>
                    Passwords do not match. Please try again.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default ChangePassword;
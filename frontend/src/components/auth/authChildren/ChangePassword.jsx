import { useState } from "react";

function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <form>
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

            </form>
        </div>
    )
}

export default ChangePassword;
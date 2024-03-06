/*AUTH HELPER FUNCTION*/

// Password validator
export function handleValidatePassword(password, {validator}) {
    if (validator.isStrongPassword(password, {
        minLength:8,
        minSymbols:1,
        minUppercase:0,
        minNumbers:1,
    })) {
        return true;
    } else {
        return false;
    }
}

// Username validator
export function handleValidateUsername(username) {
    if (username.length>=6) {
        // check if username contains at least one lowercase letter
        if (username.match(/[a-z]/)) {
            return true;
        } else {
            return false;
        } 
    } else {
        return false;
    }
}

// Registration handler function
export async function handleRegister(e, {password, confirmPassword, username, email,
    validatePassword, validateUsername, fetchCSRFToken, 
    dispatch, registerUser, setOpenSuccess, setOpenFail, 
    setOpenWarning, navigate}) {
    e.preventDefault();
    if (password === confirmPassword) {
        if (validatePassword(password)=== true && validateUsername(username)=== true) {
            const csrfToken = await fetchCSRFToken(dispatch);
            const response = await registerUser(username, password, confirmPassword, email, csrfToken);
            if (response.status === 202) {
                setOpenSuccess(true);
                setTimeout(()=> {
                    navigate("/login")
                }, 2500)
            } else {
                setOpenFail(true);
            }
        } else {
            setOpenWarning(true);
        }
    } else {
        setOpenWarning(true);
    }
}

// Login handler function
export async function handleLogin(e, {username, password, fetchCSRFToken, loginUser, dispatch, 
    fetchUser, setUser, setIsAuthenticated, navigate, setOpenFail}) {
    e.preventDefault();
    const csrfToken = await fetchCSRFToken(dispatch);
    const response = await loginUser(username, password, csrfToken);
    if (response.status === 202)  {
        console.log("Login successful.");
        const user = await fetchUser(dispatch, csrfToken);
        dispatch(setUser(user));
        if (user) {
            dispatch(setIsAuthenticated(true));
        } else {
            dispatch(setIsAuthenticated(false));
        }
        navigate("/dashboard");   
    } else {
        setOpenFail(true);
    }
}

// Logout handler function
export async function handleLogout({logoutUser, dispatch, csrfToken, navigate, handleCloseUserMenu}) {
    const response  = await logoutUser(dispatch, csrfToken);
    if (response.status === 202) {
        handleCloseUserMenu();
        navigate("/login"); 
    } else {
        alert("Logout failed. Please try again.");
        throw new Error("Logout failed");
    }
}

// Update password in the Account section
export async function handleUpdatePassword(e, {password, confirmPassword, oldPassword,
    validatePassword, fetchCSRFToken, dispatch, changePassword, logoutUser,
    setOpenSuccess, setOpenFail, setOpenWarning, setOpenPasswordWarning}) {
    e.preventDefault();
    if (password === confirmPassword) {
        if (validatePassword(password)=== true) {
            const csrfToken = await fetchCSRFToken(dispatch);
            const response = await changePassword(oldPassword, password, confirmPassword, csrfToken);
            if (response.status === 202) {
                setOpenSuccess(true);
                setTimeout(() => {
                    logoutUser(dispatch, csrfToken);
                }, 2500);                  
            } else {
                setOpenFail(true);
            }
        } else {
            setOpenPasswordWarning(true);
        }
    } else {
        setOpenWarning(true);
    }
}

// Update email in the Account section
export async function handleUpdateEmail(e, {email, newEmail, fetchCSRFToken,
    dispatch, updateEmail, setOpenSuccessUpdate, setOpenFailUpdate}) {
    e.preventDefault();
    const csrfToken = await fetchCSRFToken(dispatch);
    if (newEmail !== "" && newEmail !== email) {
        const response = await updateEmail(dispatch, newEmail, csrfToken);
        if (response.status === 202) {
            setOpenSuccessUpdate(true);
        } else {
            setOpenFailUpdate(true);
        }
    } else {
        setOpenFailUpdate(true);
    }
}

// Delete email in the Account section
export async function handledeleteEmail(e, {fetchCSRFToken, dispatch, deleteEmail,
    setOpenSuccessDelete, setOpenFailDelete}) {
    e.preventDefault();
    const csrfToken = await fetchCSRFToken(dispatch);
    const response = await deleteEmail(dispatch, csrfToken);
    if (response.status === 202) {
        setOpenSuccessDelete(true);
    } else {
        setOpenFailDelete(true);
    }
}

// Password reset handler function
export async function handlePasswordReset(e, {fetchCSRFToken, dispatch, navigate,
    passwordReset, setOpenFail}) {
    e.preventDefault();
    const email = e.target[0].value;
    const csrfToken = await fetchCSRFToken(dispatch);
    const response = await passwordReset(email, csrfToken);
    if (response.ok) {
        navigate("/reset/sent");
    } else {
        setOpenFail(true);
    }    
}

// Password reset confirm handler function
export async function handlePasswordResetConfirm(e, {password, confirmPassword, dispatch,
    uidb64, token, validatePassword, fetchCSRFToken, passwordResetConfirm,
    setOpenFail, setOpenPasswordWarning, setOpenWarning, navigate}) {
    e.preventDefault();
    if (password === confirmPassword) {
        if (validatePassword(password)=== true) {
            const csrfToken = await fetchCSRFToken(dispatch);
            const response = await passwordResetConfirm(uidb64, token, password, confirmPassword, csrfToken);
            if (response.ok) {
                navigate('/reset/success')
            } else {
                setOpenFail(true);
            } 
        } else {
            setOpenPasswordWarning(true);
        }
    } else {
        setOpenWarning(true);
    }
}
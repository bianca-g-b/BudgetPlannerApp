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
    fetchUser, setUser, setIsAuthenticated, navigate, isAuthenticated, setOpenFail}) {
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
        console.log("user in login:", user);
        console.log("is authenticated in login:",isAuthenticated);
        navigate("/dashboard");   
    } else {
        setOpenFail(true);
    }
}
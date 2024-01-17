import { setCSRFToken} from "../redux/csrfSlice";
import {setUser, setUserId, setEmail } from "../redux/userSlice";
import { setLogout } from "../redux/logoutSlice";
import { setIsAuthenticated } from "../redux/authenticatedSlice.js";


const baseUrl = "http://127.0.0.1:8000";

// get CSRF token
export const fetchCSRFToken = async (dispatch ) => {
        const response  = await fetch(`${baseUrl}/auth/csrf`);
        if (response.ok) {
            const data = await response.json();
            dispatch(setCSRFToken(data.csrfToken));
            return data.csrfToken;
        } else {
            throw new Error("Failed to fetch CSRF token");
        }
}

// get user details
export const fetchUser = async(dispatch, csrfToken) => {
    try {
        const response = await fetch(`${baseUrl}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "CSRF-Token" : csrfToken,
            },
            credentials: "include"
        })
        if (response.ok) {
            const data = await response.json();
            dispatch(setUser(data.username));
            dispatch(setUserId(data.user_id));
            dispatch(setEmail(data.email));
            return data.username;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};

// register user
export const registerUser = async (username, password, confirmPassword, email, csrfToken) => {
    const response = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            confirmPassword: confirmPassword,
        }),
        credentials: "include",
    });
    console.log(response.message);
    if (response.ok) {
        return response;
    } else {
        alert("Registration failed. Please try again.");
        throw new Error("Registration failed");
    }
};

// login user
export const loginUser = async (username, password, csrfToken) => {
    const response = await fetch(`${baseUrl}/auth/signin` , {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        credentials: "include",
    });
    if (response.ok) {
        return response;
    } else {
        alert("Login failed. Please try again.")
        throw new Error("Login failed.")
    }
}

// logout user
export const logoutUser = async (dispatch, csrfToken) => {
    const response = await fetch(`${baseUrl}/auth/signout`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "CSRF-Token": csrfToken,
        },
        credentials: "include",
    });
    if (response.ok) {
        dispatch(setUser(null));
        dispatch(setIsAuthenticated(false));
        dispatch(setLogout(true));
        return response;
    } else {
        alert("Logout failed. Please try again.");
        throw new Error("Logout failed.");
    }
};

// add or update email
export const updateEmail = async (dispatch, email) => {
    const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
    const response = await fetch(`${baseUrl}/auth/email`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({
            email: email,
        }),
        credentials: "include",
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setEmail(data.email));
        return response;
    } else {
        alert("Update email failed. Please try again.");
        throw new Error("Update email failed.");
    }
};

// dlete email address
export const deleteEmail = async (dispatch) => {
    const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
    const response = await fetch(`${baseUrl}/auth/emaildelete`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
        },
        credentials: "include",
    });
    if (response.ok) {
        dispatch(setEmail(null));
        return response;
    } else {
        console.log(response);
        alert("Delete email failed. Please try again.");
        throw new Error("Delete email failed");
    }
}

// change password
export const changePassword = async (password, confirmPassword) => {
    const csrfToken = document.cookie.split("csrftoken=")[1].split(";")[0];
    const response = await fetch(`${baseUrl}/auth/changepassword`,{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,  
        },
        body: JSON.stringify({
            password: password,
            confirmPassword: confirmPassword,
        }),
        credentials: "include",
    });
    if (response.ok) {
        console.log(response.status)
        return response
    } else {
        console.log(response);
        console.log("Password change failed")
        return response
    }
}
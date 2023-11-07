import { setCSRFToken} from "../../redux/csrfSlice";


const baseUrl = "http://127.0.0.1:8000";

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

export const registerUser = async (username, password, confirmPassword, csrfToken) => {
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
        console.log(response.payload);
        return response;
    } else {
        alert("Login failed. Please try again.")
        throw new Error("Login failed.")
    }
}

export const logoutUser = async (csrfToken) => {
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
        return response;
    } else {
        alert("Logout failed. Please try again.");
        throw new Error("Logout failed.");
    }
}
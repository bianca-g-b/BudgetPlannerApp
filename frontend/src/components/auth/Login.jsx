function Login() {
    return(
        <div className = "login-main">
            <h1 className = "login-form-title">Login here</h1>
            <form className = "login-form">
                <div className="login-username-container">
                    <label htmlFor="username">Username</label>
                    <input type="username" className="login-username" placeholder="Enter username" />
                </div>

                <div className="login-password-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="login-password" placeholder="Enter password" />
                </div>

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}

export default Login;
function Register() {
    return (
        <div className = "register-main">
        <h1 className = "register-form-title">Create an account</h1>
        <form className = "register-container">
            <div className="reg-username-container">
                <label htmlFor="username">Username</label>
                <input type="username" className="reg-username" placeholder="Create username" />
            </div>

            <div className="reg-password-container">
                <label htmlFor="password">Password</label>
                <input type="password" className="reg-password" placeholder="Create password" />
            </div>

            <div className="reg-password-container">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" className="reg-password" placeholder="Confirm password" />
            </div>

            <button type="submit" className="register-button">Register</button>
        </form>

        </div>
    )
}

export default Register;
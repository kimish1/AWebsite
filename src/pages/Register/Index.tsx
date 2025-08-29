import { useState } from "react";
import Page from "../../layout/page";
import { saveToLocalStorage } from "../../localstorage/localStorageHelper.ts";
import "../../App.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Invalid email");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        saveToLocalStorage("token", "fake-jwt-token");
        setError("");
        setSuccess(`User ${name} successfully registered! You are now logged in.`);
        setTimeout(() => {
            window.location.href = "/page-log-in";
        }, 2000);
    };

    return (
        <Page>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label className="label">Confirm Password</label>
                    <input
                        type="password"
                        className="input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <div className="center">
                    <button type="submit">
                        Register
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>

                        </div>
                    </button>
                </div>
            </form>
        </Page>
    );
}

export default Register;

import { useState, useEffect } from "react";
import Page from "../../layout/page";
import "../../App.css";
import "./style.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const currentUser = localStorage.getItem("currentUser");

        if (token && currentUser) {
            setLoggedIn(true);
            setUserName(currentUser);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("token", "fake-jwt-token");
            localStorage.setItem("currentUser", user.name);
            setUserName(user.name);
            setError("");
            setLoggedIn(true);
        } else {
            setError("Invalid email or password");
        }
    };

    if (loggedIn) {
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
        return (
            <Page>
                <div className="complete-register">
                    <h1>{userName}, ти зарегався 🎉</h1>
                </div>
            </Page>
        );
    }

    return (
        <Page>
            <form className="form-container" onSubmit={handleSubmit}>
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

                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="center">
                    <button type="submit">
                        Log in
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                </div>
            </form>
        </Page>
    );
}

export default Login;

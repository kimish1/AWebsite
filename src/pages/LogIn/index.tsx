import { useState, useEffect } from "react";
import Page from "../../layout/page";
import { saveToLocalStorage } from "../../localstorage/localStorageHelper.ts";
import "../../App.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // проста перевірка
        if (email === "test@test.com" && password === "123456") {
            saveToLocalStorage("token", "fake-jwt-token");
            setError("");
            setLoggedIn(true);
        } else {
            setError("Invalid email or password");
        }
    };

    if (loggedIn) {
        return (
            <Page>
                <h1>You arleady loged in!</h1>
                <h1>Ти зареганий кароч.
                    <h2>велком бєк ту йор акоунт.</h2></h1>
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

                <button type="submit" className="contactButton">
                    Log In
                </button>
            </form>
        </Page>
    );
}

export default Login;

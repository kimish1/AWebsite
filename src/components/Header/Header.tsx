import { useEffect, useState } from "react";
import Cart from "../Cart/Cart.tsx";
import "./style.css";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const currentUser = localStorage.getItem("currentUser");
        if (token && currentUser) {
            setLoggedIn(true);
            setUserName(currentUser);
        } else {
            setLoggedIn(false);
            setUserName("");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        setLoggedIn(false);
        setUserName("");
    };

    return (
        <div className="header-wrapper">
            <div className="header-left">
                <a href="/">
                    <div className="CatAndBanana-onlogo">
                        <video className="CatAndBananaVideo-onlogo" src="../../../public/CatAndBanana.mp4" autoPlay loop muted></video>
                    </div>
                </a>
                <ul>
                    <li>
                        <a href="/">Home🏠</a>
                    </li>
                    <li>
                        <a href="/page-books">Books📚</a>
                    </li>
                </ul>
            </div>

            <div className="header-right">
                <ul>
                    {loggedIn ? (
                        <>
                            <li>
                                <span>Welcome, {userName} 🎉</span>
                            </li>
                            <li>
                                <button className="button1" onClick={handleLogout}>
                                    Log out
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <a href="/page-log-in">Log in</a>
                            </li>
                            <li>
                                <a href="/page-register">Register</a>
                            </li>
                        </>
                    )}

                    <li
                        className="cart-emoji"
                        onClick={() => setIsCartOpen(true)}
                        style={{ cursor: "pointer" }}
                    >
                        🧺
                    </li>
                </ul>
            </div>

            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}></Cart>
        </div>
    );
};

export default Header;

import { useEffect, useState } from "react";
import "./style.css";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

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
            <div>
                <ul>
                    <a href="/">
                        <img className="first-img" src="https://placehold.co/100x100" alt="Logo"/>
                    </a>
                    <li><a href="/">Home page🏠</a></li>
                    <li><a href="/page-books">Books page📚</a></li>
                    <li className="cart-img">
                        <a href="/page-cart">
                            Cart🧺
                        </a>

                    </li>
                        {loggedIn ? (
                            <>
                                <li><span>Welcome, {userName} 🎉</span></li>
                                <li><a href="#" onClick={handleLogout}>
                                    <button className="button1">
                                        Log out<div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                    </button>
                                </a></li>
                                {/*<li>*/}
                                {/*    <div className="logout_button">*/}
                                {/*        <button onClick={handleLogout} className="logout-btn">*/}
                                {/*            Log out<div className="arrow-wrapper">*/}
                                {/*            <div className="arrow"></div>*/}
                                {/*        </div>*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </>
                        ) : (
                            <>
                                <li><a href="/page-log-in">Log in</a></li>
                                <li><a href="/page-register">Register</a></li>
                            </>
                        )}
                </ul>
            </div>
        </div>
    );
};

export default Header;

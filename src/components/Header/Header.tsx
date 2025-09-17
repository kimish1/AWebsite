import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
                    <img
                        className="first-img"
                        src="https://placehold.co/100x100"
                        alt="Logo"
                    />
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
                            {/* Корзина-эмодзи */}
                            <li
                                className="cart-emoji"
                                onClick={() => setIsCartOpen(true)}
                                style={{ cursor: "pointer" }}
                            >
                                🧺
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
                </ul>
            </div>

            <AnimatePresence>
                {isCartOpen && (
                    <motion.div
                        className="modal-overlay"
                        onClick={() => setIsCartOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: "-100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100vh", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setIsCartOpen(false)}
                            >
                                ✖
                            </button>
                            <h2>Кошик</h2>
                            <h3>🧺</h3>
                            <p>Ваш кошик порожній :(</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Header;

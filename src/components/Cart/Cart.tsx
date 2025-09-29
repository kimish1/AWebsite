import {AnimatePresence, motion} from "framer-motion";
import {useState, useEffect, useMemo} from "react";
import './style.css';
import type {Book} from "../../types/types.tsx";
import { clearCart, getBooksWithCart, removeBook, increaseQuantity, decreaseQuantity } from "../../localstorage/localStorageHelper.ts";


const Cart = ({isCartOpen, setIsCartOpen}:any) => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const data = getBooksWithCart();
        if(data)
            setBooks(data);

        window.addEventListener('cartChange', handler);
    }, []);

    const handler = () => {
        const data = getBooksWithCart() as Book[];
        setBooks(data);
    };

    const total = useMemo(() => {
        const sum = books.reduce((acc, book) => acc + book.price * (book.quantity ?? 0), 0);
        return sum.toFixed(2);
    }, [books]);


    return (
        <AnimatePresence>
            {isCartOpen && (
                <motion.div
                    className="modal-overlay"
                    onClick={() => setIsCartOpen(false)}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{y: "-100vh", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: "-100vh", opacity: 0}}
                        transition={{type: "spring", stiffness: 80, damping: 15}}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setIsCartOpen(false)}
                        >
                            ✖
                        </button>
                        <h2>Кошик</h2>

                        {!books.length ? (
                            <>
                                <h3>🧺</h3>
                                <p>Ваш кошик порожній :(</p>
                            </>
                            ) : (
                            <>
                                <a href="#" className="clearCart" onClick={() => clearCart()}>Очистить кошик</a>
                                <div className="cart-books">
                                    {books.map(book => (
                                        <div className="header-cart__item" key={book.id}>
                                            <div className="header-cart__image">
                                                <a href={"/page-book/" + book.id}>
                                                    <img src={book.image} alt={book.title} title={book.title}/>
                                                </a>
                                            </div>
                                            <div className="header-cart__item-wrapper">

                                                <a className="header-cart__name" href={"/page-book/" + book.id}>{book.title}</a>
                                                <div className="header-cart__quantity">
                                                    <button
                                                        className="quantity-btn"
                                                        onClick={() => decreaseQuantity(book.id)}
                                                    >-</button>

                                                    <span>{book.quantity}</span>

                                                    <button
                                                        className="quantity-btn"
                                                        onClick={() => increaseQuantity(book.id)}
                                                    >+</button>
                                                </div>

                                                <div className="header-cart__price hidden-xs">
                                                    <div className="header-cart__price-text">Ціна за шт</div>
                                                    {book.price}$
                                                </div>
                                                <div className="header-cart__total">
                                                    <div className="header-cart__total-text hidden-xs">Всього</div>
                                                    {(book.price * book.quantity).toFixed(2)}$
                                                </div>
                                            </div>
                                            <div className="header-cart__remove">
                                                <button type="button" title="Видалити" className="header-cart__remove-btn" onClick={() => removeBook(book.id)}>
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="cart-bottom">
                                    <button className="button" onClick={() => clearCart()}>Купити</button>
                                    <div className="cart-total">Сума: {total}$</div>
                                </div>
                            </>
                        )
                        }
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Cart;

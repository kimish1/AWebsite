/*import { useState } from "react";*/
import Page from "../../layout/page";
import "../../App.css";
import "./style.css"

function Cart() {
    return (
        <Page>
            <div>
                <h1 className="h1-cart">Кошик</h1>
                <h2 className="h2-cart">🧺</h2>
                <p className="p-cart">Ваш кошик порожній :(</p>
            </div>

        </Page>
    );
}

export default Cart;

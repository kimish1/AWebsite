import type {Book} from "../../types/types.tsx";
import {addBookToCart} from "../../localstorage/localStorageHelper.ts";

interface CardBookProps extends Book {
    author: string;
    img: string;
    showButton?: boolean,
}

const CardBook = (props: CardBookProps) => {
    return (
        <div className="card">

                <div className="image">
                    <a href={"/page-book/" + props.id}>
                        <img src={props.img} alt={props.title}/>
                    </a>
                </div>
                <div className="content">
                    <a href={"/page-book/" + props.id} className="title">{props.title}</a>
                    <div className="author">{props.author}</div>
                    <div className="price">${props.price}</div>
                </div>
                {props.showButton !== false && (
                    <div className="center">
                        <button type="submit" onClick={() => addBookToCart(props.id)}>
                            Add to cart
                        </button>
                    </div>
                )}
        </div>
    );
};

export default CardBook;

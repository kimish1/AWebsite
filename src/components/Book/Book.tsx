// @ts-ignore
import type {Book} from "../../types/types.tsx";

interface CardBookProps extends Book {
    author: string;
    img: string;
    showButton?: boolean,
}

const CardBook = (props: CardBookProps) => {
    return (
        <div className="card">
            <a href={"/page-book/" + props.id}>
                <div className="image">
                    <img src={props.img} alt={props.title}/>
                </div>
                <div className="content">
                    <div className="title">{props.title}</div>
                    <div className="author">{props.author}</div>
                    <div className="price">${props.price}</div>
                </div>
                {props.showButton !== false && ( 
                    <div className="center">
                        <button type="submit">
                            Add to cart
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </div>
                )}
            </a>
        </div>
    );
};

export default CardBook;

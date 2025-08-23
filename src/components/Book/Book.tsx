// @ts-ignore
import type {Book} from "../../types/"

const CardBook = (props: Book) => {
    return (
        <div className="card">
            <div className="image">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="content">
                <div className="title">{props.title}</div>
                <div className="author">{props.author}</div>
                <div className="price">${props.price}</div>
            </div>
        </div>
    )
}


export default CardBook
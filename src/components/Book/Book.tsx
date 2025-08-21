// @ts-ignore
import type {Book} from "../../types/"

const CardBook = (props:Book) =>{
    return (
        <div className="card">
            <div className="content">
                <div className="image">
                    <img src={props.img} />
                </div>
                <div className="title">{props.title}</div>
                <div className="author">{props.author}</div>
                <div className="price">${props.price}</div>
            </div>
        </div>
    )
}

export default CardBook
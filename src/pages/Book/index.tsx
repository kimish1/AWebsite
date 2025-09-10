import Page from '../../layout/page'
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import Book from "../../components/Book/Book.tsx";
import "./style.css"
// @ts-ignore
import Category from "../../components/Categories/Category.tsx";
import "../../App.css"
import {useParams} from "react-router";


function OneBook() {
    const { id } = useParams();
    const bookId = parseInt(id, 10);

    const book = books.find((b) => b.id === bookId);
    const author = authors.find((a) => a.id === book?.authorId);

    if (!book) {
        return <div>Книга не знайдена</div>;
    }

    const otherBooks = books.filter((b) => b.id !== bookId);
    const shuffled = [...otherBooks].sort(() => Math.random() - 0.5);
    const randomBooks = shuffled.slice(0, 4);

    return (
        <div>
            <Page>
                {book && (
                    <div className="book-item">
                        <div className="book__left">
                            <img src="https://placehold.co/430x640" alt={ book.title } />
                        </div>
                        <div className="book__right">
                            <h1 className="book__title">{ book.title }</h1>
                            <p className="book__author">{ author?.name }</p>
                            <p className="book__description">{ book.shortDescription }</p>
                            <p className="book__price">Price: { book.price }$</p>

                            <a className='book_add_to_cart' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                <button>
                                    Add to cart
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div className="book__bottom1">
                            <h2>Book Desciption</h2>
                            <div className="book__bottom">
                                { book.description }
                            </div>
                        </div>
                    </div>
                )}
           

                <div className="popular-books">
                    {randomBooks.map((book) => {
                        const author = authors.find((author) => author.id === book.authorId);
                        return (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                price={book.price}
                                img={book.image}
                                // @ts-ignore
                                author={author?.name}
                                showButton={book.image !== "https://placehold.co/430x640"}
                            />
                        )
                    })}
                </div>
            </Page>
        </div>
    )
}
export default OneBook;

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
                    <div className="popular-book">
                        <Book
                            id={book.id}
                            title={book.title}
                            price={book.price}
                            img={"https://placehold.co/430x640"}
                            // @ts-ignore
                            author={author?.name}
                            showButton={false}
                        />
                    </div>
                )}
                <div className="one-book-button">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <button>
                            Add to cart
                            <div className="arrow-wrapper">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </a>
                </div>

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

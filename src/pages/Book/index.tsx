import Page from '../../layout/page'
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import Book from "../../components/Book/Book.tsx";
import "./style.css"
import "../../App.css"
import {useParams} from "react-router";
import {addBookToCart} from "../../localstorage/localStorageHelper.ts";

function OneBook() {
    const { id } = useParams();
    const bookId = parseInt(id as string, 10);

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
                            <h1 className="book__title">📚{ book.title }</h1>
                            <p className="book__author">{ author?.name }</p>
                            <p className="book__description">{ book.shortDescription }</p>
                            <p className="book__created">{ book.createdAt }</p>
                            <p className="book__price">Price: { book.price }$</p>
                            <p className="book__status">Status - { book.status }</p>

                                <button className='book_add_to_cart' onClick={() => addBookToCart(book.id)}>
                                    Add to cart
                                    <div className="arrow-wrapper">
                                        <div className="arrow"></div>
                                    </div>
                                </button>
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
                        const author = authors.find(a => a.id === book.authorId);

                        return (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                price={book.price}
                                img={book.image}
                                author={author?.name ?? "Невідомий автор"}
                                showButton={book.image !== "https://placehold.co/430x640"}
                                quantity={0}
                                categoryId={0}
                                authorId={book.authorId} image={''} shortDescription={''} description={''}
                                discountPrice={0} pageCount={0}createdAt={''} updatedAt={''}
                            />

                        );
                    })}
                </div>
            </Page>
        </div>
    )
}
export default OneBook;

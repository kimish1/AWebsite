import Page from '../../layout/page'
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import categori from "../../Fixtures/Categories.json";
import Book from "../../components/Book/Book.tsx";
import "./style.css"
// @ts-ignore
import Category from "../../components/Categories/Category.tsx";
import "../../App.css"



function OneBook() {
    return (
        <div>
            <Page>
                <div className="checkbox-wrapper-4">
                    {categori.map((category) => {
                        return (
                            <Category
                                key={category.id}
                                id={category.id}
                                name={category.name}
                                createdAt={category.createdAt}
                                updatedAt={category.updatedAt}
                            />
                        )
                    })}
                </div>
                <div className="popular-book">
                    {books.slice(0,1).map((book) => {
                        const author = authors.find((author) => author.id === book.authorId);
                        return (
                            <Book
                                key={book.id}
                                title={book.title}
                                price={book.price}
                                img="https://placehold.co/430x640"
                                author={author?.name}
                            />
                        )
                    })}
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                        <button>
                            Add to cart
                        </button>
                    </a>
                </div>
                <div className="popular-books">
                    {books.slice(0,4).map((book) => {
                        const author = authors.find((author) => author.id === book.authorId);
                        return (
                            <Book
                                key={book.id}
                                title={book.title}
                                price={book.price}
                                img={book.image}
                                author={author?.name}
                            />
                        )
                    })}
                </div>
            </Page>
        </div>
    )
}
export default OneBook;
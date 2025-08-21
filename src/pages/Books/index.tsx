import Page from '../../layout/page'
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import categori from "../../Fixtures/Categories.json";
import Book from "../../components/Book/Book.tsx";
import "./style.css"
// @ts-ignore
import Category from "../../components/Categories/Category.tsx";

function Books() {
    return (
        <div>
            <Page>
                <div>
                {categori.map((category) => {

                    return (
                        <Category
                            id={category.id}
                            name={category.name}
                            createdAt={category.createdAt}
                            updatedAt={category.updatedAt}
                        />
                    )})}
                </div>
                <div className='popular-books'>
                    {books.map((book) => {
                        const author = authors.find((author) => author.id === book.authorId);

                        return (
                            <Book
                                key={book.id}
                                title={book.title}
                                price={book.price}
                                img={book.image}
                                author={author?.name}
                            />)})}
                </div>
            </Page>
        </div>
    )
}
export default Books
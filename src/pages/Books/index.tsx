import Page from '../../layout/page'
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import categori from "../../Fixtures/Categories.json";
import Book from "../../components/Book/Book.tsx";
import "./style.css"
// @ts-ignore
import Category from "../../components/Categories/Category.tsx";
import {useState} from "react";

function Books() {
    const [filterCategories, setFilterCategories] = useState<number[]>([]);

    let data = [];
    const handleChange = (checked:boolean, category_id:number) => {
        setFilterCategories((prev) => {
            if (checked) {
                return [...prev, category_id];
            } else {
                return prev.filter((id) => id !== category_id);
            }
        });

        getBooks()
    };


    function getBooks() {
        data = books.filter(book =>
            filterCategories.length === 0 || filterCategories.includes(book.categoryId)
        );
    }

    getBooks()

    return (
        <div>
            <Page>
                <div className="checkbox-wrapper-4">
                    {categori
                        .map((category) => {
                        return (
                            <Category
                                key={category.id}
                                id={category.id}
                                name={category.name}
                                createdAt={category.createdAt}
                                updatedAt={category.updatedAt}
                                onChange={(e) => handleChange(e.target.checked, category.id)}
                            />
                        )
                    })}

                </div>
                <div className="popular-books1">
                    {data.map((book) => {
                        const author = authors.find((author) => author.id === book.authorId);
                        return (
                            <Book
                                key={book.id}
                                id={book.id}
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

export default Books;

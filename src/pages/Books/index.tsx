import { useState } from "react";
import Page from '../../layout/page'
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import categori from "../../Fixtures/Categories.json";
import Book from "../../components/Book/Book.tsx";
import "./style.css"
// @ts-ignore
import Category from "../../components/Categories/Category.tsx";

function Books() {
    const [sortType, setSortType] = useState<"asc" | "desc">("asc");
    const [priceSort, setPriceSort] = useState<"asc" | "desc" | null>(null);

    const sortedBooks = [...books].sort((a, b) => {
        let result = 0;

        if (priceSort) {
            result = priceSort === "asc" ? a.price - b.price : b.price - a.price;
        }
        if (result === 0) {
            result = sortType === "asc"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
        }

        return result;
    });

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
                <div className="magic-checkbox-group">
                    <label className="magic-check">
                        <input
                            type="radio"
                            name="alphabetSort"
                            checked={sortType === "asc"}
                            onChange={() => setSortType("asc")}
                        />
                        <span className="liquid-box">
                            <span className="liquid-fill"></span>
                            <span className="sparkle"></span>
                        </span>
                        <span className="magic-label">А-Я</span>
                    </label>

                    <label className="magic-check">
                        <input
                            type="radio"
                            name="alphabetSort"
                            checked={sortType === "desc"}
                            onChange={() => setSortType("desc")}
                        />
                        <span className="liquid-box">
                            <span className="liquid-fill"></span>
                            <span className="sparkle"></span>
                        </span>
                        <span className="magic-label">Я-А</span>
                    </label>
                </div>
                <div className="magic-checkbox-group">
                    <label className="magic-check">
                        <input
                            type="checkbox"
                            checked={priceSort === "asc"}
                            onChange={() => setPriceSort(priceSort === "asc" ? null : "asc")}
                        />
                        <span className="liquid-box">
                            <span className="liquid-fill"></span>
                            <span className="sparkle"></span>
                        </span>
                        <span className="magic-label">Дешеві → Дорогі</span>
                    </label>

                    <label className="magic-check">
                        <input
                            type="checkbox"
                            checked={priceSort === "desc"}
                            onChange={() => setPriceSort(priceSort === "desc" ? null : "desc")}
                        />
                        <span className="liquid-box">
                            <span className="liquid-fill"></span>
                            <span className="sparkle"></span>
                        </span>
                        <span className="magic-label">Дорогі → Дешеві</span>
                    </label>
                </div>
                <div className="popular-books">
                    {sortedBooks.map((book) => {
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

export default Books;

import Page from "../../layout/page";
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import "./style.css"
import Book from "../../components/Book/Book.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";


function Main() {
    return (
        <div>
            <Page>
                <div className="orange-square"/>
                <div className="main-title">
                    <h1>Find your next great</h1>
                    <h1>read at our online</h1>
                    <h1>book store</h1>
                </div>
                <img className="firstimg" src="https://placehold.co/450x600"/>

                <h2>Popular books</h2>
                <div className='popular-books'>
                    {books.slice(0,8).map((book) => {
                        const author = authors.find((author) => author.id === book.authorId);

                        return (
                            <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                price={book.price}
                                img={book.image}
                                author={author?.name}
                            />)})}
                </div>
                <div className="reviews">
                    <div className="w-[600px] mx-auto mt-10">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 50000, disableOnInteraction: false }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="slide-1">
                                    <div className="card-reviews">
                                        <h3 className="card__title-reviews">Андрій Якийсь
                                        </h3>
                                        <p className="card__content-reviews">Я люблю ці книжки, які без обложки. Покупаю</p>
                                        <div className="card__date-reviews">
                                            June 25, 1995
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-2">
                                    <div className="card-reviews">
                                        <h3 className="card__title-reviews">Вова Назар
                                        </h3>
                                        <p className="card__content-reviews">Советую куплять 1984, бо це моя молодость</p>
                                        <div className="card__date-reviews">
                                            August 21, 2025
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-3">
                                    <div className="card-reviews">
                                        <h3 className="card__title-reviews">Діана Булочка
                                        </h3>
                                        <p className="card__content-reviews">Я цінитель книжок, тому я не буду куплять у вас, бо у вас странний сайтік</p>
                                        <div className="card__date-reviews">
                                            December 31, 2001
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Page>
        </div>
    )
}

export default Main
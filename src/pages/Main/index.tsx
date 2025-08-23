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
                <div>
                    <img className="banner" src="https://placehold.co/1750x600"/>
                </div>
                <h2>Popular books</h2>
                <div className='popular-books'>
                    {books.slice(0,8).map((book) => {
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
                                        <h3 className="card__title-reviews">Андрій якийсь
                                        </h3>
                                        <p className="card__content-reviews">Я люблю ці книжки, які без обложки. Покупаю</p>
                                        <div className="card__date-reviews">
                                            June 25, 1995
                                        </div>
                                        <div className="card__arrow-reviews">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                                <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
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
                                        <div className="card__arrow-reviews">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 height="15" width="15">
                                                <path fill="#fff"
                                                      d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide-3">
                                    <div className="card-reviews">
                                        <h3 className="card__title-reviews">Діана булочка
                                        </h3>
                                        <p className="card__content-reviews">Я цінитель книжок, тому я не буду куплть у вас, бо у вас странний сайтік</p>
                                        <div className="card__date-reviews">
                                            December 31, 2001
                                        </div>
                                        <div className="card__arrow-reviews">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 height="15" width="15">
                                                <path fill="#fff"
                                                      d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                            </svg>
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
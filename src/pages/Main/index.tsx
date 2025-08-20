import Page from "../../layout/page";
import books from "../../Fixtures/Books.json";
import authors from "../../Fixtures/Authors.json";
import "./style.css"
import Book from "../../components/Book/Book.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Main() {
    return (
        <div>
            <Page>
                <h2>Popular books</h2>
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
                <div className="reviews">
                    <div className="w-[600px] mx-auto mt-10">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="bg-red-400 h-60 flex items-center justify-center text-white text-2xl rounded-xl shadow-lg">
                                    Слайд 1
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-green-400 h-60 flex items-center justify-center text-white text-2xl rounded-xl shadow-lg">
                                    Слайд 2
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-blue-400 h-60 flex items-center justify-center text-white text-2xl rounded-xl shadow-lg">
                                    Слайд 3
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
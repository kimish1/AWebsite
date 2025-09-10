import Page from '../../layout/page';
import books from '../../Fixtures/Books.json';
import authors from '../../Fixtures/Authors.json';
import './style.css';
import Book from '../../components/Book/Book.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

function Main() {
  // @ts-ignore
  const otherBooks = books.filter((b) => b.id !== Book);
  const shuffled = [...otherBooks].sort(() => Math.random() - 0.5);
  const randomBooks = shuffled.slice(0, 8);
  return (
    <div>
      <Page>
        <div className="orange-square">
          <div className="container">
            <div className="main-title">
              <h1>Find your next great</h1>
              <h1>read at our online</h1>
              <h1>book store</h1>

              <img className="firstimg" src="./orange.png" />
            </div>
          </div>
        </div>

        <h2>Popular books</h2>
        <div className="popular-books">
          {randomBooks.map((book) => {
            const author = authors.find(
              (author) => author.id === book.authorId
            );

            // @ts-ignore
            return (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                price={book.price}
                img={book.image}
                author={author?.name}
                showButton={false}
              />
            );
          })}
        </div>
        <div className="orange-rectangle">
          <div className="buyersfeedback">
            <p>Buyer's feedback</p>
          </div>
        </div>
        <div className="reviews">
          <div className="w-[600px] mx-auto mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 10000, disableOnInteraction: false }}
              loop={true}
            >
              <SwiperSlide>
                <div className="slide-1">
                  <div className="card-reviews">
                    <h3 className="card__title-reviews">Андрій Якийсь</h3>
                    <p className="card__content-reviews">
                      Я люблю ці книжки, які без обложки. Покупаю💵
                    </p>
                    <div className="card__date-reviews">June 25, 1995</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-2">
                  <div className="card-reviews">
                    <h3 className="card__title-reviews">Вова Назар</h3>
                    <p className="card__content-reviews">
                      Советую куплять 1984, бо це моя молодость🤩
                    </p>
                    <div className="card__date-reviews">August 21, 2025</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-3">
                  <div className="card-reviews">
                    <h3 className="card__title-reviews">Діана Булочка</h3>
                    <p className="card__content-reviews">
                      Я цінитель книжок, тому я не буду куплять у вас, бо у вас
                      странний сайтік😡
                    </p>
                    <div className="card__date-reviews">December 31, 1999</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-4">
                  <div className="card-reviews">
                    <h3 className="card__title-reviews">Вова циліндр</h3>
                    <p className="card__content-reviews">Книги...📖</p>
                    <div className="card__date-reviews">April 28, 2008</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-5">
                  <div className="card-reviews">
                    <h3 className="card__title-reviews">Бльоб</h3>
                    <p className="card__content-reviews">Бльоб💧</p>
                    <div className="card__date-reviews">May 10, 2000</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-6">
                  <div className="card-reviews">
                    <h3 className="card__title-reviews">Ігоrrr</h3>
                    <p className="card__content-reviews">
                      Я люблю читати книги, але у вас якийсь малий асортимент😏
                    </p>
                    <div className="card__date-reviews">May 04, 2011</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Page>
    </div>
  );
}

export default Main;

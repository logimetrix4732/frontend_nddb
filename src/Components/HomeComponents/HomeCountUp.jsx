import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css"; // Import custom CSS

const newsItems = [
  {
    img: "assets/img/news/layout/news-09.jpg",
    date: "Jan 20, 2022",
    author: "Executive Director Operations",
    name: "Shri S Regupathi",
    title:
      "Shri S Regupathi has over three decades of experience in finance and accounting and is cur",
  },
  {
    img: "assets/img/news/layout/news-09.jpg",
    date: "Jan 20, 2022",
    author: "Executive Director Operations",
    name: "Shri S Regupathi",
    title:
      "Shri S Regupathi has over three decades of experience in finance and accounting and is cur",
  },
  {
    img: "assets/img/news/layout/news-09.jpg",
    date: "Jan 20, 2022",
    author: "Executive Director Operations",
    name: "Shri S Regupathi",
    title:
      "Shri S Regupathi has over three decades of experience in finance and accounting and is cur",
  },
  {
    img: "assets/img/news/layout/news-09.jpg",
    date: "Jan 20, 2022",
    author: "Executive Director Operations",
    name: "Shri S Regupathi",
    title:
      "Shri S Regupathi has over three decades of experience in finance and accounting and is cur",
  },
  {
    img: "assets/img/news/layout/news-09.jpg",
    date: "Jan 20, 2022",
    author: "Executive Director Operations",
    name: "Shri S Regupathi",
    title:
      "Shri S Regupathi has over three decades of experience in finance and accounting and is cur",
  },
];

const HomeCountUp = () => {
  return (
    <section className="bd-news__area  pb-90">
      <div className="container position-relative">
        <div className="bd-news__header flex-between mb-25">
          <h2 className="bd-section__title">
            Meet Our Visionary Board <br />
            of Directors
          </h2>
          {/* Navigation arrows side by side */}
          <div className="bd-news__nav-arrows">
            <div className="custom-swiper-prev">
              <i className="ri-arrow-left-line"></i>
            </div>
            <div className="custom-swiper-next">
              <i className="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // ✅ loop on
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = ".custom-swiper-prev";
              swiper.params.navigation.nextEl = ".custom-swiper-next";
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {newsItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bd-news__item mb-30">
                <div className="bd-news__thumb-2 w-img">
                  <a href="news-details.html">
                    <img src={item.img} alt="news-thumb" />
                  </a>
                </div>
                <div className="bd-news__content-2">
                  <h3
                    className="bd-news__title-2"
                    dangerouslySetInnerHTML={{
                      __html: `<a href="news-details.html">${item.name}</a>`,
                    }}
                  />
                  <span className="bd-news__sub-title">{item.title}</span>

                  <div className="bd-news__border">
                    <div className="bd-news__meta">
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-solid fa-user" /> {item.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCountUp;

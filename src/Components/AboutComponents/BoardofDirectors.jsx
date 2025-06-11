import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChairmanSir from "../../Images/BoardofDirectorsImg/Chairman-Sir-01.png";
import AbhijitSir from "../../Images/BoardofDirectorsImg/Abhijit-sir-1.png";
import DevanandSir from "../../Images/BoardofDirectorsImg/Devanand-sir.png";
import AlkaMaam from "../../Images/BoardofDirectorsImg/Dr-Alka-Mahajan-003.png";
import TrivediSir from "../../Images/BoardofDirectorsImg/K.R.Trivedi.png";
import ManishSir from "../../Images/BoardofDirectorsImg/Manish-Bandlish-sir.png";
import RegupathiSir from "../../Images/BoardofDirectorsImg/Photo-S-Regupathi-scaled.png";
import RajeevSir from "../../Images/BoardofDirectorsImg/Rajeev-Krishnan-sir.png";
import VijaySir from "../../Images/BoardofDirectorsImg/Shri-T.M.-Vijay-Bhaskar.png";
import BDN2025 from "../../Images/BoardofDirectorsImg/BDN-2025-01-24-at-4.11.24-PM.png";
const BoardofDirectors = () => {
  const newsItems = [
    {
      img: ChairmanSir,
      date: "Jan 20, 2022",
      author: "Chairman, NDDB",
      name: "Shri Meenesh Shah",
      title:
        "A dynamic professional with over three decades of experience in the Dairy sector. He has m...",
    },
    {
      img: TrivediSir,
      date: "Jan 20, 2022",
      author: "",
      name: "Shri Kamlesh Trivedi",
      title:
        "Shri Kamlesh Trivedi He has received a bachelor’s degree in Veterinary Sciences from...",
    },
    {
      img: DevanandSir,
      date: "Jan 20, 2022",
      author: "Managing Director, NDDB Dairy Services",
      name: "Dr. C. P. Devanand",
      title:
        "Dr. C. P. Devanand an alumnus of College of Veterinary & Animal sciences, Kerala, is Mast...",
    },
    {
      img: RajeevSir,
      date: "Jan 20, 2022",
      author: "Executive Director",
      name: "Dr. Rajeev Krishnan",
      title:
        "Dr Rajeev Krishnan has done his Post Graduate Diploma in Agri-Business Management from...",
    },
    {
      img: VijaySir,
      date: "Jan 20, 2022",
      author: "Retired IAS",
      name: "Shri T.M. Vijay Bhaskar",
      title:
        "An Indian Administrative Service officer of the 1983 batch, in the last 39 years, he has w...",
    },
    {
      img: ManishSir,
      date: "Jan 20, 2022",
      author:
        "Managing Director, Mother Dairy Fruit & Vegetable Private Limited",
      name: "Shri Manish Bandlish",
      title:
        "Is an Engineering Graduate from Jamia Millia Islamia University and an alumnus of IIM Luck...",
    },
    {
      img: AbhijitSir,
      date: "Jan 20, 2022",
      author: "General Manager",
      name: "Shri Abhijeet Bhattacharjee",
      title:
        "Shri Abhijit Bhattacharjee is a Post Graduate in Rural Management and holds a degree in La...",
    },
    {
      img: AlkaMaam,
      date: "Jan 20, 2022",
      author: "",
      name: "Dr. Alka Mahajan",
      title:
        "Dr. Alka Mahajan is an experienced professional with over 35 years of contribution to the...",
    },
    {
      img: RegupathiSir,
      date: "Jan 20, 2022",
      author: "Executive Director Operations",
      name: "Shri S Regupathi",
      title:
        "Shri S Regupathi has over three decades of experience in finance and accounting and is cur...",
    },
    {
      img: BDN2025,
      date: "Jan 20, 2022",
      author: "",
      name: "Shri. Durga Shanker Mishra",
      title:
        "Shri. Durga Shanker Mishra, a 1984 batch IAS officer of the Uttar Pradesh cadre served as...",
    },
  ];
  return (
    <section className="bd-news__area  pb-70">
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
              <div className="bd-news__item mb-30 pb-20">
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

export default BoardofDirectors;

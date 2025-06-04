import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import dashboard from "../../Images/dashboard.jpg";
import dashboard1 from "../../Images/dashboard1.jpg";
import dashboard2 from "../../Images/dashboard2.jpg";
import dashboard3 from "../../Images/dashboard3.jpg";
import dashboard4 from "../../Images/dashboard4.jpg";

const slideData = [
  {
    img: dashboard,
    heading: "Empowering Dairy <br /> Farmers",
    subheading: "Building sustainable dairy communities accross india.",
  },
  {
    img: dashboard3,
    heading: "Innovative Dairy <br /> Solutions",
    subheading: "Delivering technology to every village doorstep",
  },
  {
    img: dashboard2,
    heading: "Stronger Rural <br /> Economies",
    subheading: "Empowering women and farmers together",
  },
  {
    img: dashboard4,
    heading: "Transforming Dairy <br /> Supply Chains",
    subheading: "Ensuring quality and efficiency from farm to table",
  },
  {
    img: dashboard1,
    heading: "Digital Solutions <br /> for Farmers",
    subheading: "Smart tools to boost productivity and growth",
  },
];

const Dashboard = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section className="bd-hero__area">
      <div className="hero__active swiper-container">
        <div className="swiper-wrapper">
          {slideData.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="bd-singel__hero">
                <div className="hero__height d-flex align-items-center p-relative">
                  <div
                    className="bd-hero__banner hero__overlay include__bg"
                    style={{
                      backgroundImage: `url(${slide.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        <div className="bd-hero__content z-index-11 p-relative">
                          <h2
                            className="animated fadeInUp"
                            dangerouslySetInnerHTML={{ __html: slide.heading }}
                          />
                          <p
                            className="animated fadeInUp"
                            dangerouslySetInnerHTML={{
                              __html: slide.subheading,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Navigation / Pagination */}
        <div className="bd-features__wrapper">
          <div className="bd-features__top">
            <span>since 2009</span>
            <img
              className="bd-features__top-icon"
              src="assets/img/features/features-cow.png"
              alt="features-cow-icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

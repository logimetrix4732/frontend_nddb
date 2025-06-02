import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import dashboard from "../../Images/dashboard.jpg";
import dashboard1 from "../../Images/dashboard1.jpg";
import dashboard2 from "../../Images/dashboard2.jpg";
import dashboard3 from "../../Images/dashboard3.jpg";
import dashboard4 from "../../Images/dashboard4.jpg";
import hero4 from "../../assets/img/hero/hero-4.jpg";
import hero5 from "../../assets/img/hero/hero-5.jpg";
import sectionBg from "../../assets/img/bg/section-bg.jpg";

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
    <>
      <section className="bd-hero__area">

        <div className="hero__active swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bd-singel__hero">
                <div className="hero__height d-flex align-items-center p-relative">
                  <div
                    className="bd-hero__banner hero__overlay include__bg"
                    style={{
                      backgroundImage: `url(${dashboard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        <div className="bd-hero__content z-index-11 p-relative ">
                          <h2 className="animated fadeInUp">Empowering Dairy <br /> Farmers</h2>
                          <p className="animated fadeInUp">
                            Building sustainable dairy communities accross india.
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="bd-singel__hero">
                <div className="hero__height d-flex align-items-center p-relative">
                  <div
                    className="bd-hero__banner hero__overlay include__bg"
                    style={{
                      backgroundImage: `url(${dashboard3})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        <div className="bd-hero__content z-index-11 p-relative">
                          <h2 data-animation="fadeInUp" data-delay=".5s">
                            Innovative Dairy <br /> Solutions
                          </h2>
                          <p data-animation="fadeInUp" data-delay=".7s">
                           Delivering technology to every village doorstep
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="bd-singel__hero">
                <div className="hero__height d-flex align-items-center p-relative">
                  <div
                    className="bd-hero__banner hero__overlay include__bg"
                    style={{
                      backgroundImage: `url(${dashboard2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        <div className="bd-hero__content z-index-11 p-relative">
                          <h2 data-animation="fadeInUp" data-delay=".5s">
                            Stronger Rural <br /> Economies
                          </h2>
                          <p data-animation="fadeInUp" data-delay=".7s">
                            Empowering women and farmers together
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="bd-singel__hero">
                <div className="hero__height d-flex align-items-center p-relative">
                  <div
                    className="bd-hero__banner hero__overlay include__bg"
                    style={{
                      backgroundImage: `url(${dashboard4})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        <div className="bd-hero__content z-index-11 p-relative">
                          <h2 data-animation="fadeInUp" data-delay=".5s">
                            Stronger Rural <br /> Economies
                          </h2>
                          <p data-animation="fadeInUp" data-delay=".7s">
                            Empowering women and farmers together
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="bd-singel__hero">
                <div className="hero__height d-flex align-items-center p-relative">
                  <div
                    className="bd-hero__banner hero__overlay include__bg"
                    style={{
                      backgroundImage: `url(${dashboard1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        <div className="bd-hero__content z-index-11 p-relative">
                          <h2 data-animation="fadeInUp" data-delay=".5s">
                            Stronger Rural <br /> Economies
                          </h2>
                          <p data-animation="fadeInUp" data-delay=".7s">
                            Empowering women and farmers together
                          </p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Optional Navigation / Pagination */}
          <div className="bd-features__wrapper">
            <div className="bd-features__top">
              <span>since 1903</span>
              {/* <span>farming since 1956</span> */}
              <img
                className="bd-features__top-icon"
                src="assets/img/features/features-cow.png"
                alt="features-cow-icon"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

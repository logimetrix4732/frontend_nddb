import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import successStory from "../../Images/successStories.jpg";
import bgCow from "../../Images/bg-cow.png";

const SuccessStories = () => {
  const [stories] = useState([
    {
      title: "Transforming Rural Livelihoods",
      description:
        "How a small village in Gujarat revolutionized its dairy farming practices and increased income by 300%.",
    },
    {
      title: "Empowering Women Farmers",
      description:
        "Women-led dairy initiatives brought remarkable financial and social empowerment in rural communities.",
    },
    {
      title: "Building Sustainable Dairy Ecosystems",
      description:
        "NDS's holistic dairy development approach led to long-term success for thousands of farmers.",
    },
  ]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section
      className="container-fluid px-3 position-relative mb-50"
      style={{
        overflowX: window.innerWidth < 768 ? "none" : "hidden",
      }}
    >
      {/* Cow Image - Background Layer */}
      <div
        className="position-absolute bottom-0 end-0 d-none d-md-block"
        style={{
          width: "50%",
          height: "85%",
          backgroundImage: `url(${bgCow})`,
          backgroundSize: "contain",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1,
          zIndex: 0,
          pointerEvents: "none",
          marginRight: "-280px",
        }}
      />

      <div className="container">
        <div className="row  position-relative z-1">
          {/* Left Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div
              className="position-relative w-100"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "450px",
              }}
            >
              <img
                src={successStory}
                alt="Success Story Video"
                className="img-fluid w-100"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <button
                className="position-absolute top-50 start-50 translate-middle btn btn-light rounded-circle"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="ri-play-fill" style={{ fontSize: "30px" }}></i>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-md-6 d-flex flex-column "
            style={{ minHeight: "450px" }}
          >
            <h2 className="bd-section__title">Success Stories</h2>
            <p className="bd-section__paragraph  mt-3">
              Real-life transformations and impacts achieved through our
              initiatives and partnerships are at the heart of our mission to
              empower rural communities.
            </p>

            <ul
              className="bd-section__paragraph mt-3 ps-3"
              style={{ listStyle: "none" }}
            >
              <li className="mb-2">
                <i className="ri-checkbox-circle-line text-success me-2"></i>
                Over 50,000 farmers impacted through sustainable dairy programs.
              </li>
              <li className="mb-2">
                <i className="ri-checkbox-circle-line text-success me-2"></i>
                3x increase in household income in supported regions.
              </li>
              <li className="mb-2">
                <i className="ri-checkbox-circle-line text-success me-2"></i>
                Women-led dairy cooperatives are driving socio-economic change.
              </li>
            </ul>

            <Slider {...settings} className="mt-3">
              {stories.map((story, index) => (
                <div key={index} className="mt-2">
                  <div className="border-start border-4 ps-3 border-success">
                    <h5 className="fw-bold mt-2">{story.title}</h5>
                    <p className="text-secondary mb-0 mt-2">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

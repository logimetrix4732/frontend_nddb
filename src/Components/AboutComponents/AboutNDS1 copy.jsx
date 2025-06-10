import React from "react";
import ChairmanSir from "../../Images/BoardofDirectorsImg/Chairman-Sir-01.png";
const AboutNDS1 = () => {
  return (
    <section className="bd-about__area pb-40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bd-about__thumb w-img mb-60">
              <img
                src="assets/img/about/about-thumb-01.jpg"
                alt="about-thumb"
                style={{
                  width: "645px",
                  height: "500",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-about__content-box-3 mb-60">
              <div className="bd-section__title-wrapper mb-40">
                <h2 className="bd-section__title mb-25">
                  A Message from the Chairman
                </h2>
                <p className="bd-section__paragraph">
                  At NDDB Dairy Services, we firmly believe that the strength of
                  India’s dairy sector lies in the hands of its farmers. Our
                  mission is to support and build farmer-owned institutions that
                  not only ensure transparency and sustainability but also
                  empower millions of rural households to become self-reliant.
                  Through structured training, access to quality breeding
                  services, nutritional support, and market linkages, we are
                  enabling inclusive growth at the grassroots level.
                </p>
              </div>
              <div className="bd-author__border">
                <div className="bd-about__author">
                  <img
                    src={ChairmanSir}
                    alt="author"
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "3px",
                    }}
                  />
                  <div className="bd-about__author-text">
                    <span>Chairman, NDDB Dairy Services</span>
                    <h3>
                      <a
                        href="https://www.linkedin.com/in/meenesh-shah-447339165/?originalSubdomain=in"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Shri Meenesh Shah
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNDS1;

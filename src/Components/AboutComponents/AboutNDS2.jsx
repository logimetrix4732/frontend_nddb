import React from "react";
import sectionbg from "../../assets/img/bg/section-bg.jpg";
const AboutNDS2 = () => {
  return (
    <section
      className="bd-about__area pt-70  pb-50 mb-80"
      data-background="assets/img/bg/section-bg.jpg"
      style={{
        backgroundImage: `url(${sectionbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bd-about__image-wrapper p-relative mb-60">
              <img
                className="bd-about__image-1"
                src="assets/img/about/about-img-01.jpg"
                alt="about-img"
              />
              <div className="bd-about__image-2 text-sm-end">
                <img src="assets/img/about/about-img-02.jpg" alt="about-img" />
              </div>
              <div className="bd-about__shape">
                <img
                  src="assets/img/about/about-cow.png"
                  alt="about-cow-icon"
                />
                <img
                  className="bd-about__dashed-icon"
                  src="assets/img/about/about-dashed.png"
                  alt="about-dashed"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-about__content-wrapper mb-60">
              <div className="bd-section__title-wrapper mb-40">
                <h2 className="bd-section__title mb-30">
                  Know About Our Farm &amp; History
                </h2>
                <p className="bd-section__paragraph">
                  NDDB Dairy Services is a wholly-owned subsidiary of the
                  National Dairy Development Board (NDDB). We are committed to
                  strengthening the dairy sector by supporting the formation and
                  growth of Producer Companies across India. Our goal is to
                  empower smallholder dairy farmers through sustainable,
                  farmer-owned institutions.
                  <br />
                  <br />
                  With more than two decades of field experience, we provide
                  strategic and operational support to help improve
                  productivity, ensure fair market access, and create long-term
                  livelihoods in rural areas.
                </p>
              </div>
              <div className="bd-about__features-wrapper mb-25">
                <div className="bd-about__features">
                  <div className="bd-about__features-title">
                    <h4>Our Mission</h4>
                  </div>
                  <div className="bd-about__features-list">
                    <ul>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Support Producer Companies
                        </div>
                      </li>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Improve animal productivity
                        </div>
                      </li>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Empower farmer enterprises
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bd-about__features">
                  <div className="bd-about__features-title">
                    <h4>Our Vision</h4>
                  </div>
                  <div className="bd-about__features-list">
                    <ul>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Strengthen rural ecosystems
                        </div>
                      </li>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Ensure fair incomes
                        </div>
                      </li>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Scale cooperative models
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bd-about__features">
                  <div className="bd-about__features-title">
                    <h4>Core Values</h4>
                  </div>
                  <div className="bd-about__features-list">
                    <ul>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Collaboration and trust
                        </div>
                      </li>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Integrity and transparency
                        </div>
                      </li>
                      <li>
                        <div className="features__icon">
                          <i className="fa-regular fa-check" />
                        </div>
                        <div className="features__list-title">
                          Innovation and excellence
                        </div>
                      </li>
                    </ul>
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

export default AboutNDS2;

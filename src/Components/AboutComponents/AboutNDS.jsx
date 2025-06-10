import React from "react";

const BriefOfNDS = () => {
  return (
    <section className="bd-about__area-2 pt-100 pb-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bd-about__content-box mb-60">
              <div className="bd-section__title-wrapper mb-25">
                <span className="bd-sub__title">About NDS</span>
                <h2 className="bd-section__title s-2 mb-30">
                  Empowering Dairy Farmers, Strengthening Rural India
                </h2>
                <p className="bd-section__paragraph">
                  NDDB Dairy Services (NDS) is a not-for-profit company
                  established by the National Dairy Development Board. We
                  support the formation and management of producer-owned
                  enterprises to enhance milk production, ensure fair value for
                  farmers, and deliver sustainable dairy development across
                  India.
                </p>
              </div>
              <div className="bd-about__award mb-40">
                <div className="bd-about__award__icon">
                  <img src="assets/img/about/award-icon.png" alt="award-icon" />
                </div>
                <div className="bd-about__award-content-2">
                  <h3>Serving 9.5+ Lakh Dairy Farmers</h3>
                  <p>
                    Active in 9 states, with 19+ Producer Companies and over 4.2
                    million litres of daily milk procurement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-about__image-wrapper-2 p-relative mb-60">
              <img
                className="bd-about__image-3"
                src="assets/img/about/about-img-03.jpg"
                alt="about-img"
              />
              <img
                className="bd-about__image-4"
                src="assets/img/about/about-img-04.jpg"
                alt="about-img"
              />
              <div className="bd-about__shape-2">
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
              <div className="bd-about__cercle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefOfNDS;

import React from "react";

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
                  However, like much of agriculture, dairy farms come in a wide
                  range of sizes. The largest U.S. dairy farms have over 15,000
                  cows, though farms with 1,000–5,000 cows are more common.
                  Register your dairy business with respective authorities.
                </p>
              </div>
              <div className="bd-author__border">
                <div className="bd-about__author">
                  <img src="assets/img/about/3/author.png" alt="author" />
                  <div className="bd-about__author-text">
                    <span>Head Of Idea</span>
                    <h3>
                      <a href="/">Alonso D. Dowson</a>
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

import Team from "../Components/HomeComponents/Team";
import ImageHeader from "../Components/Shared/ImageHeader";

const About = () => {
  return (
    <>
      <ImageHeader
        title="about us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <>
        {/* About area start */}
        <section className="bd-about__area pt-120 pb-60">
          <div className="container">
            <div className="row ">
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
                    <span className="bd-sub__title">About Us</span>
                    <h3 className=" mb-25">
                      NDDB Dairy Services (NDS), a Section 8 company registered
                      under the Companies Act, is a wholly owned subsidiary of
                      NDDB
                    </h3>
                    <p className="bd-section__paragraph">
                      NDS assists farmers in establishing ‘Producer owned
                      enterprises’ (POEs) which are incorporated under
                      provisions of Part XXI A of the Companies Act. These
                      enterprises run on the principles of mutual assistance.
                      NDS has set-up two mega semen stations at Alamadhi in
                      Tamil Nadu and Rahuri in Maharashtra. We also manage the
                      two largest semen stations in the country, Sabarmati
                      Ashram Gaushala located at Bidaj, Ahmedabad in Gujarat and
                      Animal Breeding Research Organisation located at Salon,
                      Raebareily in Uttar Pradesh
                    </p>
                  </div>
                  {/* <div className="bd-author__border">
                    <div className="bd-about__author">
                      <img src="assets/img/about/3/author.png" alt="author" />
                      <div className="bd-about__author-text">
                        <span>Head Of Idea</span>
                        <h3>
                          <a href="team.html">Alonso D. Dowson</a>
                        </h3>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About area end */}

        {/* <Team /> */}
      </>
    </>
  );
};

export default About;

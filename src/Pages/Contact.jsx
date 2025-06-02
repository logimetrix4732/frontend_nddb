import ImageHeader from "../Components/Shared/ImageHeader";

const Contact = () => {
  return (
    <>
      <ImageHeader
        title="get in touch"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <>
        {/* Contact info area start */}
        <section className="bd-contact__info-area pt-120 pb-90">
          <div className="container">
            <div className="row d-flex flex-wrap align-items-stretch">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-conatact__info text-center mb-30 h-100">
                  <div className="bd-conatact__info-icon">
                    <img
                      src="assets/img/icon/contact/01.png"
                      alt="conatact-icon"
                    />
                  </div>
                  <div className="bd-conatact__info-content">
                    <h3>Call Us Here</h3>
                    <span>
                      <a href="">(011) 49883000/ 49883088</a>
                    </span>
                    <span>
                      <a href="">+91 7092922421</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-conatact__info text-center mb-30 h-100">
                  <div className="bd-conatact__info-icon">
                    <img
                      src="assets/img/icon/contact/02.png"
                      alt="conatact-icon"
                    />
                  </div>
                  <div className="bd-conatact__info-content">
                    <h3>email address</h3>
                    <span>
                      <a href="mailto:enquiry@nddbdairyservices.com">
                        enquiry@nddbdairyservices.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-conatact__info text-center mb-30 h-100">
                  <div className="bd-conatact__info-icon">
                    <img
                      src="assets/img/icon/contact/03.png"
                      alt="conatact-icon"
                    />
                  </div>
                  <div className="bd-conatact__info-content">
                    <h3>office address</h3>
                    <span>
                      NDDB House, Safdarjung Enclave, New Delhi, Southwest
                      Delhi, Delhi, 110029
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="bd-conatact__info text-center mb-30 h-100">
                  <div className="bd-conatact__info-icon">
                    <img
                      src="assets/img/icon/contact/04.png"
                      alt="conatact-icon"
                    />
                  </div>
                  <div className="bd-conatact__info-content">
                    <h3>social connect</h3>
                    <span>
                      <a href="https://www.linkedin.com/company/nddb-dairy-services/">
                        linkedin.com/company/nddb-dairy-services/
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact info area end */}
        {/* Contact area end */}
        <section className="bd-contact__area pb-120">
          <div className="container">
            <div className="row">
              <div className="bd-contact__main">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6">
                    <div className="bd-google__map mb-60">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.163791815186!2d77.1999621!3d28.564843900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce279fa28f713%3A0xa6914db36a4ac6a6!2sNDDB%20Dairy%20Services!5e0!3m2!1sen!2sin!4v1748858973559!5m2!1sen!2sin" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="bd-contact__wrapper mb-30">
                      <div className="bd-section__title-wrapper mb-50">
                        <span className="bd-sub__title">Get Quoate</span>
                        <h2 className="bd-section__title mb-30">
                          make request
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <form action="#">
                            <div className="bd-contact__input mb-15">
                              <input type="text" placeholder="Enter name" />
                              <i className="fa-solid fa-user" />
                            </div>
                            <div className="bd-contact__input mb-15">
                              <input type="text" placeholder="Email address" />
                              <i className="fa-solid fa-envelope-open" />
                            </div>
                            <div className="bd-contact__input">
                              <textarea
                                placeholder="Message"
                                defaultValue={""}
                              />
                              <i className="fa-solid fa-pen" />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact area end */}
      </>
    </>
  );
};

export default Contact;

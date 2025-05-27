import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="bd-footer__area green-bg foo p-relative pt-65">
        <div className="bd-footer__bg w-img">
          <img src="assets/img/bg/footer-bg.png" alt="footer-bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-8 col-md-6">
              <div className="bd-footer__widget footer-col-4 mb-60">
                <div className="bd-footer__title">
                  <h4>About Us</h4>
                </div>
                <div className="bd-footer__subcribe">
                  <p>
                    Annual Reports <br /> Gallery (Photos and Videos)
                  </p>
                  <form action="#">
                    <div className="bd-footer__input p-relative mb-20">
                      <input type="text" placeholder="info@webmail.com" />
                      <i className="fa-solid fa-envelope-open" />
                    </div>
                    <button type="button" className="bd-theme__btn-3">
                      subscribe now
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="bd-footer__widget footer-col-1">
                <div className="bd-footer__title">
                  <h4>Producer Companies</h4>
                </div>
                <div className="bd-footer__paragraph">
                  <p>
                    A farm is a plot of land that is used to grow crops and
                    raise livestock, as in our farm, we raise sheep and sell
                    their wool. The word farm is also used as a verb to mean to
                    work land.
                  </p>
                </div>
                <div className="bd-footer__social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-behance-square" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="bd-footer__widget footer-col-2 mb-60">
                <div className="bd-footer__title">
                  <h4>Productivity Services</h4>
                </div>
                <div className="bd-footer__link">
                  <ul>
                    <li>
                      <a href="#">Agriculture Foods</a>
                    </li>
                    <li>
                      <a href="#">Eggs &amp; Meets</a>
                    </li>
                    <li>
                      <a href="#">Organic Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Fresh Milk</a>
                    </li>
                    <li>
                      <a href="#">Pond &amp; Sea Fish</a>
                    </li>
                    <li>
                      <a href="#">House Hold</a>
                    </li>
                    <li>
                      <a href="#">Cow Milk &amp; Meat</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">Natural Wheats</a>
                    </li>
                    <li>
                      <a href="#">Organic Food</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="bd-footer__widget footer-col-3 mb-60">
                <div className="bd-footer__title">
                  <h4>Contact Us</h4>
                </div>
                <div className="bd-footer__contact">
                  <div className="bd-footer__contact-item">
                    <span>Mon - Fri</span>
                    <p className="mb-20">10:00 am to 06:00 pm</p>
                  </div>
                  <div className="bd-footer__contact-item">
                    <span>Saturday (1st &amp; 4th)</span>
                    <p className="mb-25">08:00 am to 04:00 pm</p>
                  </div>
                  <div className="bd-footer__support">
                    <div className="bd-footer__support-inner">
                      <div className="bd-footer__support-icon">
                        <img
                          src="assets/img/icon/footer-text.png"
                          alt="footer-text"
                        />
                      </div>
                      <div className="bd-footer__support-title">
                        <span>Emergency Service</span>
                        <a href="tel:7092922421">+91 7092922421</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-copyright__area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-copyright__main">
                  <div className="bd-copyright__border">
                    <div className="bd-copyright__text">
                      <p>
                        Copyright design by{" "}
                        <span>
                          <a
                            target="_blank"
                            href="https://themeforest.net/user/bdevs/portfolio"
                          >
                            @bdevs
                          </a>
                        </span>{" "}
                        - 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

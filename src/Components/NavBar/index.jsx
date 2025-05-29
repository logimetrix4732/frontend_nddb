import React from "react";
import logo from "../../assets/img/logo/nddb_logo.jpg";

// import gallerybg from "../src/assets/img/bg/gallery-bg.png";
// import gallery01 from "../src/assets/img/gallery/gallery-01.jpg";
// import gallery02 from "../src/assets/img/gallery/gallery-02.jpg";
// import gallery03 from "../src/assets/img/gallery/gallery-03.jpg";
// import gallery04 from "../src/assets/img/gallery/gallery-04.jpg";
import gallery06 from "../../../src/assets/img/gallery/thumb/06.jpg";
import gallery07 from "../../../src/assets/img/gallery/thumb/07.jpg";
import gallery08 from "../../../src/assets/img/gallery/thumb/08.jpg";
import gallery09 from "../../../src/assets/img/gallery/thumb/09.jpg";
import gallery10 from "../../../src/assets/img/gallery/thumb/10.jpg";

const NavBar = () => {
  return (
    <header>
      {/* Header top area start */}
      <div className="bd-header__top-area pg-bg d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-9 col-8">
              <div className="bd-header__contact-spacing">
                <div className="bd-header__contact">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com">
                        <i className="fa-solid fa-envelope-open" />
                        enquiry@nddbdairyservices.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:89789790899">
                        <i className="fa-solid fa-phone" />
                        +91 709 292 2421
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4  col-md-3 col-4">
              <div className="bd-header__social text-end">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header top area end */}
      <div id="header-sticky" className="bd-header__area">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-4 col-4 p-0">
              <div className="bd-header__logo">
                <a href="index.html">
                  <img
                    src={logo}
                    alt="logo"
                    className=""
                    style={{
                      // height: '110px',
                      padding: "10px 10px 10px 30px",
                      borderRadius: "38px 20px 20px 38px",
                      width: "100%",
                    }}
                  />
                  {/* <img src="assets/img/logo/logo.png" alt="logo" /> */}
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-4 d-none d-md-block">
              <div className="bd-header__menu-wrapper d-flex justify-content-center">
                <div className="main-menu d-none d-lg-block">
                  <nav id="mobile-menu">
                    <ul className="menuLinks">
                      <li className="">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">Our Experties</a>
                        <ul className="submenu">
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="error.html">404 Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <a href="service.html">Milk Producer Org.</a>
                      </li>
                      <li className="">
                        <a href="news.html">Semen Station</a>
                      </li>
                      <li className="">
                        <a href="news.html">Blogs</a>
                      </li>
                      <li className="has-dropdown">
                        <a>More</a>
                        <ul className="submenu">
                          <li>
                            <a href="news.html">New Initiative</a>
                          </li>
                          <li>
                            <a href="news-details.html">Publications</a>
                          </li>
                          <li>
                            <a href="news-details.html">Tendars</a>
                          </li>
                          <li>
                            <a href="news-layout-1.html">Careers</a>
                          </li>
                          <li>
                            <a href="news-layout-2.html">Contact Us</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-1 col-md-4 col-8">
              <div className="bd-header__right d-flex align-items-center justify-content-end">
                <div className="bd-header__action">
                  <div className="bd-header__action-icon">
                    <button className="shoping__toggle">
                      <img
                        src="assets/img/icon/cart-icon.png"
                        alt="cart-icon"
                      />
                    </button>
                  </div>
                </div>
                <div className="bd-header__hamburger">
                  <div className="bd-header__hamburger-icon">
                    <button
                      className="side-toggle"
                      data-bs-toggle="offcanvas"
                      href="#offcanvasExample"
                      role="button"
                      aria-controls="offcanvasExample"
                    >
                      <img
                        src="assets/img/icon/hamburger-icon.png"
                        alt="hamburger-icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header offcanvas__top mb-40 d-flex justify-content-between align-items-center">

          <div className="offcanvas__logo logo">
            <a href="index.html">
              <img src={logo} alt="logo" style={{ height: "60px" }} />
            </a>
          </div>
          <div className="offcanvas__close">
            <button
              className="offcanvas__close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              // type="button"
            >
              <i className="fal fa-times" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas__search mb-25">
            <form action="#">
              <input type="text" placeholder="What are you searching for?" />
              <button type="submit">
                <i className="far fa-search" />
              </button>
            </form>
          </div>
          <div className="mobile-menu fix mb-40" />
          <div className="sidebar__thumb d-none d-lg-block mb-20">
            <div className="row gx-2">
              <div className="col-4">
                <div className="sidebar__single-thumb w-img mb-10">
                  <a
                    className="popup-image"
                    href="assets/img/gallery/thumb/06.jpg"
                  >
                    <img src={gallery06} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-thumb w-img mb-10">
                  <a
                    className="popup-image"
                    href="assets/img/gallery/thumb/07.jpg"
                  >
                    <img src={gallery07} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-thumb w-img mb-10">
                  <a
                    className="popup-image"
                    href="assets/img/gallery/thumb/08.jpg"
                  >
                    <img src={gallery08} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-thumb w-img mb-10">
                  <a
                    className="popup-image"
                    href="assets/img/gallery/thumb/09.jpg"
                  >
                    <img src={gallery09} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-thumb w-img mb-10">
                  <a
                    className="popup-image"
                    href="assets/img/gallery/thumb/10.jpg"
                  >
                    <img src={gallery10} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="sidebar__single-thumb w-img mb-10">
                  <a
                    className="popup-image"
                    href="assets/img/gallery/thumb/01.jpg"
                  >
                    <img src="assets/img/gallery/thumb/01.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas__contact mt-30 mb-20">
            <h4>Contact Info</h4>
            <ul>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="offcanvas__contact-text">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                  >
                    NDDB House, Safdarjung Enclave,
                    New Delhi, Southwest Delhi, Delhi 110029
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="far fa-phone" />
                </div>
                <div className="offcanvas__contact-text">
                  <a href="tel:+088889797697">+91 7092922421</a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-envelope" />
                </div>
                <div className="offcanvas__contact-text">
                  <a href="tel:+012-345-6789">
                    <span className="mailto:support@mail.com">
                    enquiry@nddbdairyservices.com
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="offcanvas__social">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
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

import { Link } from "react-router-dom";

const NavBar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Header top area start */}
      <div className="bd-header__top-area pg-bg d-none d-md-block">
        <div className="container">
          <div className="row align-items-center gx-0">
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
            {/* <div className="col-xl-4 col-lg-4  col-md-3 col-4">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* Header top area end */}
      <div id="header-sticky" className="bd-header__area">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-4 col-4 p-0">
              <div className="bd-header__logo">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    className=""
                    style={{
                      padding: hasScrolled ? "0 8px" : "15px 15px 15px 15px",
                      borderRadius: "24px 24px 24px 24px",
                      width: "100%",
                      transition: "padding 0.3s ease",
                    }}
                  />
                  {/* <img src="assets/img/logo/logo.png" alt="logo" /> */}
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-4 d-none d-md-block">
              <div className="bd-header__menu-wrapper d-flex justify-content-center">
                <div className="main-menu d-none d-lg-block">
                  <nav id="mobile-menu">
                    <ul className="menuLinks">
                      <li className="">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About</Link>
                      </li>
                      <li className="">
                        <Link to="/our-experties">Our Experties</Link>
                        {/* <ul className="submenu">
                          <li>
                            <Link to="team">Team</Link>
                          </li>
                          <li>
                            <Link to="team-details">Team Details</Link>
                          </li>
                          <li>
                            <Link to="gallary">Gallery</Link>
                          </li>
                          <li>
                            <Link to="faq">Faq</Link>
                          </li>
                          <li>
                            <Link to="shop">Shop</Link>
                          </li>
                          <li>
                            <Link to="product-details">Product Details</Link>
                          </li>
                          <li>
                            <Link to="wishlist">Wishlist</Link>
                          </li>
                          <li>
                            <Link to="cart">Cart</Link>
                          </li>
                          <li>
                            <Link to="checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="login">Login</Link>
                          </li>
                          <li>
                            <Link to="register">Register</Link>
                          </li>
                          <li>
                            <Link to="error">404 Page</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className="">
                        <Link to="milk-producer-org">Milk Producer Org.</Link>
                      </li>
                      <li className="">
                        <Link to="semen-station">Semen Station</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link>More</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="new-initiative">New Initiative</Link>
                          </li>
                          <li>
                            <Link to="publications">Publications</Link>
                          </li>
                          <li>
                            <Link to="careers">Careers</Link>
                          </li>
                          <li>
                            <Link to="/tenders">Tendars</Link>
                          </li>
                          {/* <li>
                            <Link to="/blogs">Blogs</Link>
                          </li> */}
                          <li>
                            <Link to="/contact-us">Contact Us</Link>
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
                {/* <div className="bd-header__action">
                  <div className="bd-header__action-icon">
                    <button className="shoping__toggle">
                      <img
                        src="assets/img/icon/cart-icon.png"
                        alt="cart-icon"
                      />
                    </button>
                  </div>
                </div> */}
                <div className="bd-header__hamburger">
                  <div className="bd-header__hamburger-icon">
                    {/* Large Screen Offcanvas Button (Gallery & Contact Info) */}
                    <button
                      className="side-toggle d-none d-lg-block"
                      data-bs-toggle="offcanvas"
                      href="#offcanvasExample"
                      role="button"
                      aria-controls="mobileOffcanvasLabel"
                    >
                      <img
                        src="assets/img/icon/hamburger-icon.png"
                        alt="hamburger-icon"
                      />
                    </button>

                    {/* Small Screen Offcanvas Button (Mobile Menu Links) */}
                    <button
                      className="side-toggle d-block d-lg-none"
                      data-bs-toggle="offcanvas"
                      href="#mobileOffcanvas"
                      role="button"
                      aria-controls="offcanvasMobileMenu"
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

      {/* offcanvas for desktop with gallary and contact details  */}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
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
          <div className="mobile-menu fix mb-10" />
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
                    href="https://www.google.com/maps/place/NDDB+Dairy+Services/@28.5648439,77.1973872,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce279fa28f713:0xa6914db36a4ac6a6!8m2!3d28.5648439!4d77.1999621!16s%2Fg%2F1hf6ft670?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                  >
                    NDDB House, Safdarjung Enclave, New Delhi, Southwest Delhi,
                    Delhi 110029
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
                <a
                  href="https://www.youtube.com/@nddbdairyservices6754"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nddb-dairy-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* offcanvas for the small screen with navlinks */}

      <div
        className="offcanvas offcanvas-end d-lg-none offcanvasCustom"
        tabIndex="-1"
        id="mobileOffcanvas"
        aria-labelledby="mobileOffcanvasLabel"
      >
        <div className="offcanvas-header offcanvas__top mb-10 d-flex justify-content-between align-items-center">
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
        <div className="offcanvas-body px-4">
          <nav className="nav flex-column mb-4">
            <a className="nav-link border-bottom py-2 text-dark" href="/">
              Home
            </a>
            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/about-us"
            >
              About Us
            </a>

            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/milk-producer"
            >
              Area Of Expertise
            </a>

            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/milk-producer"
            >
              Milk Producer Org.
            </a>
            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/seamen-station"
            >
              Seamen Station
            </a>
            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/new-initiative"
            >
              New Initiative
            </a>
            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/publications"
            >
              Publications
            </a>
            <a className="nav-link border-bottom py-2 text-dark" href="/career">
              Careers
            </a>
            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/tenders"
            >
              Tenders
            </a>
            <a
              className="nav-link border-bottom py-2 text-dark"
              href="/contact-us"
            >
              Contact Us
            </a>
          </nav>

          <div className="mt-3 mb-5">
            <h6 className="text-success fw-bold mb-3">CONTACT INFO</h6>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2 d-flex align-items-start">
                <i className="ri-map-pin-line me-2 text-success"></i>
                <span>
                  NDDB House, Safdarjung Enclave,
                  <br />
                  New Delhi, Southwest Delhi, Delhi 110029
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i className="ri-phone-line me-2 text-success"></i>
                <span>+91 7092922421</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="ri-mail-line me-2 text-success"></i>
                <span>enquiry@nddbdairyservices.com</span>
              </li>
            </ul>
          </div>

          <div className="d-flex gap-2 mt-4">
            <a
              href="#"
              className="btn btn-outline-success btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: "36px", width: "36px" }}
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              className="btn btn-outline-success btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: "36px", width: "36px" }}
            >
              <i className="ri-twitter-fill"></i>
            </a>
            <a
              href="#"
              className="btn btn-outline-success btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: "36px", width: "36px" }}
            >
              <i className="ri-youtube-fill"></i>
            </a>
            <a
              href="#"
              className="btn btn-outline-success btn-sm rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: "36px", width: "36px" }}
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

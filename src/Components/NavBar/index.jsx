import React from "react";

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
          <div className="row g-0 align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-4 col-4 p-0">
              <div className="bd-header__logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-4 d-none d-md-block">
              <div className="bd-header__menu-wrapper d-flex justify-content-center">
                <div className="main-menu d-none d-none d-lg-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="index.html">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Home Style 1</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Style 2</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Style 3</a>
                          </li>
                        </ul>
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
                      <li className="has-dropdown">
                        <a href="service.html">Milk Producer Org.</a>
                        <ul className="submenu">
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="news.html">Semen Station</a>
                        <ul className="submenu">
                          <li>
                            <a href="news.html">News</a>
                          </li>
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                          <li>
                            <a href="news-layout-1.html">Grid Layout 1</a>
                          </li>
                          <li>
                            <a href="news-layout-2.html">Grid Layout 2</a>
                          </li>
                          <li>
                            <a href="news-layout-3.html">Grid Layout 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="news.html">Blogs</a>
                        <ul className="submenu">
                          <li>
                            <a href="news.html">News</a>
                          </li>
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                          <li>
                            <a href="news-layout-1.html">Grid Layout 1</a>
                          </li>
                          <li>
                            <a href="news-layout-2.html">Grid Layout 2</a>
                          </li>
                          <li>
                            <a href="news-layout-3.html">Grid Layout 3</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="news.html">Tenders</a>
                        <ul className="submenu">
                          <li>
                            <a href="news.html">News</a>
                          </li>
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                          <li>
                            <a href="news-layout-1.html">Grid Layout 1</a>
                          </li>
                          <li>
                            <a href="news-layout-2.html">Grid Layout 2</a>
                          </li>
                          <li>
                            <a href="news-layout-3.html">Grid Layout 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
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
                    <button className="side-toggle">
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
    </header>
  );
};

export default NavBar;

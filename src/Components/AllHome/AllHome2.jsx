import React from "react";

const AllHome2 = () => {
  return (
    <>
      {/*[if lte IE 9]>
   <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
   <![endif]*/}
      {/* Preloader start */}
      <div className="preloader">
        <div className="loader rubix-cube">
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3 color-1" />
          <div className="layer layer-4" />
          <div className="layer layer-5" />
          <div className="layer layer-6" />
          <div className="layer layer-7" />
          <div className="layer layer-8" />
        </div>
      </div>
      {/* Preloader end */}
      {/* Offcanvas area start */}
      <div className="fix">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-2.png" alt="logo" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fal fa-times" />
                  </button>
                </div>
              </div>
              <div className="offcanvas__search mb-25">
                <form action="#">
                  <input
                    type="text"
                    placeholder="What are you searching for?"
                  />
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
                        <img src="assets/img/gallery/thumb/06.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/07.jpg"
                      >
                        <img src="assets/img/gallery/thumb/07.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/08.jpg"
                      >
                        <img src="assets/img/gallery/thumb/08.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/09.jpg"
                      >
                        <img src="assets/img/gallery/thumb/09.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="sidebar__single-thumb w-img mb-10">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/thumb/10.jpg"
                      >
                        <img src="assets/img/gallery/thumb/10.jpg" alt="" />
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
                        12/A, Mirnada City Tower, NYC
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+088889797697">+088889797697</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+012-345-6789">
                        <span className="mailto:support@mail.com">
                          support@mail.com
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
        </div>
      </div>
      <div className="offcanvas-overlay" />
      <div className="offcanvas-overlay-white" />
      {/* Offcanvas area start */}
      {/* Cartmini sidber start */}
      <div className="fix">
        <div className="shoping__sidebar">
          <div className="cartmini__wrapper">
            <div className="cartmini__title">
              <h4>Shopping Cart</h4>
            </div>
            <div className="cartmini__close">
              <button type="button">
                <i className="fal fa-times" />
              </button>
            </div>
            <div className="cartmini__widget">
              <div className="cartmini__inner">
                <ul>
                  <li>
                    <div className="cartmini__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/product/quick-view/quick-view-01.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cartmini__content">
                      <h5>
                        <a href="product-details.html">sweet milk Cream</a>
                      </h5>
                      <div className="product-quantity mt-10 mb-10">
                        <span className="cart-minus">-</span>
                        <input
                          className="cart-input"
                          type="text"
                          defaultValue={1}
                        />
                        <span className="cart-plus">+</span>
                      </div>
                      <div className="product__sm-price-wrapper">
                        <span className="product__sm-price">$46.00</span>
                      </div>
                    </div>
                    <a href="#" className="cartmini__del">
                      <i className="fal fa-times" />
                    </a>
                  </li>
                  <li>
                    <div className="cartmini__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/product/quick-view/quick-view-02.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cartmini__content">
                      <h5>
                        <a href="product-details.html">pure 1000ml milk</a>
                      </h5>
                      <div className="product-quantity mt-10 mb-10">
                        <span className="cart-minus">-</span>
                        <input
                          className="cart-input"
                          type="text"
                          defaultValue={1}
                        />
                        <span className="cart-plus">+</span>
                      </div>
                      <div className="product__sm-price-wrapper">
                        <span className="product__sm-price">$32.00</span>
                      </div>
                    </div>
                    <a href="#" className="cartmini__del">
                      <i className="fal fa-times" />
                    </a>
                  </li>
                  <li>
                    <div className="cartmini__thumb">
                      <a href="product-details.html">
                        <img
                          src="assets/img/product/quick-view/quick-view-03.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cartmini__content">
                      <h5>
                        <a href="product-details.html">mikado cheese bar</a>
                      </h5>
                      <div className="product-quantity mt-10 mb-10">
                        <span className="cart-minus">-</span>
                        <input
                          className="cart-input"
                          type="text"
                          defaultValue={1}
                        />
                        <span className="cart-plus">+</span>
                      </div>
                      <div className="product__sm-price-wrapper">
                        <span className="product__sm-price">$62.00</span>
                      </div>
                    </div>
                    <a href="product-details.html" className="cartmini__del">
                      <i className="fal fa-times" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cartmini__checkout">
                <div className="cartmini__checkout-title mb-30">
                  <h4>Subtotal:</h4>
                  <span>$113.00</span>
                </div>
                <div className="cartmini__checkout-btn">
                  <a href="cart.html" className="bd-fill__btn w-100">
                    {" "}
                    <span /> view cart
                  </a>
                  <a href="checkout.html" className="bd-fill__btn-2 w-100">
                    {" "}
                    <span /> checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cartmini sidber end */}
      {/* Added to cart message  */}
      <div className="added-to-cart">
        <div className="added-to-cart-content d-flex align-items-center">
          <i className="fa-light fa-check" />
          <p>Successfully Added to cart</p>
          <span className="bd-action__item-number cart-count">0</span>
        </div>
      </div>
      {/* Added to wishlist message */}
      <div className="added-to-wishlist">
        <div className="added-to-cart-content d-flex align-items-center">
          <i className="fa-light fa-check" />
          <p>Successfully Added to wishlist</p>
          <span className="bd-action__item-number wishlist-count">0</span>
        </div>
      </div>
      {/* Add product modal area start */}
      <div className="product__modal modal fade" id="productmodal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="product__modal-wrapper p-relative">
              <div className="product__modal-close p-absolute">
                <button data-bs-dismiss="modal">
                  <i className="fal fa-times" />
                </button>
              </div>
              <div className="product__modal-inner">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-box">
                      <div className="tab-content" id="modalTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="nav1"
                          role="tabpanel"
                          aria-labelledby="nav1-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-01.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav2"
                          role="tabpanel"
                          aria-labelledby="nav2-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-02.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav3"
                          role="tabpanel"
                          aria-labelledby="nav3-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-03.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav4"
                          role="tabpanel"
                          aria-labelledby="nav4-tab"
                        >
                          <div className="product__modal-img w-img">
                            <img
                              src="assets/img/product/quick-view/quick-view-04.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs" id="modalTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="nav1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav1"
                            type="button"
                            role="tab"
                            aria-controls="nav1"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-01.png"
                              alt=""
                            />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="nav2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav2"
                            type="button"
                            role="tab"
                            aria-controls="nav2"
                            aria-selected="false"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-02.png"
                              alt=""
                            />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="nav3-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav3"
                            type="button"
                            role="tab"
                            aria-controls="nav3"
                            aria-selected="false"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-03.png"
                              alt=""
                            />
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="nav4-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav4"
                            type="button"
                            role="tab"
                            aria-controls="nav4"
                            aria-selected="false"
                          >
                            <img
                              src="assets/img/product/quick-view/nav-04.png"
                              alt=""
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-content">
                      <h3 className="product__modal-title">
                        Dairy products are derived from milk
                      </h3>
                      <div className="product__details-price">
                        <span className="old-price">$90.35</span>
                        <span className="new-price">$70.25</span>
                      </div>
                      <div className="product__review">
                        <div className="product__details-rating">
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-regular fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-regular fa-star" />
                          </a>
                        </div>
                        <div className="product__add-review">
                          <span>
                            <a href="#">1 Review</a>
                          </span>
                          <span>
                            <a href="#">Add Review</a>
                          </span>
                        </div>
                      </div>
                      <div className="product__stock mb-20">
                        <span>Availability :</span>
                        <span>In Stock</span>
                      </div>
                      <div className="product__details-action mb-20">
                        <div className="product__quantity">
                          <div className="product-quantity-wrapper">
                            <form action="#">
                              <button className="cart-minus">
                                <i className="fa-light fa-minus" />
                              </button>
                              <input
                                className="cart-input"
                                type="text"
                                defaultValue={1}
                              />
                              <button className="cart-plus">
                                <i className="fa-light fa-plus" />
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="product__add-cart">
                          <a
                            href="javascript:void(0)"
                            className="bd-fill__btn cart-btn"
                          >
                            <i className="fa-solid fa-basket-shopping" /> Add To
                            Cart
                          </a>
                        </div>
                        <div className="product__add-wish">
                          <a href="#" className="product__add-wish-btn">
                            <i className="fa-solid fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="product__modal-links mb-20">
                        <ul>
                          <li>
                            <a href="#" title="Add to Wishlist">
                              <i className="fal fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Compare">
                              <i className="far fa-sliders-h" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Print">
                              <i className="fal fa-print" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Print">
                              <i className="fal fa-share-alt" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__safe-checkout">
                        <h5>Guaranteed Safe Checkout</h5>
                        <a href="#">
                          <img
                            src="assets/img/product/details/discover.png"
                            alt="payment image"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/product/details/mastercard.png"
                            alt="payment image"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/product/details/paypal.png"
                            alt="payment image"
                          />
                        </a>
                        <a href="#">
                          <img
                            src="assets/img/product/details/visa.png"
                            alt="payment image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add product modal area end */}
      {/* Header area start */}
      <header>
        {/* Header top area start */}
        <div className="bd-header__top-area-2 pg-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-9">
                <div className="bd-header__contact">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com">
                        <i className="fa-solid fa-envelope-open" />
                        info@webmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:89789790899">
                        <i className="fa-solid fa-phone" />
                        897 897 908 99
                      </a>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-clock" />
                        Mon - fri: 09:00 - 17:00 / Close on sunday
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 d-none d-lg-block">
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
        {/* Header top area start */}
        <div id="header-sticky" className="bd-header__area-3">
          <div className="container">
            <div className="bd-header__main-3">
              <div className="row g-0 align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-4 col-4 p-0">
                  <div className="bd-header__logo-3">
                    <a href="index.html">
                      <img src="assets/img/logo/logo-4.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-4 d-none d-md-block">
                  <div className="bd-header__menu-wrapper-3 pl-40">
                    <div className="main-menu main-menu-3 d-none d-none d-lg-block">
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
                            <a href="#">Pages</a>
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
                                <a href="product-details.html">
                                  Product Details
                                </a>
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
                            <a href="service.html">Service</a>
                            <ul className="submenu">
                              <li>
                                <a href="service.html">Service</a>
                              </li>
                              <li>
                                <a href="service-details.html">
                                  Service details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="news.html">News</a>
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
                <div className="col-xl-2 col-lg-2 col-md-4 col-8">
                  <div className="bd-header__right d-flex align-items-center justify-content-end">
                    <div className="bd-header__action d-flex align-items-center d-none d-sm-block">
                      <ul>
                        <li>
                          <div className="bd-search__box">
                            <div className="search-toggle">
                              <i className="header-search__btn fa-regular fa-magnifying-glass" />
                              <i className="header-search__close fa-regular fa-xmark" />
                            </div>
                            <div className="bd-search__form p-relative">
                              <form action="#">
                                <input
                                  type="text"
                                  placeholder="Search here..."
                                />
                                <button type="submit">
                                  <i className="fal fa-search" />
                                </button>
                              </form>
                            </div>
                          </div>
                          <button className="shoping__toggle">
                            <img
                              src="assets/img/icon/cart-icon.png"
                              alt="cart-icon"
                            />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="bd-header__hamburger ml-20">
                      <button className="side-toggle">
                        <img
                          src="assets/img/icon/hamburger-icon-2.png"
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
      {/* Header area end */}
      {/* Body main wrapper start */}
      <main>
        <section className="bd-hero__area">
          <div className="hero__active-2 swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="bd-singel__hero">
                  <div className="hero__height-3 d-flex align-items-center">
                    <div
                      className="bd-hero__banner hero__overlay include__bg"
                      data-background="assets/img/hero/hero-3.jpg"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="bd-hero__box">
                            <div
                              className="bd-hero__shape"
                              data-animation="fadeInLeft"
                              data-delay=".5s"
                            >
                              <div className="bd-hero__shape-inner">
                                <img
                                  src="assets/img/hero/bottle.png"
                                  alt="bottle"
                                />
                              </div>
                            </div>
                            <div className="bd-hero__content-3 pt-25">
                              <span data-animation="fadeInUp" data-delay=".3s">
                                Get everytime fresh assets
                              </span>
                              <h2 data-animation="fadeInUp" data-delay=".5s">
                                fresh milk
                              </h2>
                              <div
                                className="bd-hero__btn-wrapper"
                                data-animation="fadeInUp"
                                data-delay=".7s"
                              >
                                <a className="bd-hero__btn-3" href="shop.html">
                                  Our Products
                                </a>
                                <a className="bd-hero__btn-4" href="about.html">
                                  about us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bd-singel__hero">
                  <div className="hero__height-3 d-flex align-items-center">
                    <div
                      className="bd-hero__banner hero__overlay include__bg"
                      data-background="assets/img/hero/hero-7.jpg"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="bd-hero__box">
                            <div
                              className="bd-hero__shape"
                              data-animation="fadeInLeft"
                              data-delay=".5s"
                            >
                              <div className="bd-hero__shape-inner">
                                <img
                                  src="assets/img/hero/bottle.png"
                                  alt="bottle"
                                />
                              </div>
                            </div>
                            <div className="bd-hero__content-3 pt-25">
                              <span data-animation="fadeInUp" data-delay=".3s">
                                Welcome to our dairy farm
                              </span>
                              <h2 data-animation="fadeInUp" data-delay=".5s">
                                dairypress
                              </h2>
                              <div
                                className="bd-hero__btn-wrapper"
                                data-animation="fadeInUp"
                                data-delay=".7s"
                              >
                                <a className="bd-hero__btn-3" href="shop.html">
                                  Our Products
                                </a>
                                <a className="bd-hero__btn-4" href="about.html">
                                  about us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="bd-singel__hero">
                  <div className="hero__height-3 d-flex align-items-center">
                    <div
                      className="bd-hero__banner hero__overlay include__bg"
                      data-background="assets/img/hero/hero-6.jpg"
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="bd-hero__box">
                            <div
                              className="bd-hero__shape"
                              data-animation="fadeInLeft"
                              data-delay=".5s"
                            >
                              <div className="bd-hero__shape-inner">
                                <img
                                  src="assets/img/hero/bottle.png"
                                  alt="bottle"
                                />
                              </div>
                            </div>
                            <div className="bd-hero__content-3 pt-25">
                              <span data-animation="fadeInUp" data-delay=".3s">
                                Welcome to our dairy farm
                              </span>
                              <h2 data-animation="fadeInUp" data-delay=".5s">
                                Milk process
                              </h2>
                              <div
                                className="bd-hero__btn-wrapper"
                                data-animation="fadeInUp"
                                data-delay=".7s"
                              >
                                <a className="bd-hero__btn-3" href="shop.html">
                                  Our Products
                                </a>
                                <a className="bd-hero__btn-4" href="about.html">
                                  about us
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero area start */}
        {/* Service area start */}
        <section className="bd-serrvice__area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bd-section__title-wrapper text-center mb-50">
                  <span className="bd-sub__title">Services</span>
                  <h2 className="bd-section__title">what we provide</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-service__item-3 text-center mb-30">
                  <div className="bd-service__thumb-3">
                    <a href="service-details-2.html">
                      <img
                        src="assets/img/service/3/illustration-01.png"
                        alt="illustration-icon"
                      />
                    </a>
                  </div>
                  <div className="bd-service__content-3">
                    <h3>
                      <a href="product-details.html">fresh meat &amp; milk</a>
                    </h3>
                    <p>
                      Content farm is a company that employs large numbers
                      countdown.
                    </p>
                    <a className="bd-link__btn" href="service-details.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-service__item-3 text-center mb-30">
                  <div className="bd-service__thumb-3">
                    <a href="service-details-2.html">
                      <img
                        src="assets/img/service/3/illustration-02.png"
                        alt="illustration-icon"
                      />
                    </a>
                  </div>
                  <div className="bd-service__content-3">
                    <h3>
                      <a href="product-details.html">
                        fresh milk &amp; butter.
                      </a>
                    </h3>
                    <p>
                      Content farm is a company that employs large numbers
                      countdown.
                    </p>
                    <a className="bd-link__btn" href="service-details.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="bd-service__item-3 text-center mb-30">
                  <div className="bd-service__thumb-3">
                    <a href="service-details-2.html">
                      <img
                        src="assets/img/service/3/illustration-03.png"
                        alt="illustration-icon"
                      />
                    </a>
                  </div>
                  <div className="bd-service__content-3">
                    <h3>
                      <a href="product-details.html">fresh meat &amp; milk</a>
                    </h3>
                    <p>
                      Content farm is a company that employs large numbers
                      countdown.
                    </p>
                    <a className="bd-link__btn" href="service-details.html">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="bd-service__text">
                <p>
                  Looking for a place you can trust to keep your vehicles
                  rolling. <a href="service-details.html">Find Out More</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Service area end */}
        {/* About area start */}
        <section
          className="bd-about__area-2 about__bg fix pt-120 pb-60"
          data-background="assets/img/bg/about-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="bd-about__thumb-wrapper">
                  <div className="bd-about__thumb-1 about__thumb w-img">
                    <img
                      src="assets/img/about/3/about-01.jpg"
                      alt="about-thumb"
                    />
                  </div>
                  <div className="bd-about__thumb-2 about__thumb w-img">
                    <img
                      src="assets/img/about/3/about-02.jpg"
                      alt="about-thumb"
                    />
                  </div>
                  <div className="bd-about__thumb-3 about__thumb w-img">
                    <img
                      src="assets/img/about/3/about-03.jpg"
                      alt="about-thumb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bd-about__content-box-3 mb-60">
                  <div className="bd-section__title-wrapper mb-35">
                    <span className="bd-sub__title">About Us</span>
                    <h2 className="bd-section__title s-2 mb-25">
                      Know About Our Farm &amp; History
                    </h2>
                    <p className="bd-section__paragraph">
                      We have been working in this industry for more than 30
                      years with trust and honesty. All hands must be on deck if
                      we are to achieve our goal of improving global nutrition.
                    </p>
                  </div>
                  <div className="bd-about__list">
                    <ul>
                      <li>
                        {" "}
                        <img src="assets/img/icon/check.png" alt="check" /> Our
                        work is guaranteed
                      </li>
                      <li>
                        {" "}
                        <img src="assets/img/icon/check.png" alt="check" /> Our
                        work is guaranteed
                      </li>
                      <li>
                        {" "}
                        <img src="assets/img/icon/check.png" alt="check" /> Our
                        work is guaranteed
                      </li>
                      <li>
                        {" "}
                        <img src="assets/img/icon/check.png" alt="check" /> Our
                        work is guaranteed
                      </li>
                    </ul>
                  </div>
                  <div className="bd-about__author">
                    <img src="assets/img/about/3/author.png" alt="author" />
                    <div className="bd-about__author-text">
                      <span>Head Of Idea</span>
                      <h3>
                        <a href="team.html">Alonso D. Dowson</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About area end */}
        {/* Features area start */}
        <section className="bd-product__area fix p-relative pt-120 pb-70">
          <div className="bd-product__bg">
            <img src="assets/img/bg/product-bg.jpg" alt="product-bg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="bd-section__title-wrapper mb-50">
                <span className="bd-sub__title">Featured</span>
                <h2 className="bd-section__title">featured product</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="features__inner p-relative">
                  <div className="product__active swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="bd-product__item text-center mb-30">
                          <div className="bd-product__img">
                            <img
                              src="assets/img/product/product-11.jpg"
                              alt="product-img"
                            />
                          </div>
                          <div className="bd-product__content">
                            <h4>
                              <a href="#">organic fresh meat</a>
                            </h4>
                            <span className="bd-product__new-price">
                              $45.00
                            </span>
                          </div>
                          <div className="bd-product__action">
                            <a
                              className="cart-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-bs-toggle="modal"
                            >
                              <i className="fal fa-cart-arrow-down" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Shop"
                              data-bs-toggle="modal"
                              data-bs-target="#productmodal"
                            >
                              <i className="fal fa-eye" />
                            </a>
                            <a
                              className="wishlist-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Wishlist"
                              data-bs-toggle="modal"
                            >
                              {" "}
                              <i className="fal fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-product__item text-center mb-30">
                          <div className="bd-product__img">
                            <img
                              src="assets/img/product/product-02.jpg"
                              alt="product-img"
                            />
                          </div>
                          <div className="bd-product__content">
                            <h4>
                              <a href="#">organic fresh milk</a>
                            </h4>
                            <span className="bd-product__new-price">
                              $29.00
                            </span>
                            <span className="bd-product__old-price">
                              <del>$19.00</del>
                            </span>
                          </div>
                          <div className="bd-product__action">
                            <a
                              className="cart-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-bs-toggle="modal"
                            >
                              <i className="fal fa-cart-arrow-down" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Shop"
                              data-bs-toggle="modal"
                              data-bs-target="#productmodal"
                            >
                              <i className="fal fa-eye" />
                            </a>
                            <a
                              className="wishlist-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Wishlist"
                              data-bs-toggle="modal"
                            >
                              {" "}
                              <i className="fal fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-product__item text-center mb-30">
                          <div className="bd-product__img">
                            <img
                              src="assets/img/product/product-03.jpg"
                              alt="product-img"
                            />
                          </div>
                          <div className="bd-product__content">
                            <h4>
                              <a href="#">mikado cheese bar</a>
                            </h4>
                            <span className="bd-product__new-price">
                              $20.00
                            </span>
                          </div>
                          <div className="bd-product__action">
                            <a
                              className="cart-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-bs-toggle="modal"
                            >
                              <i className="fal fa-cart-arrow-down" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Shop"
                              data-bs-toggle="modal"
                              data-bs-target="#productmodal"
                            >
                              <i className="fal fa-eye" />
                            </a>
                            <a
                              className="wishlist-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Wishlist"
                              data-bs-toggle="modal"
                            >
                              {" "}
                              <i className="fal fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="bd-product__item text-center mb-30">
                          <div className="bd-product__img">
                            <img
                              src="assets/img/product/product-04.jpg"
                              alt="product-img"
                            />
                          </div>
                          <div className="bd-product__content">
                            <h4>
                              <a href="#">custard oil 500ml</a>
                            </h4>
                            <span className="bd-product__new-price">
                              $34.00
                            </span>
                            <span className="bd-product__old-price">
                              <del>$24.00</del>
                            </span>
                          </div>
                          <div className="bd-product__action">
                            <a
                              className="cart-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick View"
                              data-bs-toggle="modal"
                            >
                              <i className="fal fa-cart-arrow-down" />
                            </a>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Shop"
                              data-bs-toggle="modal"
                              data-bs-target="#productmodal"
                            >
                              <i className="fal fa-eye" />
                            </a>
                            <a
                              className="wishlist-btn"
                              href="javascript:void(0)"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Quick Wishlist"
                              data-bs-toggle="modal"
                            >
                              {" "}
                              <i className="fal fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__btn text-center mt-20 mb-50">
                    <a className="bd-theme__btn-4" href="shop.html">
                      more proudcts
                    </a>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="bd-product__navigatin">
                    <button className="product-button-prev">
                      <i className="far fa-long-arrow-left" />
                    </button>
                    <button className="product-button-next">
                      <i className="far fa-long-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features area end */}
        {/* Brand area start */}
        <div className="bd-brand__area green-bg-2 pt-70 pb-50">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="bd-brand-__main-wrapper">
                <div className="bd-brand-active swiper-container">
                  <div className="swiper-wrapper text-center">
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/1.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/2.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/3.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/4.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/5.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="bd-single__brand-2 mb-30">
                        <a href="#">
                          <img src="assets/img/brand/6.png" alt="brand-img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Brand area end */}
        {/* Skill area start */}
        <section className="bd-skill__area pt-120 pb-60">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-4 col-lg-6">
                <div className="bd-skill__left text-lg-end mb-60">
                  <div className="bd-section__title-wrapper mb-45">
                    <span className="bd-sub__title">Skillset</span>
                    <h2 className="bd-section__title s-2 mb-25">
                      #1 Only Ice cube Cream Recipe
                    </h2>
                    <p className="bd-section__paragraph">
                      We have been working in this industry for more than 30
                      year with trust and honesty. All hands must be on deck if
                      we are to achieve our goal.
                    </p>
                  </div>
                  <div className="bd-skill__btn">
                    <a className="bd-theme__btn-4" href="shop.html">
                      more proudcts
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-6">
                <div className="bd-skill__image text-center mb-60">
                  <img src="assets/img/skill/skill-01.png" alt="skill-image" />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6">
                <div className="bd-skill__features mb-60">
                  <div className="bd-skill__features-item mb-25">
                    <div className="bd-skill__features-icon">
                      <img src="assets/img/skill/icon-1.png" alt="icon" />
                    </div>
                    <div className="bd-skill__features-content">
                      <h3>100% Organic Product</h3>
                      <p>
                        Content farm is a company that employ large numbers
                        countdown.
                      </p>
                    </div>
                  </div>
                  <div className="bd-skill__features-item mb-25">
                    <div className="bd-skill__features-icon">
                      <img src="assets/img/skill/icon-2.png" alt="icon" />
                    </div>
                    <div className="bd-skill__features-content">
                      <h3>100% Organic Product</h3>
                      <p>
                        Content farm is a company that employ large numbers
                        countdown.
                      </p>
                    </div>
                  </div>
                  <div className="bd-skill__features-item mb-25">
                    <div className="bd-skill__features-icon">
                      <img src="assets/img/skill/icon-3.png" alt="icon" />
                    </div>
                    <div className="bd-skill__features-content">
                      <h3>100% Organic Product</h3>
                      <p>
                        Content farm is a company that employ large numbers
                        countdown.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skill area end */}
        {/* Video area start */}
        <section
          className="bd-video__area video__overlay include__bg pt-120 pb-120"
          data-background="assets/img/bg/video-bg.jpg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="bd-video__wrapper text-center">
                  <div className="bd-video__btn d-flex justify-content-center mb-50">
                    <a
                      className="bd-play__btn two popup-video"
                      href="https://www.youtube.com/watch?v=awKCfkT96pg"
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                  </div>
                  <div className="bd-section__title-wrapper mb-40">
                    <span className="bd-sub__title s-2">Intro Video</span>
                    <h2 className="bd-section__title white">
                      ready to experience &amp; <br />
                      work difference
                    </h2>
                  </div>
                  <div className="bd-video__btn-wrapper">
                    <a className="bd-theme__btn-5" href="contact.html">
                      make appointment
                    </a>
                    <a className="bd-theme__btn-6" href="contact.html">
                      get a quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Video area end */}
        {/* Process area start */}
        <section className="bd-process__area p-relative pt-120 pb-115">
          <div className="bd-process__bg">
            <img src="assets/img/bg/process-bg.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-md-8">
                <div className="bd-section__title-wrapper mb-50">
                  <span className="bd-sub__title">Process</span>
                  <h2 className="bd-section__title">working process</h2>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="processs__btn text-md-end mb-50">
                  <a className="bd-theme__btn-4" href="about.html">
                    more proudcts
                  </a>
                </div>
              </div>
            </div>
            <div className="bd-process__grid">
              <div className="bd-process__item">
                <div className="bd-process__thumb w-img">
                  <a href="#">
                    <img src="assets/img/process/01.png" alt="process-thumb" />
                  </a>
                  <div className="bd-process__number">
                    <span>01</span>
                  </div>
                </div>
                <div className="bd-process__content">
                  <h4>
                    <a href="about.html">Market research</a>
                  </h4>
                  <span>step one</span>
                </div>
              </div>
              <div className="bd-process__item">
                <div className="bd-process__thumb w-img">
                  <a href="#">
                    <img src="assets/img/process/02.png" alt="process-thumb" />
                  </a>
                  <div className="bd-process__number">
                    <span>02</span>
                  </div>
                </div>
                <div className="bd-process__content">
                  <h4>
                    <a href="about.html">Business plans</a>
                  </h4>
                  <span>step two</span>
                </div>
              </div>
              <div className="bd-process__item">
                <div className="bd-process__thumb w-img">
                  <a href="#">
                    <img src="assets/img/process/03.png" alt="process-thumb" />
                  </a>
                  <div className="bd-process__number">
                    <span>03</span>
                  </div>
                </div>
                <div className="bd-process__content">
                  <h4>
                    <a href="about.html">Management system</a>
                  </h4>
                  <span>step three</span>
                </div>
              </div>
              <div className="bd-process__item">
                <div className="bd-process__thumb w-img">
                  <a href="#">
                    <img src="assets/img/process/04.png" alt="process-thumb" />
                  </a>
                  <div className="bd-process__number">
                    <span>04</span>
                  </div>
                </div>
                <div className="bd-process__content">
                  <h4>
                    <a href="about.html">Improvement plans</a>
                  </h4>
                  <span>step four</span>
                </div>
              </div>
              <div className="bd-process__item">
                <div className="bd-process__thumb w-img">
                  <a href="#">
                    <img src="assets/img/process/05.png" alt="process-thumb" />
                  </a>
                  <div className="bd-process__number">
                    <span>05</span>
                  </div>
                </div>
                <div className="bd-process__content">
                  <h4>
                    <a href="#">Performance reports</a>
                  </h4>
                  <span>step five</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Process area start */}
        {/* Service cta area start */}
        <section className="bd-service__cta-area pb-75">
          <div className="container">
            <div className="bd-service__cta-border" />
            <div className="row">
              <div className="col-xl-9 col-lg-12">
                <div className="bd-service__cta-wrapper mb-30">
                  <div className="bd-service__cta-content">
                    <img src="assets/img/cta/cta-icon-01.png" alt="cta-icon" />
                    <h3>
                      WE’RE CARING ABOUT OUR <br />
                      farm GROWTH
                    </h3>
                  </div>
                  <div className="bd-service__cta-paragraph">
                    <p>
                      We have been working in this industry for more than 30
                      years with trust and honesty. All hands must be on deck if
                      we are to achieve
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-end mb-30">
                <div className="bd-service__cta-btn mt-5 text-xl-end text-start">
                  <a className="bd-theme__btn-4" href="#">
                    get a quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service cta area end */}
        {/* News area start */}
        <section className="bd-news__area grey-bg pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="bd-section__title-wrapper text-center mb-50">
                <span className="bd-sub__title">News Feeds</span>
                <h2 className="bd-section__title">blog &amp; insights</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-news__item-3 mb-60">
                  <div className="bd-news__date">
                    <h2>10</h2>
                    <span>Jun</span>
                  </div>
                  <div className="bd-news__content-3">
                    <span>Farm, Meat</span>
                    <h3>
                      <a href="news-details.html">
                        to influence consumer behavior, also used
                      </a>
                    </h3>
                    <p>
                      We have been working in this industry for more than 30
                      years with trust and honesty. all hands must be.
                    </p>
                    <div className="bd-news__btn">
                      <a className="bd-link__btn" href="news-details.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-news__item-3 mb-60">
                  <div className="bd-news__date">
                    <h2>15</h2>
                    <span>Feb</span>
                  </div>
                  <div className="bd-news__content-3">
                    <span>Farm, Milk</span>
                    <h3>
                      <a href="news-details.html">
                        to influence consumer behavior, also used
                      </a>
                    </h3>
                    <p>
                      We have been working in this industry for more than 30
                      years with trust and honesty. all hands must be.
                    </p>
                    <div className="bd-news__btn">
                      <a className="bd-link__btn" href="news-details.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="bd-news__item-3 mb-60">
                  <div className="bd-news__date">
                    <h2>25</h2>
                    <span>Mar</span>
                  </div>
                  <div className="bd-news__content-3">
                    <span>Farm, Corganic</span>
                    <h3>
                      <a href="news-details.html">
                        to influence consumer behavior, also used
                      </a>
                    </h3>
                    <p>
                      We have been working in this industry for more than 30
                      years with trust and honesty. all hands must be.
                    </p>
                    <div className="bd-news__btn">
                      <a className="bd-link__btn" href="news-details.html">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News area end */}
      </main>
      {/* Body main wrapper end */}
      {/* Footer area start */}
      <footer>
        <section
          className="bd-footer__area footer__overlay footer__bg-thumb"
          data-background="assets/img/bg/pattern-bg.png"
        >
          <div className="footer__style-3">
            <div className="bd-footer__top-2">
              <div className="container">
                <div className="bd-footer__top-main-2 white-bg">
                  <div className="row align-items-center">
                    <div className="col-xxl-4 col-xl-3">
                      <div className="bd-footer__top-text">
                        <h3>Subscrive Our Newsletter To Get More Updates</h3>
                      </div>
                    </div>
                    <div className="col-xxl-8 col-xl-9">
                      <form action="#">
                        <div className="bd-footer__top-right">
                          <div className="bd-cta__input two">
                            <input
                              type="text"
                              placeholder="e.g. jhon william"
                            />
                            <i className="fa-solid fa-user" />
                          </div>
                          <div className="bd-cta__input two">
                            <input type="text" placeholder="info@webmail.com" />
                            <i className="fa-solid fa-envelope-open" />
                          </div>
                          <div className="bd-footer__btn">
                            <button className="bd-theme__btn-3">
                              subscribe now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bd-footer__main-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="bd-footer__widget footer-col-5 mb-40">
                      <div className="bd-footer__widget-bg">
                        <div className="bd-footer__logo mb-30">
                          <a href="index.html">
                            <img src="assets/img/logo/logo-5.png" alt="logo" />
                          </a>
                        </div>
                        <div className="bd-footer__paragraph">
                          <p>
                            A farm is a plot of land that is used to grow crops
                            &amp; to raise livestock.
                          </p>
                        </div>
                        <div className="bd-footer__social-2">
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
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="bd-footer__widget footer-col-6 mb-40">
                      <div className="bd-footer__title">
                        <h4>Services</h4>
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
                  <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                    <div className="bd-footer__widget footer-col-7 mb-40">
                      <div className="bd-footer__title">
                        <h4>Services</h4>
                      </div>
                      <div className="bd-footer__link-2">
                        <ul>
                          <li>
                            <a href="#">New Projects</a>
                          </li>
                          <li>
                            <a href="#">Our Services</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Get in Touch</a>
                          </li>
                          <li>
                            <a href="#">Volunteers</a>
                          </li>
                          <li>
                            <a href="#">Get In Touch</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                    <div className="bd-footer__widget footer-col-8 mb-40">
                      <div className="bd-footer__title">
                        <h4>Business hours</h4>
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
                              <a href="tel:00011122233">000 111 222 33</a>
                            </div>
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
                    <div className="bd-copyright__wrapper pt-60 pb-25">
                      <div className="bd-copyright__border">
                        <div className="bd-copyright__text">
                          <p>
                            Copyright &amp; design by{" "}
                            <span>
                              <a
                                target="_blank"
                                href="https://themeforest.net/user/bdevs/portfolio"
                              >
                                @bdevs
                              </a>
                            </span>{" "}
                            - 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* Footer area end  */}
      {/* Back to top start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* Back to top end */}
      {/* JS here */}
    </>
  );
};

export default AllHome2;
